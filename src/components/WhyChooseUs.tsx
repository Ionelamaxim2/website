import { Award, Clock, Users, Headphones, Target, Code } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Calitate Garantată",
      description: "Procese riguroase de QA și code review în fiecare livrare",
      stats: "QA riguros",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Livrare Rapidă",
      description:
        "Respectăm deadlines-urile stabilite și livrăm de obicei cu 20% mai devreme",
      stats: "Livrare în timp",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Echipă Dedicată",
      description:
        "Fiecare proiect beneficiază de o echipă completă: dezvoltatori, designeri, PM",
      stats: "Echipă completă",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Support 24/7",
      description:
        "Suport tehnic disponibil non-stop pentru menținerea performanțelor optime",
      stats: "Disponibilitate totală",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Focus pe ROI",
      description:
        "Fiecare decizie tehnică este luată cu scopul de a maximiza returul investiției",
      stats: "+150% ROI mediu",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Tehnologii Premium",
      description:
        "Folosim cele mai noi tehnologii: React, Next.js, TypeScript, Cloud Infrastructure",
      stats: "Tech de vârf",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            De ce să ne <span className="text-gradient">Alegi</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Suntem mai mult decât dezvoltatori - suntem partenerii tăi în
            transformarea digitală
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="card-premium p-8 hover:shadow-premium transition-all duration-500 group hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{reason.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <div className="text-sm text-accent font-medium mb-3">
                    {reason.stats}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="card-premium p-8">
          <h3 className="text-2xl font-display font-bold text-center mb-12">
            Procesul Nostru de Lucru
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultație",
                desc: "Analizăm nevoile și obiectivele",
              },
              {
                step: "02",
                title: "Planificare",
                desc: "Strategia și arhitectura tehnică",
              },
              {
                step: "03",
                title: "Dezvoltare",
                desc: "Implementare cu actualizări regulate",
              },
              {
                step: "04",
                title: "Launch & Support",
                desc: "Lansare și mentenanță continuă",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-white text-lg">
                  {phase.step}
                </div>
                <h4 className="font-semibold mb-2">{phase.title}</h4>
                <p className="text-muted-foreground text-sm">{phase.desc}</p>

                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -ml-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
