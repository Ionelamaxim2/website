import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Prices = () => {
  const plans = [
    {
      name: "Starter",
      price: "1500",
      period: "€",
      description:
        "Perfect pentru afaceri mici care au nevoie de prezență online profesională",
      icon: <Star className="w-8 h-8" />,
      gradient: "from-secondary to-accent",
      features: [
        "Design responsive (mobil + desktop)",
        "Până la 5 pagini",
        "Optimizare SEO de bază",
        "Integrare Google Analytics",
        "Certificat SSL gratuit",
        "Hosting 1 an inclus",
        "Support 3 luni",
        "Formulare de contact",
        "Galerie foto",
        "Timp livrare: 2-3 săptămâni",
      ],
      popular: false,
    },
    {
      name: "Business",
      price: "2000",
      period: "€",
      description:
        "Soluția completă pentru afaceri în creștere cu funcționalități avansate",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-primary to-primary-glow",
      features: [
        "Tot din pachetul Starter",
        "Până la 10 pagini",
        "Blog integrat cu CMS",
        "Integrare rețele sociale",
        "Sistem de newsletter",
        "Chat online",
        "Optimizare avansată pentru conversii",
        "Google My Business setup",
        "Backup automat săptămânal",
        "Support 6 luni",
        "Rapoarte lunare de performanță",
        "Timp livrare: 3-4 săptămâni",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "3000",
      period: "€",
      description:
        "Pentru afaceri mari cu cerințe complexe și funcționalități custom",
      icon: <Crown className="w-8 h-8" />,
      gradient: "from-accent to-secondary",
      features: [
        "Tot din pachetul Business",
        "Pagini nelimitate",
        "E-commerce integrat (până la 50 produse)",
        "Sistem de rezervări",
        "Dashboard admin avansat",
        "Integrare CRM",
        "API custom pentru integrări",
        "Multi-limbă support",
        "CDN global pentru performanță",
        "Backup zilnic",
        "Support prioritar 12 luni",
        "Consultanță strategică",
        "Timp livrare: 6-8 săptămâni",
      ],
      popular: false,
    },
  ];

  const addons = [
    {
      name: "E‑commerce Avansat",
      price: "+1000 €",
      description:
        "Magazin online cu funcționalități complete pentru 100+ produse",
    },
    {
      name: "Aplicație Mobilă",
      price: "3000–5000 €",
      description: "App nativă iOS/Android pentru afacerea ta",
    },
    {
      name: "Marketing",
      price: "500–1500 €",
      description: "Sisteme automate de email marketing și lead nurturing",
    },
    {
      name: "Integrare ERP/CRM",
      price: "1500–3000 €",
      description: "Conectare cu sistemele existente ale companiei",
    },
  ];

  const faqs = [
    {
      question: "Ce include hosting-ul gratuit?",
      answer:
        "Hosting-ul inclus are performanță optimizată, backup automat, certificat SSL și suport tehnic. După primul an, costul este de 200 lei/an.",
    },
    {
      question: "Pot modifica conținutul singur?",
      answer:
        "Da! Toate site-urile includ un sistem de management ușor de folosit pentru actualizarea conținutului fără cunoștințe tehnice.",
    },
    {
      question: "Cât durează dezvoltarea?",
      answer:
        "Depinde de complexitate: Starter (2-3 săpt.), Business (3-4 săpt.), Enterprise (6-8 săpt.). Timpul poate varia în funcție de feedback și modificări.",
    },
    {
      question: "Oferiți garanție?",
      answer:
        "Da, oferim garanție completă pentru toate funcționalitățile dezvoltate și support gratuit pentru perioada specificată în fiecare pachet.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Preturi — Code Bloom</title>
        <meta
          name="description"
          content="Pachete și prețuri pentru dezvoltare web premium: Starter, Business, Enterprise și servicii adiționale."
        />
      </Helmet>
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Prețuri <span className="text-gradient">Transparente</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Pachete complete adaptate nevoilor afacerii tale, fără costuri
              ascunse sau surprize neplăcute. Alege soluția perfectă pentru
              tine.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`card-premium p-8 relative ${
                    plan.popular
                      ? "border-2 border-primary shadow-glow-primary"
                      : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Cel mai popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <div className="text-white">{plan.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-lg text-muted-foreground ml-2">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant={plan.popular ? "hero" : "outline"}
                    className="w-full"
                    size="lg"
                  >
                    <a href="/contact">
                      {plan.popular ? "Alege Business" : `Alege ${plan.name}`}
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Servicii <span className="text-gradient">Adiționale</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Extinde funcționalitatea site-ului cu servicii specializate
                pentru nevoile specifice
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {addons.map((addon, index) => (
                <div
                  key={index}
                  className="card-premium p-6 hover:shadow-premium transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{addon.name}</h3>
                    <div className="text-2xl font-bold text-primary">
                      {addon.price}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {addon.description}
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <a href="/contact">Solicită Detalii</a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Întrebări <span className="text-gradient">Frecvente</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Răspunsuri la cele mai importante întrebări despre serviciile
                noastre
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="card-premium p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Prices;
