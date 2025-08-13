import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WebsiteTypes from "@/components/WebsiteTypes";
import WhyCustom from "@/components/WhyCustom";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import TechCarousel from "@/components/TechCarousel";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WebsiteTypes />
        <WhyCustom />
        <WhyChooseUs />
        <Testimonials />
        <TechCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
