import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "sonner";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID_NEWSLETTER,
  areEmailEnvVarsConfigured,
} from "@/lib/env";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    // Servicii (dreapta)
    {
      title: "Servicii",
      links: [
        { name: "Website Custom", href: "/prices" },
        { name: "E-commerce", href: "/prices" },
        { name: "Landing Pages", href: "/prices" },
        { name: "Aplicații Web", href: "/prices" },
        { name: "Consultanță", href: "/contact" },
      ],
    },
    // Companie (dreapta)
    {
      title: "Companie",
      links: [
        { name: "Despre Noi", href: "/about" },
        { name: "Portofoliu", href: "/about" },
        { name: "Proces", href: "/about" },
        { name: "Cariere", href: "/about" },
        { name: "Blog", href: "/about" },
      ],
    },
  ];

  // Social links eliminate la cerere

  return (
    <footer className="bg-background-secondary border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-display font-bold text-gradient mb-4">
              Code Bloom
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Transformăm idei în experiențe digitale premium care aduc
              rezultate măsurabile pentru afacerea ta.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:codebloom02@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  codebloom02@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+40786772343"
                  className="hover:text-primary transition-colors"
                >
                  +40 786 772 343
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Constanța, România</span>
              </div>
            </div>

            {/* Social Links removed by request */}
            <div className="h-10" />
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm link-underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-border pt-12 mt-12">
          <div className="max-w-md">
            <h4 className="font-semibold text-foreground mb-2">
              Rămâi la curent
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              Primește cele mai noi tendințe în web development și oferte
              exclusive.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Code Bloom. Toate drepturile rezervate.
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="/terms" className="hover:text-primary transition-colors">
                Termeni și Condiții
              </a>
              <a
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Politica de Confidențialitate
              </a>
              <a
                href="/cookies"
                className="hover:text-primary transition-colors"
              >
                Cookie-uri
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function NewsletterForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const email = (formData.get("email") as string) || "";
    if (!email) return;
    try {
      setSubmitting(true);
      if (areEmailEnvVarsConfigured() && EMAILJS_TEMPLATE_ID_NEWSLETTER) {
        emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY! });
        await emailjs.send(
          EMAILJS_SERVICE_ID!,
          EMAILJS_TEMPLATE_ID_NEWSLETTER,
          {
            email,
          }
        );
        toast.success("Te-ai abonat cu succes.");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        toast.success("Demo: abonare înregistrată local.");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      }
      form.reset();
    } catch (err) {
      toast.error("Eroare la abonare. Încearcă din nou.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          name="email"
          type="email"
          placeholder="Email-ul tău"
          required
          className="flex-1 px-4 py-2 bg-card border border-card-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <Button
          type="submit"
          variant="default"
          size="sm"
          className="group rounded-full"
          disabled={submitting}
        >
          <CheckCircle2 className="w-4 h-4 mr-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          {submitting ? "Se trimite..." : "Abonează-te"}
        </Button>
      </form>
      {submitted && (
        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-card-border bg-background/70 px-3 py-1 text-sm text-foreground shadow-soft">
          <CheckCircle2 className="w-4 h-4 text-primary" />
          Te-ai abonat cu succes
        </div>
      )}
    </div>
  );
}
