import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID_CONTACT,
  areEmailEnvVarsConfigured,
} from "@/lib/env";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact — Code Bloom</title>
        <meta
          name="description"
          content="Contactează Code Bloom pentru un website premium: completează formularul în 4 pași și primești răspuns rapid."
        />
      </Helmet>
      <Navbar />
      <main className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-display font-bold">
                Contact <span className="text-gradient">Code Bloom</span>
              </h1>
            </div>
            <MultiStepContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

// --- Multi-step form component ---
const steps = [
  "Despre tine",
  "Despre Companie",
  "Despre Website",
  "Servicii aditionale",
] as const;

type FormState = {
  name: string;
  email: string;
  phone?: string;
  site?: string;
  preferredContact: "Email" | "Telefon" | "WhatsApp" | "";
  company?: string;
  companySize?: string;
  budget?: string;
  timeline?: string;
  addons?: string[];
};

function MultiStepContactForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    site: "",
    preferredContact: "",
    company: "",
    companySize: "",
    budget: "",
    timeline: "",
    addons: [],
  });
  const [submitted, setSubmitted] = useState(false);

  const next = () => {
    if (step === 0) {
      if (!data.name || !data.email || !data.preferredContact) {
        toast.error(
          "Completează câmpurile obligatorii (Nume, Email, Metodă contact)."
        );
        return;
      }
    }
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const toggleAddon = (value: string) => {
    setData((d) => ({
      ...d,
      addons: d.addons?.includes(value)
        ? d.addons?.filter((a) => a !== value)
        : [...(d.addons || []), value],
    }));
  };

  return (
    <div className="rounded-2xl card-premium p-6">
      {/* Steps header */}
      <div className="mb-8">
        <div className="grid grid-cols-4 gap-6 items-center">
          {steps.map((label, i) => (
            <div key={label} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full border ${
                  i === step
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground/70"
                } flex items-center justify-center text-sm font-semibold`}
              >
                {i + 1}
              </div>
              <div className="h-px w-full bg-border my-2" />
              <div
                className={`text-center text-sm ${
                  i === step ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Step content */}
      {step === 0 && (
        <div className="grid md:grid-cols-2 gap-6 animate-fade-up">
          <Field label="Nume" required>
            <input
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="w-full px-4 py-3 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </Field>
          <Field label="Telefon (optional)">
            <input
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              className="w-full px-4 py-3 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </Field>
          <Field label="Email" required>
            <input
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="w-full px-4 py-3 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </Field>
          <Field label="Daca aveți deja un site, completați adresa">
            <input
              value={data.site}
              onChange={(e) => setData({ ...data, site: e.target.value })}
              className="w-full px-4 py-3 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </Field>
          <div className="md:col-span-2">
            <label className="block text-base font-semibold mb-2">
              Metoda preferată de contact{" "}
              <span className="text-destructive">*</span>
            </label>
            <Select
              value={data.preferredContact}
              onValueChange={(v) =>
                setData({ ...data, preferredContact: v as any })
              }
            >
              <SelectTrigger className="w-full bg-background border text-muted-foreground">
                <SelectValue placeholder="- selecteaza -" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Email">Email</SelectItem>
                <SelectItem value="Telefon">Telefon</SelectItem>
                <SelectItem value="WhatsApp">WhatsApp</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="grid md:grid-cols-2 gap-6 animate-fade-up">
          <Field label="Nume website">
            <input
              value={data.company}
              onChange={(e) => setData({ ...data, company: e.target.value })}
              className="w-full px-4 py-3 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </Field>
          <Field label="Număr pagini">
            <Select
              value={data.companySize}
              onValueChange={(v) => setData({ ...data, companySize: v })}
            >
              <SelectTrigger className="w-full bg-background border">
                <SelectValue placeholder="- selecteaza -" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-5">1-5</SelectItem>
                <SelectItem value="6-10">6-10</SelectItem>
                <SelectItem value="11-20">11-20</SelectItem>
                <SelectItem value=">20">&gt; 20</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
      )}

      {step === 2 && (
        <div className="grid md:grid-cols-2 gap-6 animate-fade-up">
          <Field label="Buget estimat">
            <Select
              value={data.budget}
              onValueChange={(v) => setData({ ...data, budget: v })}
            >
              <SelectTrigger className="w-full bg-background border">
                <SelectValue placeholder="- selecteaza -" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="<1500">&lt; 1500 €</SelectItem>
                <SelectItem value="1500–3000">1500–3000 €</SelectItem>
                <SelectItem value="3000–5000">3000–5000 €</SelectItem>
                <SelectItem value=">5000">&gt; 5000 €</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field label="Termen dorit">
            <Select
              value={data.timeline}
              onValueChange={(v) => setData({ ...data, timeline: v })}
            >
              <SelectTrigger className="w-full bg-background border">
                <SelectValue placeholder="- selecteaza -" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2-3">2-3 săpt.</SelectItem>
                <SelectItem value="3-4">3-4 săpt.</SelectItem>
                <SelectItem value="6-8">6-8 săpt.</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
      )}

      {step === 3 && (
        <div className="grid md:grid-cols-2 gap-6 animate-fade-up">
          {[
            "E‑commerce Avansat",
            "Aplicație Mobilă",
            "Marketing",
            "Integrare ERP",
          ].map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer hover:border-primary/50"
            >
              <input
                type="checkbox"
                checked={!!data.addons?.includes(opt)}
                onChange={() => toggleAddon(opt)}
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      )}

      {/* Controls */}
      <div className="mt-8 flex items-center justify-between">
        <Button variant="ghost" onClick={back} disabled={step === 0}>
          Înapoi
        </Button>
        {step < steps.length - 1 ? (
          <Button variant="default" onClick={next} className="px-8 h-12">
            Următorul Pas
          </Button>
        ) : (
          <Button
            variant="hero"
            onClick={() => {
              setSubmitted(true);
              const payload = {
                name: data.name,
                email: data.email,
                phone: data.phone,
                site: data.site,
                preferredContact: data.preferredContact,
                company: data.company,
                companySize: data.companySize,
                budget: data.budget,
                timeline: data.timeline,
                addons: (data.addons || []).join(", "),
              };

              if (areEmailEnvVarsConfigured() && EMAILJS_TEMPLATE_ID_CONTACT) {
                emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY! });
                emailjs
                  .send(
                    EMAILJS_SERVICE_ID!,
                    EMAILJS_TEMPLATE_ID_CONTACT,
                    payload
                  )
                  .then(() => {
                    toast.success("Mesaj trimis. Îți vom răspunde în curând.");
                  })
                  .catch(() => {
                    toast.error(
                      "Nu s-a putut trimite mesajul acum. Încearcă mai târziu."
                    );
                  });
              } else {
                toast.success("Form demo: trimis local.");
              }

              setData({
                name: "",
                email: "",
                phone: "",
                site: "",
                preferredContact: "",
                company: "",
                companySize: "",
                budget: "",
                timeline: "",
                addons: [],
              });
              setStep(0);
              toast.message("Message sent — wait for response.");
              setTimeout(() => setSubmitted(false), 5000);
            }}
            className="px-8 h-12"
          >
            Trimite
          </Button>
        )}
      </div>
      {submitted && (
        <div className="mt-6 rounded-xl border border-card-border bg-success/10 text-success px-4 py-3 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5" />
          <span>Message sent — wait for response.</span>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-base font-semibold mb-2">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      {children}
    </div>
  );
}
