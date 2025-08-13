import { Button } from "@/components/ui/button";
import { Store, Building, Users, ArrowRight } from "lucide-react";

const WebsiteTypes = () => {
  const websiteTypes = [
    {
      icon: <Store className="w-8 h-8" />,
      title: "E-commerce Premium",
      description:
        "Magazine online optimizate pentru conversii maxime, cu integrări avansate de plată și sistem de management complet.",
      features: [
        "WooCommerce/Shopify Custom",
        "Plăți Securizate",
        "Management Stocuri",
        "Analytics Avansate",
      ],
      price: "3000 €",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Website Corporate",
      description:
        "Prezentări corporate profesionale care inspiră încredere și transmit autoritatea brandului tău în piață.",
      features: [
        "Design Responsiv",
        "CMS Personalizat",
        "SEO Optimizat",
        "Întegrări API",
      ],
      price: "2000 €",
      gradient: "from-secondary to-accent",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Landing Page",
      description:
        "Pagini de destinație cu rate de conversie excepționale, optimize pentru campanii de marketing și lead generation.",
      features: [
        "Conversie Optimizată",
        "A/B Testing",
        "Integrări Marketing",
        "Loading Ultra-Rapid",
      ],
      price: "1500 €",
      gradient: "from-accent to-secondary",
    },
  ];

  return (
    <section id="prices" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Tipuri de <span className="text-gradient">Website-uri</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fiecare soluție este dezvoltată cu tehnologii de vârf pentru a livra
            performanțe excepționale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {websiteTypes.map((type, index) => (
            <div
              key={index}
              className="card-premium p-8 hover:shadow-premium transition-all duration-500 group hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${type.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-white">{type.icon}</div>
              </div>

              <h3 className="text-2xl font-display font-semibold mb-4 group-hover:text-primary transition-colors">
                {type.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {type.description}
              </p>

              <ul className="space-y-3 mb-8">
                {type.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {type.price}
                  </span>
                </div>
                <Button asChild variant="premium" className="w-full group">
                  <a
                    href={
                      (import.meta as any).env.VITE_ROUTER_MODE === "hash"
                        ? "/#/contact"
                        : "/contact"
                    }
                  >
                    Solicită Ofertă
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteTypes;
