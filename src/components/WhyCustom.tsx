import { Button } from "@/components/ui/button";
import { Zap, Shield, Rocket, Code2, CheckCircle, X } from "lucide-react";

const WhyCustom = () => {
  const advantages = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performanță Superioară",
      description: "Cod optimizat care încarcă de 3x mai rapid decât template-urile standard"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Securitate Avansată",
      description: "Protecție împotriva vulnerabilităților comune din template-uri"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Scalabilitate Nelimitată",
      description: "Arhitectură flexibilă care crește odată cu afacerea ta"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Cod Proprietar",
      description: "Fără dependențe de terți sau licențe restrictive"
    }
  ];

  const comparison = [
    {
      feature: "Timp de încărcare",
      custom: "< 2 secunde",
      template: "5-8 secunde",
      customGood: true
    },
    {
      feature: "SEO Performance",
      custom: "100% Optimizat",
      template: "Limitat",
      customGood: true
    },
    {
      feature: "Personalizare",
      custom: "Nelimitată",
      template: "Restricționată",
      customGood: true
    },
    {
      feature: "Securitate",
      custom: "Nivel Enterprise",
      template: "Vulnerabilități comune",
      customGood: true
    },
    {
      feature: "Dependențe",
      custom: "Zero",
      template: "Plugin-uri multiple",
      customGood: true
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            De ce <span className="text-gradient">Cod Custom</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Template-urile limitează potențialul afacerii tale. Codul custom oferă libertate totală.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {advantage.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="card-premium overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-display font-bold text-center mb-8">
              Cod Custom vs. Template/Shopify
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4">Caracteristică</th>
                    <th className="text-center py-4 px-4 text-primary">Cod Custom</th>
                    <th className="text-center py-4 px-4 text-muted-foreground">Template/Shopify</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-background-secondary/50 transition-colors">
                      <td className="py-4 px-4 font-medium">{item.feature}</td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-primary font-medium">{item.custom}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <X className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{item.template}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="xl">
            Solicită o Consultație Gratuită
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyCustom;