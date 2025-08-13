const TechCarousel = () => {
  const technologies = [
    "REACT", "TYPESCRIPT", "NEXT.JS", "NODE.JS", "MONGODB", "POSTGRESQL", 
    "TAILWIND", "SASS", "JAVASCRIPT", "HTML5", "CSS3", "PYTHON",
    "EXPRESS", "FASTIFY", "REDIS", "DOCKER", "AWS", "VERCEL",
    "FIGMA", "PHOTOSHOP", "ILLUSTRATOR", "FRAMER", "PRISMA", "SUPABASE"
  ];

  return (
    <section className="py-12 overflow-hidden bg-gradient-primary">
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-10" />
        
        {/* Scrolling content */}
        <div className="flex animate-slide-infinite">
          {/* First set */}
          <div className="flex whitespace-nowrap animate-slide-in">
            {technologies.map((tech, index) => (
              <div
                key={`first-${index}`}
                className="inline-flex items-center px-8 py-4 text-white font-semibold text-lg tracking-wider"
              >
                {tech}
                <span className="mx-8 text-white/50">•</span>
              </div>
            ))}
          </div>
          
          {/* Second set for seamless loop */}
          <div className="flex whitespace-nowrap animate-slide-in">
            {technologies.map((tech, index) => (
              <div
                key={`second-${index}`}
                className="inline-flex items-center px-8 py-4 text-white font-semibold text-lg tracking-wider"
              >
                {tech}
                <span className="mx-8 text-white/50">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechCarousel;