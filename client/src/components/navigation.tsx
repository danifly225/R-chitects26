import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.querySelector('nav');
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 100) {
        setIsScrolled(true);
        if (scrollTop > lastScrollTop) {
          // Scrolling down
          if (navbar) navbar.style.transform = 'translateY(-100%)';
        } else {
          // Scrolling up
          if (navbar) navbar.style.transform = 'translateY(0)';
        }
      } else {
        setIsScrolled(false);
        if (navbar) navbar.style.transform = 'translateY(0)';
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#excellence", label: "Notre Excellence" },
    { href: "#projets", label: "Projets Signature" },
    { href: "#equipe", label: "Équipe" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 smooth-transition ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-sm'
    } border-b border-light-gray`}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-semibold tracking-tight text-deep-black">
              R-chitects 26
            </h1>
          </div>
          
          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="nav-link text-sm font-medium smooth-transition hover:text-premium-orange text-deep-black"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-light-gray">
          <div className="px-8 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block text-sm font-medium hover:text-premium-orange smooth-transition text-deep-black w-full text-left"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
