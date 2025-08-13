import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Cookies = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Politica de Cookie-uri — Code Bloom</title>
      </Helmet>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-display font-bold mb-6">
              Politica de cookie-uri
            </h1>
            <p className="text-muted-foreground mb-6">
              Ultima actualizare: {new Date().toLocaleDateString("ro-RO")}
            </p>

            <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  1. Ce sunt cookie-urile?
                </h2>
                <p>
                  Cookie-urile sunt fișiere mici plasate pe dispozitivul dvs.
                  atunci când vizitați un site web. Ele ajută la funcționarea
                  corectă a site-ului și la îmbunătățirea experienței.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  2. Tipuri de cookie-uri utilizate
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Cookie-uri esențiale: necesare pentru funcționarea site-ului
                  </li>
                  <li>
                    Cookie-uri de performanță/analitice: pentru statistici (ex.
                    trafic, pagini vizitate)
                  </li>
                  <li>Cookie-uri de funcționalitate: rețin preferințe</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  3. Temeiul legal
                </h2>
                <p>
                  Conform legislației, cookie-urile esențiale pot fi setate fără
                  consimțământ. Pentru cele neesențiale, solicităm
                  consimțământul dvs. (unde este cazul).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  4. Gestionarea cookie-urilor
                </h2>
                <p>
                  Vă puteți ajusta preferințele din setările browserului:
                  blocare, ștergere, notificare la setare de cookie-uri.
                  Rețineți că blocarea cookie-urilor esențiale poate afecta
                  funcționarea site-ului.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  5. Terți
                </h2>
                <p>
                  Putem utiliza servicii terțe (ex. instrumente analitice).
                  Acestea pot seta propriile cookie-uri conform politicilor lor.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  6. Contact
                </h2>
                <p>
                  Pentru întrebări legate de cookie-uri, ne puteți contacta la{" "}
                  <a
                    className="text-primary"
                    href="mailto:codebloom02@gmail.com"
                  >
                    codebloom02@gmail.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
