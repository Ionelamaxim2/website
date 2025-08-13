import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

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
      <div className="max-w-4xl mx-auto rounded-2xl border border-card-border bg-background/70 backdrop-blur-xl shadow-premium animate-fade-up">
        <div className="p-4 md:p-5">
          <div className="flex items-start gap-3 mb-3">
            <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/15 text-primary shadow-glow-primary">
              <Cookie className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">
                Setări cookie-uri
              </div>
              <div className="text-sm text-muted-foreground">
                Folosim cookie-uri esențiale și opționale pentru a îmbunătăți
                experiența. Citește{" "}
                <a className="text-primary hover:underline" href="/cookies">
                  Politica de cookie-uri
                </a>
                .
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center gap-3">
              <label className="px-3 py-2 rounded-full border bg-background text-sm flex items-center gap-2 opacity-80">
                <input
                  type="checkbox"
                  checked={consent.functional}
                  onChange={(e) =>
                    setConsent((c) => ({ ...c, functional: e.target.checked }))
                  }
                  disabled
                />
                Esențiale
              </label>
              <label className="px-3 py-2 rounded-full border bg-background text-sm flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={consent.analytics}
                  onChange={(e) =>
                    setConsent((c) => ({ ...c, analytics: e.target.checked }))
                  }
                />
                Analitice
              </label>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full"
                onClick={save}
              >
                Salvează
              </Button>
              <Button
                variant="default"
                size="sm"
                className="rounded-full"
                onClick={acceptAll}
              >
                Acceptă tot
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
