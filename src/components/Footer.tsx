import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Servicii",
      links: [
        { name: "Website Custom", href: "#" },
        { name: "E-commerce", href: "#" },
        { name: "Landing Pages", href: "#" },
        { name: "Aplicații Web", href: "#" },
        { name: "Consultanță", href: "#" }
      ]
    },
    {
      title: "Companie",
      links: [
        { name: "Despre Noi", href: "/about" },
        { name: "Portofoliu", href: "#" },
        { name: "Proces", href: "#" },
        { name: "Cariere", href: "#" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Suport",
      links: [
        { name: "Contact", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Documentație", href: "#" },
        { name: "Status", href: "#" },
        { name: "Politica de confidențialitate", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-background-secondary border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-display font-bold text-gradient mb-4">
              Code Bloom
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Transformăm idei în experiențe digitale premium care aduc rezultate măsurabile pentru afacerea ta.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@codebloom.ro</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+40 723 456 789</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>București, România</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-card border border-card-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:shadow-glow-primary"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm link-underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-border pt-12 mt-12">
          <div className="max-w-md">
            <h4 className="font-semibold text-foreground mb-2">
              Rămâi la curent
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              Primește cele mai noi tendințe în web development și oferte exclusive.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email-ul tău"
                className="flex-1 px-4 py-2 bg-card border border-card-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button variant="default" size="sm">
                Abonează-te
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Code Bloom. Toate drepturile rezervate.
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Termeni și Condiții
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Politica de Confidențialitate
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie-uri
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;