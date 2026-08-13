#!/usr/bin/env bash
# Deploy the portfolio chatbot Lambda.
#
# The prompt this function serves lives in lambda_function.py, so editing the
# bot's personality or facts means editing that file and running this script.
#
#   ./backend/chatbot/deploy.sh
#
set -euo pipefail

FUNCTION=chatbot-handler
REGION=us-east-1
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ZIP="$(mktemp -d)/chatbot.zip"

echo "==> Packaging"
(cd "$HERE" && zip -q -j "$ZIP" lambda_function.py)

echo "==> Backing up the currently deployed code"
BACKUP="$HERE/.last-deployed.zip"
URL="$(aws lambda get-function --function-name "$FUNCTION" --region "$REGION" \
        --query Code.Location --output text)"
curl -fsS -o "$BACKUP" "$URL"
echo "    saved to $BACKUP (gitignored)"

echo "==> Uploading code"
aws lambda update-function-code \
  --function-name "$FUNCTION" --region "$REGION" \
  --zip-file "fileb://$ZIP" --output text --query LastUpdateStatus
aws lambda wait function-updated --function-name "$FUNCTION" --region "$REGION"

# A cold start plus a Bedrock call does not fit in the Lambda default of 3s,
# which silently 500s the first message a visitor sends. 15s leaves room; the
# API Gateway integration still caps the request at 30s.
echo "==> Ensuring timeout and memory are sane"
aws lambda update-function-configuration \
  --function-name "$FUNCTION" --region "$REGION" \
  --timeout 15 --memory-size 512 --output text --query "[Timeout,MemorySize]"
aws lambda wait function-updated --function-name "$FUNCTION" --region "$REGION"

echo "==> Smoke test"
EVENT="$(mktemp)"
printf '%s' '{"body":"{\"question\":\"What does Mehdi do?\"}"}' > "$EVENT"
OUT="$(mktemp)"
aws lambda invoke --function-name "$FUNCTION" --region "$REGION" \
  --cli-binary-format raw-in-base64-out \
  --payload "file://$EVENT" "$OUT" --output text --query FunctionError
cat "$OUT"
echo
echo "==> Done"
