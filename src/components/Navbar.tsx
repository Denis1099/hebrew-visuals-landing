import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <img src="/lovable-uploads/logo.webp" alt="Creatives Logo" className="h-12" />
          
          {/* Desktop menu - Centered */}
          <div className="hidden md:flex flex-1 justify-center space-x-8 space-x-reverse">
            <NavLink href="#home">בית</NavLink>
            <NavLink href="#portfolio">תיק עבודות</NavLink>
            <NavLink href="#services">שירותים</NavLink>
            <NavLink href="#contact">צור קשר</NavLink>
          </div>

          {/* Empty div to maintain spacing */}
          <div className="w-12 hidden md:block"></div>
          
          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-16 right-0 left-0 p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>בית</NavLink>
              <NavLink href="#portfolio" onClick={() => setIsMenuOpen(false)}>תיק עבודות</NavLink>
              <NavLink href="#services" onClick={() => setIsMenuOpen(false)}>שירותים</NavLink>
              <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>צור קשר</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-800 hover:text-primary-pink transition-colors duration-300"
  >
    {children}
  </a>
);

export default Navbar;