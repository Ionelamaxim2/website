import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/#home" },
    {
      name: "Prices",
      href:
        (import.meta as any).env.VITE_ROUTER_MODE === "hash"
          ? "/#/prices"
          : "/prices",
    },
    {
      name: "About Us",
      href:
        (import.meta as any).env.VITE_ROUTER_MODE === "hash"
          ? "/#/about"
          : "/about",
    },
    {
      name: "Contact",
      href:
        (import.meta as any).env.VITE_ROUTER_MODE === "hash"
          ? "/#/contact"
          : "/contact",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="hidden">
        <div className="h-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-display font-bold text-gradient">
              Code Bloom
            </h1>
          </div>

          {/* Desktop Navigation removed — links shown in secondary pill bar */}
          <div className="hidden md:block" />

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background-secondary border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) =>
              item.name === "Home" ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="px-3 pt-2">
              <Button variant="hero" size="sm" className="w-full">
                Contact
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* Secondary pill navbar (desktop), stacked under main bar */}
      <div className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-[60]">
        <div className="flex items-center gap-3 bg-background/60 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
          {navItems.map((item) =>
            item.name === "Home" ? (
              <a
                key={item.name}
                href={item.href}
                className="relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors hover:text-primary text-foreground/90 hover:bg-primary/10"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors hover:text-primary text-foreground/90 hover:bg-primary/10"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </div>
      {/* Third and fourth bars (thin progress-style) to emulate the multi-steps feel */}
    </nav>
  );
};

export default Navbar;
