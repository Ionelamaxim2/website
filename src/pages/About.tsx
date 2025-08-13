import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Award, Target, Code, ArrowRight, CheckCircle } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Alexandru Mihai",
      role: "Lead Developer & Co-Founder",
      avatar: "AM",
      description: "Expert în React, Next.js și arhitectura scalabilă. 8+ ani experiență în web development.",
      gradient: "from-primary to-primary-glow"
    },
    {
      name: "Maria Georgescu",
      role: "UI/UX Designer & Co-Founder",
      avatar: "MG", 
      description: "Specialist în design de interfețe premium și experiența utilizatorilor. Adobe Certified Expert.",
      gradient: "from-secondary to-accent"
    },
    {
      name: "Cristian Popescu",
      role: "Senior Full-Stack Developer",
      avatar: "CP",
      description: "Backend architecture specialist cu expertise în Node.js, PostgreSQL și cloud infrastructure.",
      gradient: "from-accent to-secondary"
    },
    {
      name: "Andreea Ionescu",
      role: "Project Manager",
      avatar: "AI",
      description: "Coordonează echipele pentru livrarea la timp și comunicarea eficientă cu clienții.",
      gradient: "from-primary to-secondary"
    }
  ];

  const values = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Excelență Tehnică",
      description: "Folosim cele mai noi tehnologii și best practices pentru a livra cod de cea mai înaltă calitate."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Colaborare Transparentă", 
      description: "Comunicăm deschis în fiecare etapă și implicăm clienții în procesul de dezvoltare."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Focus pe Rezultate",
      description: "Fiecare proiect este dezvoltat cu obiectivul clar de a aduce valoare măsurabilă business-ului."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Învățare Continuă",
      description: "Investim constant în perfecționarea echipei pentru a fi mereu în avangarda tehnologiei."
    }
  ];

  const milestones = [
    { year: "2019", title: "Înființarea Code Bloom", description: "Pornirea cu viziunea de a revolutiona web development-ul în România" },
    { year: "2020", title: "Primul proiect major", description: "Dezvoltarea unei platforme e-commerce cu 50k+ utilizatori" },
    { year: "2021", title: "Expansiunea echipei", description: "Creșterea la 10+ specialiști și lansarea diviziei de consultanță" },
    { year: "2022", title: "Recunoaștere națională", description: "Premiul pentru cel mai bun studio de web development" },
    { year: "2023", title: "100+ proiecte livrate", description: "Atingerea milestone-ului de 100 de proiecte cu succes" },
    { year: "2024", title: "Tehnologii AI integrate", description: "Pionieri în integrarea soluțiilor AI în dezvoltarea web" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Despre <span className="text-gradient">Code Bloom</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Suntem o echipă de pasionați care transformă idei în experiențe digitale premium, 
              folosind tehnologiile de vârf pentru a livra rezultate excepționale.
            </p>
            <Button variant="hero" size="xl">
              Începe un Proiect cu Noi
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-display font-bold mb-6">
                  Misiunea <span className="text-gradient">Noastră</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Să democratizăm accesul la tehnologie premium pentru afaceri de toate mărimile, 
                  oferind soluții web care nu doar că arată spectaculos, ci aduc și rezultate concrete, 
                  măsurabile prin creșterea conversiilor și satisfacției utilizatorilor.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Cod scalabil și mentenabil pe termen lung",
                    "Design centrat pe experiența utilizatorului", 
                    "Optimizare pentru performanță și SEO",
                    "Support și mentenanță continuă"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="card-premium p-8">
                <h3 className="text-2xl font-display font-semibold mb-4">
                  Viziunea <span className="text-gradient">2030</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Să devenim studioului de referință în Europa de Est pentru dezvoltarea 
                  de soluții web enterprise, recunoscuți pentru inovație, calitate tehnică 
                  și impact asupra afacerilor clienților noștri.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Valorile <span className="text-gradient">Noastre</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Principiile care ne ghidează în fiecare proiect și interacțiune cu clienții
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Echipa <span className="text-gradient">Code Bloom</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Specialiști cu experiență vastă, uniți de pasiunea pentru tehnologie și excelență
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="card-premium p-6 text-center hover:shadow-premium transition-all duration-500 hover:-translate-y-1">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl`}>
                    {member.avatar}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Povestea <span className="text-gradient">Noastră</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                De la startup la liderul pieței - evoluția Code Bloom în cifre și realizări
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="card-premium p-6 flex-1">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Pregătit să <span className="text-gradient">Colaborezi</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Hai să discutăm despre proiectul tău și să vedem cum putem aduce visurile tale digitale la viață.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Începe Proiectul Acum
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl">
                Programează o Consultație
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;