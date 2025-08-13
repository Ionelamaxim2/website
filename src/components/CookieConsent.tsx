import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type ConsentState = {
  analytics: boolean;
  functional: boolean;
};

const COOKIE_KEY = "cb_cookie_consent_v1";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    analytics: false,
    functional: true,
  });

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY);
    if (!saved) {
      setVisible(true);
    } else {
      try {
        const parsed: ConsentState = JSON.parse(saved);
        setConsent(parsed);
      } catch {}
    }
  }, []);

  const acceptAll = () => {
    const next = { analytics: true, functional: true };
    localStorage.setItem(COOKIE_KEY, JSON.stringify(next));
    setConsent(next);
    setVisible(false);
  };

  const save = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(consent));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4">
      <div className="max-w-5xl mx-auto card-premium border border-card-border p-4 md:p-5 rounded-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            Folosim cookie-uri esențiale și opționale pentru a îmbunătăți
            experiența. Citiți{" "}
            <a className="text-primary" href="/cookies">
              Politica de cookie-uri
            </a>
            .
          </div>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={consent.functional}
                onChange={(e) =>
                  setConsent((c) => ({ ...c, functional: e.target.checked }))
                }
                disabled
              />
              Esențiale (obligatorii)
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={consent.analytics}
                onChange={(e) =>
                  setConsent((c) => ({ ...c, analytics: e.target.checked }))
                }
              />
              Analitice
            </label>
            <Button variant="ghost" size="sm" onClick={save}>
              Salvează
            </Button>
            <Button variant="default" size="sm" onClick={acceptAll}>
              Acceptă tot
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
