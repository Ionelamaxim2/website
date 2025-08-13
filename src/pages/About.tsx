import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import {
  Users,
  Award,
  Target,
  Code,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Alexandru Mihai",
      role: "Lead Developer & Co-Founder",
      avatar: "AM",
      description:
        "Expert în React, Next.js și arhitectura scalabilă. 8+ ani experiență în web development.",
      gradient: "from-primary to-primary-glow",
    },
    {
      name: "Maria Georgescu",
      role: "UI/UX Designer & Co-Founder",
      avatar: "MG",
      description:
        "Specialist în design de interfețe premium și experiența utilizatorilor. Adobe Certified Expert.",
      gradient: "from-secondary to-accent",
    },
    {
      name: "Cristian Popescu",
      role: "Senior Full-Stack Developer",
      avatar: "CP",
      description:
        "Backend architecture specialist cu expertise în Node.js, PostgreSQL și cloud infrastructure.",
      gradient: "from-accent to-secondary",
    },
    {
      name: "Andreea Ionescu",
      role: "Project Manager",
      avatar: "AI",
      description:
        "Coordonează echipele pentru livrarea la timp și comunicarea eficientă cu clienții.",
      gradient: "from-primary to-secondary",
    },
  ];

  const values = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Excelență Tehnică",
      description:
        "Folosim cele mai noi tehnologii și best practices pentru a livra cod de cea mai înaltă calitate.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Colaborare Transparentă",
      description:
        "Comunicăm deschis în fiecare etapă și implicăm clienții în procesul de dezvoltare.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Focus pe Rezultate",
      description:
        "Fiecare proiect este dezvoltat cu obiectivul clar de a aduce valoare măsurabilă business-ului.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Învățare Continuă",
      description:
        "Investim constant în perfecționarea echipei pentru a fi mereu în avangarda tehnologiei.",
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Înființarea Code Bloom",
      description:
        "Pornirea cu viziunea de a revolutiona web development-ul în România",
    },
    {
      year: "2020",
      title: "Primul proiect major",
      description: "Dezvoltarea unei platforme e-commerce cu 50k+ utilizatori",
    },
    {
      year: "2021",
      title: "Expansiunea echipei",
      description:
        "Creșterea la 10+ specialiști și lansarea diviziei de consultanță",
    },
    {
      year: "2022",
      title: "Recunoaștere națională",
      description: "Premiul pentru cel mai bun studio de web development",
    },
    {
      year: "2023",
      title: "100+ proiecte livrate",
      description: "Atingerea milestone-ului de 100 de proiecte cu succes",
    },
    {
      year: "2024",
      title: "Tehnologii AI integrate",
      description: "Pionieri în integrarea soluțiilor AI în dezvoltarea web",
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Despre Noi — Code Bloom</title>
        <meta
          name="description"
          content="Cine suntem și cum lucrăm. Valori, misiune și proiecte Code Bloom."
        />
      </Helmet>
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Despre <span className="text-gradient">Code Bloom</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Suntem o echipă de pasionați care transformă idei în experiențe
              digitale premium, folosind tehnologiile de vârf pentru a livra
              rezultate excepționale.
            </p>
            <Button asChild variant="hero" size="xl">
              <a href="/contact">
                Începe un Proiect cu Noi
                <ArrowRight className="w-5 h-5" />
              </a>
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
                  Să democratizăm accesul la tehnologie premium pentru afaceri
                  de toate mărimile, oferind soluții web care nu doar că arată
                  spectaculos, ci aduc și rezultate concrete, măsurabile prin
                  creșterea conversiilor și satisfacției utilizatorilor.
                </p>

                <div className="space-y-4">
                  {[
                    "Cod scalabil și mentenabil pe termen lung",
                    "Design centrat pe experiența utilizatorului",
                    "Optimizare pentru performanță și SEO",
                    "Support și mentenanță continuă",
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
                  Să devenim studioului de referință în Europa de Est pentru
                  dezvoltarea de soluții web enterprise, recunoscuți pentru
                  inovație, calitate tehnică și impact asupra afacerilor
                  clienților noștri.
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
                Principiile care ne ghidează în fiecare proiect și interacțiune
                cu clienții
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{value.icon}</div>
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

        {/* Project Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                PROIECTE
              </h2>
              <p className="text-muted-foreground mt-3">
                2 dintre website-urile demo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* IVU‑Wheels */}
              <a
                href="https://ivu-wheels.onrender.com"
                target="_blank"
                rel="noreferrer"
                className="relative card-premium overflow-hidden rounded-2xl p-0 group"
              >
                {/* Review background with overlay blur; for a real background image, replace this text with an image element */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 px-8 py-10 text-sm leading-relaxed text-foreground/30 opacity-40 select-none">
                    „Site-ul IVU‑Wheels este rapid, clar și ușor de folosit.
                    Catalogul de produse e impecabil, iar checkout-ul e fluid.
                    Recomand cu încredere!” — Maricela
                  </div>
                  <div className="absolute inset-0 backdrop-blur-md bg-background/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/40 to-transparent" />
                </div>

                {/* Center title */}
                <div className="relative z-10 flex items-center justify-center h-48">
                  <div className="px-6 py-3 rounded-full bg-background/70 backdrop-blur-md border border-primary/60 shadow-glow-primary">
                    <span className="text-xl md:text-2xl font-semibold text-primary">
                      IVU‑Wheels
                    </span>
                  </div>
                </div>
              </a>

              {/* IVURIRO */}
              <a
                href="https://ivuriro2.onrender.com"
                target="_blank"
                rel="noreferrer"
                className="relative card-premium overflow-hidden rounded-2xl p-0 group"
              >
                <div className="absolute inset-0">
                  <div className="absolute inset-0 px-8 py-10 text-sm leading-relaxed text-foreground/30 opacity-40 select-none">
                    „IVURIRO are o prezentare curată și profesionistă. Structura
                    informației este excelentă, iar interacțiunile sunt foarte
                    plăcute.” — Maricela
                  </div>
                  <div className="absolute inset-0 backdrop-blur-md bg-background/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/40 to-transparent" />
                </div>
                <div className="relative z-10 flex items-center justify-center h-48">
                  <div className="px-6 py-3 rounded-full bg-background/70 backdrop-blur-md border border-primary/60 shadow-glow-primary">
                    <span className="text-xl md:text-2xl font-semibold text-primary">
                      IVURIRO
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* CTA removed as requested */}
      </main>

      <Footer />
    </div>
  );
};

export default About;
