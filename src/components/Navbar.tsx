
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

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
  };

  // Check if we're on the about page
  const isAboutPage = location.pathname === "/about";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center items-center py-3 animate-fadeIn">
      <div className="inline-flex items-center justify-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full shadow-md text-lg max-w-[90%] mx-auto">
        <button 
          onClick={scrollToTop}
          className={`px-4 py-2 transition-all duration-300 text-white 
            rounded-full hover:bg-white/30
            ${isAboutPage 
              ? "" 
              : "font-medium"}`}
        >
          בית
        </button>
        
        <span className="mx-2 text-white/70">|</span>
        
        <Link 
          to="/about" 
          className={`px-4 py-2 transition-all duration-300 text-white 
            rounded-full hover:bg-white/30
            ${isAboutPage 
              ? "font-medium" 
              : ""}`}
        >
          אודות
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
