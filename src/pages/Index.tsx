import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WebsiteTypes from "@/components/WebsiteTypes";
import WhyCustom from "@/components/WhyCustom";
import WhyChooseUs from "@/components/WhyChooseUs";
import TechCarousel from "@/components/TechCarousel";
import Footer from "@/components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Code Bloom — Dezvoltare Website Premium</title>
        <meta
          name="description"
          content="Website-uri premium, optimizate pentru performanță și conversii. Code Bloom construiește experiențe digitale la standarde înalte."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Code Bloom — Dezvoltare Website Premium"
        />
        <meta
          property="og:description"
          content="Website-uri premium, optimizate pentru performanță și conversii. Code Bloom construiește experiențe digitale la standarde înalte."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <WebsiteTypes />
          <WhyCustom />
          <WhyChooseUs />
          <TechCarousel />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Index;
