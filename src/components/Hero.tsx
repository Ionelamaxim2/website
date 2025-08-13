import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse delay-1000" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
          <Sparkles className="w-6 h-6 text-accent" />
          <span className="text-accent font-medium tracking-wide">Premium Web Development</span>
          <Sparkles className="w-6 h-6 text-accent" />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 animate-fade-in delay-200">
          <span className="text-gradient">Code Bloom</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
          Creăm website-uri premium, optimizate pentru performanță și conversii. 
          Fiecare linie de cod este scrisă pentru a aduce rezultate remarcabile afacerii tale.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-700">
          <Button variant="hero" size="xl" className="group">
            Începe Proiectul
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="outline" size="xl" className="group">
            <Code className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Vezi Portofoliul
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto animate-fade-in delay-1000">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Proiecte Livrate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">99%</div>
            <div className="text-muted-foreground">Satisfacție Clienți</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground">Support Premium</div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-4 w-16 h-16 bg-primary/20 rounded-lg animate-float delay-500" />
      <div className="absolute top-1/3 right-8 w-12 h-12 bg-accent/20 rounded-full animate-float delay-1000" />
      <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-secondary/30 rounded-full animate-float delay-700" />
    </section>
  );
};

export default Hero;