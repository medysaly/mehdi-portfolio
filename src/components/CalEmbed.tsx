"use client";

import Script from "next/script";

/**
 * Loads the cal.com embed once for the whole page. Once it is up, anything
 * carrying `data-cal-link` opens the booking popup in place instead of
 * navigating. Every one of those elements is also a real anchor to cal.com,
 * so if this script is blocked or slow the click still books a call, just on
 * cal.com's own page.
 */
export default function CalEmbed() {
  return (
    <Script id="cal-embed" strategy="afterInteractive">
      {`
        (function (C, A, L) {
          let p = function (a, ar) { a.q.push(ar); };
          let d = C.document;
          C.Cal = C.Cal || function () {
            let cal = C.Cal; let ar = arguments;
            if (!cal.loaded) {
              cal.ns = {}; cal.q = cal.q || [];
              d.head.appendChild(d.createElement("script")).src = A;
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api = function () { p(api, arguments); };
              const namespace = ar[1];
              api.q = api.q || [];
              if (typeof namespace === "string") {
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else { p(cal, ar); }
              return;
            }
            p(cal, ar);
          };
        })(window, "https://app.cal.com/embed/embed.js", "init");

        Cal("init", { origin: "https://cal.com" });
        Cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
          cssVarsPerTheme: { light: { "cal-brand": "#0066FF" } },
        });
      `}
    </Script>
  );
}
