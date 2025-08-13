import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Politica de Confidențialitate — Code Bloom</title>
      </Helmet>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-display font-bold mb-6">
              Politica de confidențialitate
            </h1>
            <p className="text-muted-foreground mb-6">
              Ultima actualizare: {new Date().toLocaleDateString("ro-RO")}
            </p>

            <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  1. Operatorul de date
                </h2>
                <p>
                  Operatorul responsabil pentru prelucrarea datelor este Code
                  Bloom ("Noi").
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  2. Ce date colectăm
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Date de contact: nume, email, telefon</li>
                  <li>Date furnizate în formulare (ex. detalii proiect)</li>
                  <li>
                    Date tehnice: adresă IP, tip browser, cookie-uri (vezi
                    Politica de cookie-uri)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  3. Temeiuri legale
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Consimțământ (art. 6(1)(a) GDPR) pentru marketing și
                    răspunsuri la solicitări
                  </li>
                  <li>
                    Executarea unui contract sau demersuri precontractuale (art.
                    6(1)(b) GDPR)
                  </li>
                  <li>
                    Interes legitim (art. 6(1)(f) GDPR) pentru securitate și
                    îmbunătățire
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  4. Scopurile prelucrării
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Comunicare privind solicitările primite</li>
                  <li>Furnizarea serviciilor noastre</li>
                  <li>Întreținerea și securitatea website-ului</li>
                  <li>Newsletter (dacă v-ați abonat)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  5. Destinatari
                </h2>
                <p>
                  Putem partaja date cu furnizori de servicii (hosting,
                  analytics) în baza unor acorduri care asigură
                  confidențialitatea.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  6. Transferuri în afara UE
                </h2>
                <p>
                  În cazul transferurilor, folosim garanții adecvate (ex. Clauze
                  Contractuale Standard) conform GDPR.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  7. Perioada de stocare
                </h2>
                <p>
                  Stocăm datele strict pe perioada necesară scopurilor declarate
                  sau conform obligațiilor legale.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  8. Drepturile dvs.
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Acces, rectificare, ștergere</li>
                  <li>Restricționare, opoziție, portabilitate</li>
                  <li>Retragerea consimțământului</li>
                  <li>Dreptul de a depune plângere la ANSPDCP</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  9. Securitate
                </h2>
                <p>
                  Aplicăm măsuri tehnice și organizatorice adecvate pentru
                  protecția datelor.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  10. Contact
                </h2>
                <p>
                  Ne puteți contacta la{" "}
                  <a
                    className="text-primary"
                    href="mailto:codebloom02@gmail.com"
                  >
                    codebloom02@gmail.com
                  </a>{" "}
                  pentru orice solicitări privind datele personale.
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

export default Privacy;
