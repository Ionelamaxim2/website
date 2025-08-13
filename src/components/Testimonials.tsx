import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alexandru Popescu",
      role: "CEO, TechFlow Solutions",
      avatar: "AP",
      content: "Code Bloom a transformat complet prezența noastră online. Website-ul dezvoltat de ei a crescut conversiile cu 180% în primele 3 luni.",
      rating: 5,
      company: "TechFlow Solutions"
    },
    {
      name: "Maria Ionescu",
      role: "Marketing Director, StyleHub",
      avatar: "MI",
      content: "Profesionalismul și atenția la detalii sunt impresionante. Au livrat exact ce am vizualizat, chiar mai bine decât am așteptat.",
      rating: 5,
      company: "StyleHub"
    },
    {
      name: "Cristian Dumitrescu",
      role: "Founder, EcoVerde",
      avatar: "CD",
      content: "Echipa Code Bloom înțelege cu adevărat nevoile business-ului. ROI-ul a fost vizibil încă din prima lună după lansare.",
      rating: 5,
      company: "EcoVerde"
    },
    {
      name: "Andreea Stan",
      role: "E-commerce Manager, FashionForward",
      avatar: "AS",
      content: "Magazinul online dezvoltat de Code Bloom este nu doar frumos, ci și extrem de funcțional. Vânzările au crescut cu 250%.",
      rating: 5,
      company: "FashionForward"
    },
    {
      name: "Radu Gheorghiu",
      role: "CTO, DataDriven",
      avatar: "RG",
      content: "Calitatea codului și arhitectura tehnică sunt excepționale. Scalabilitatea sistemului depășește toate așteptările.",
      rating: 5,
      company: "DataDriven"
    },
    {
      name: "Elena Vasilescu",
      role: "Brand Manager, LuxuryLife",
      avatar: "EV",
      content: "Design-ul premium și funcționalitățile avansate au pozitionat brandul nostru ca lider în industrie.",
      rating: 5,
      company: "LuxuryLife"
    }
  ];

  const getAvatarGradient = (index: number) => {
    const gradients = [
      "from-primary to-primary-glow",
      "from-secondary to-accent",
      "from-accent to-secondary",
      "from-primary to-secondary",
      "from-secondary to-primary",
      "from-accent to-primary"
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ce spun <span className="text-gradient">Clienții</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Succesul clienților noștri este cea mai bună dovadă a calității serviciilor noastre
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-premium p-8 hover:shadow-premium transition-all duration-500 group hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary opacity-50" />
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getAvatarGradient(index)} flex items-center justify-center text-white font-semibold`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-accent">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          {[
            { number: "100+", label: "Clienți Mulțumiți" },
            { number: "180%", label: "Creștere Conversii Medie" },
            { number: "99%", label: "Rata de Satisfacție" },
            { number: "24/7", label: "Support Disponibil" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;