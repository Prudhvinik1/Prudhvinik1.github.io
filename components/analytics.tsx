"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Suspense } from "react";

// Use environment variable if available, otherwise use the provided tracking ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Page view tracker component - tracks page changes
function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      (window as any).gtag &&
      pathname &&
      GA_MEASUREMENT_ID
    ) {
      (window as any).gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname,
        page_location: window.location.href,
      });
    }
  }, [pathname]);

  return null;
}

export function Analytics() {
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      {/* Load Google Analytics script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && GA_MEASUREMENT_ID) {
            console.log(`Google Analytics loaded: ${GA_MEASUREMENT_ID}`);
          }
        }}
        onError={(e) => {
          if (GA_MEASUREMENT_ID) {
            console.error("Failed to load Google Analytics:", e);
          }
        }}
      />
      {/* Initialize Google Analytics */}
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              page_location: window.location.href,
              send_page_view: true
            });
            console.log('Google Analytics initialized: ${GA_MEASUREMENT_ID}');
          `,
        }}
      />
      {/* Track page views on route changes */}
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  );
}

// Privacy-friendly alternative: Plausible Analytics
export function PlausibleAnalytics() {
  const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  if (!PLAUSIBLE_DOMAIN) {
    return null;
  }

  return (
    <Script
      defer
      data-domain={PLAUSIBLE_DOMAIN}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
