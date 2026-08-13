/** @type {import('next').NextConfig} */

// The site sent no security headers at all. These four are the ones that cost
// nothing to add and cannot break a static page.
//
// Deliberately no Content-Security-Policy here: the cal.com booking embed
// injects a script and an iframe from app.cal.com, so a policy strict enough
// to be worth having needs to be written against that and tested by actually
// opening the booking popup. Worth doing, but not something to bolt on blind.
const securityHeaders = [
  // No other origin may frame this site, so the buttons cannot be
  // click-jacked through an invisible overlay.
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Serve every asset as its declared type. Stops a browser from sniffing,
  // say, an uploaded image into executable script.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Send the full URL to this origin, only the origin to anyone else, so
  // outbound clicks do not leak the page someone came from.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Nothing here needs a camera, a microphone, or a location.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

module.exports = nextConfig;
