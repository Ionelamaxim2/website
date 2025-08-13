import { useEffect } from "react";

const COOKIE_KEY = "cb_cookie_consent_v1";

export default function AnalyticsLoader() {
  useEffect(() => {
    try {
      const consent = JSON.parse(localStorage.getItem(COOKIE_KEY) || "{}");
      if (!consent.analytics) return;
      const gaId = (import.meta as any).env.VITE_GA_MEASUREMENT_ID as
        | string
        | undefined;
      if (!gaId) return;

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);

      const inline = document.createElement("script");
      inline.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);} 
        gtag('js', new Date());
        gtag('config', '${gaId}');
      `;
      document.head.appendChild(inline);
    } catch {}
  }, []);

  return null;
}
