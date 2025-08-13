import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Termeni și Condiții — Code Bloom</title>
      </Helmet>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-display font-bold mb-6">
              Termeni și Condiții
            </h1>
            <p className="text-muted-foreground mb-6">
              Ultima actualizare: {new Date().toLocaleDateString("ro-RO")}
            </p>

            <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  1. Informații generale
                </h2>
                <p>
                  Acest website este operat de Code Bloom ("Noi"). Accesarea și
                  utilizarea site-ului implică acceptarea prezentelor Termeni și
                  Condiții. Dacă nu sunteți de acord, vă rugăm să nu utilizați
                  website-ul.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  2. Servicii
                </h2>
                <p>
                  Oferim servicii de dezvoltare web personalizate. Informațiile
                  de pe site au caracter informativ și nu constituie o ofertă
                  fermă. Pentru o ofertă personalizată, vă rugăm să ne
                  contactați.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  3. Drepturi de proprietate intelectuală
                </h2>
                <p>
                  Conținutul site-ului (texte, grafică, elemente vizuale) este
                  protejat de legislația privind drepturile de autor. Utilizarea
                  neautorizată este interzisă.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  4. Limitarea răspunderii
                </h2>
                <p>
                  Nu garantăm că website-ul va funcționa fără întreruperi sau
                  erori. Nu suntem răspunzători pentru pierderi rezultate din
                  utilizarea site-ului, în măsura permisă de lege.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  5. Link-uri către terți
                </h2>
                <p>
                  Site-ul poate conține link-uri către website-uri terțe. Nu
                  avem control asupra acestora și nu ne asumăm responsabilitatea
                  pentru conținutul sau politicile lor.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  6. Confidențialitate și date personale
                </h2>
                <p>
                  Prelucrarea datelor personale se realizează conform Politicii
                  de Confidențialitate și Regulamentului (UE) 2016/679 (GDPR).
                  Drepturile dvs. includ accesul, rectificarea, ștergerea,
                  restricționarea prelucrării, portabilitatea și opoziția. Ne
                  puteți contacta la adresa{" "}
                  <a
                    className="text-primary"
                    href="mailto:codebloom02@gmail.com"
                  >
                    codebloom02@gmail.com
                  </a>{" "}
                  pentru exercitarea drepturilor.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  7. Comenzi și plăți
                </h2>
                <p>
                  Condițiile comerciale (prețuri, termene, plăți) sunt stabilite
                  în contractele individuale. Facturarea se face conform
                  legislației în vigoare.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  8. Garanții și suport
                </h2>
                <p>
                  Garanțiile și perioadele de suport sunt specificate în
                  ofertele/contractele proiectelor.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  9. Legea aplicabilă
                </h2>
                <p>
                  Prezenții termeni sunt guvernați de legea română. Litigiile
                  vor fi soluționate pe cale amiabilă sau, în lipsa unui acord,
                  de instanțele competente din România.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  10. Modificări
                </h2>
                <p>
                  Ne rezervăm dreptul de a actualiza Termenii și Condițiile.
                  Versiunea curentă va fi publicată pe această pagină, cu data
                  ultimei actualizări.
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

export default Terms;
