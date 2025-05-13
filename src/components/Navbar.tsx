
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

// Add this CSS to your global stylesheet or include it here
const navbarStyles = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
}
/* Mobile optimizations */
@media (max-width: 640px) {
  .mobile-nav-container {
    font-size: 1.1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .mobile-nav-buttons {
    padding: 0.5rem 0.75rem;
  }
}
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Add the styles to the document head
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = navbarStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const location = useLocation();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    
    // If we're not on the home page, navigate there
    if (location.pathname !== "/") {
      window.location.href = "/";
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  // Check which page we're on
  const isAboutPage = location.pathname === "/about";
  const isPortfolioPage = location.pathname === "/portfolio";

  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex justify-center items-center py-5 animate-fadeIn">
      {/* Desktop Menu */}
      <div className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-white/50 rounded-full text-lg max-w-[90%] mx-auto">
        <button 
          onClick={scrollToTop}
          className={`px-4 py-2 transition-all duration-300 text-gray-800 
            rounded-full hover:bg-white/70
            ${!isAboutPage && !isPortfolioPage 
              ? "font-medium" 
              : ""}`}
        >
          בית
        </button>
        
        <span className="mx-2 text-gray-500">|</span>
        
        <Link 
          to="/about" 
          className={`px-4 py-2 transition-all duration-300 text-gray-800 
            rounded-full hover:bg-white/70
            ${isAboutPage 
              ? "font-medium" 
              : ""}`}
        >
          אודות
        </Link>

        <span className="mx-2 text-gray-500">|</span>
        
        <Link 
          to="/portfolio" 
          className={`px-4 py-2 transition-all duration-300 text-gray-800 
            rounded-full hover:bg-white/70
            ${isPortfolioPage 
              ? "font-medium" 
              : ""}`}
        >
          פורטפוליו
        </Link>
      </div>
      
      {/* Mobile Menu Button - Changed to align right */}
      <div className="sm:hidden flex justify-end px-4 w-full">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 bg-white/50 rounded-full"
          aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-16 right-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 w-48 z-50">
          <div className="flex flex-col space-y-3">
            <button 
              onClick={scrollToTop}
              className={`px-4 py-2 text-right transition-all duration-300 text-gray-800 
                rounded-lg hover:bg-white/70
                ${!isAboutPage && !isPortfolioPage 
                  ? "font-medium" 
                  : ""}`}
            >
              בית
            </button>
            
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-2 text-right transition-all duration-300 text-gray-800 
                rounded-lg hover:bg-white/70
                ${isAboutPage 
                  ? "font-medium" 
                  : ""}`}
            >
              אודות
            </Link>
            
            <Link 
              to="/portfolio" 
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-2 text-right transition-all duration-300 text-gray-800 
                rounded-lg hover:bg-white/70
                ${isPortfolioPage 
                  ? "font-medium" 
                  : ""}`}
            >
              פורטפוליו
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
