
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    
    // If on about page, navigate to home page first
    if (location.pathname !== "/") {
      window.location.href = "/";
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-3">
      <div className="inline-flex gap-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full shadow-sm">
        <Link 
          to="/about" 
          className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
        >
          אודות
        </Link>
        <button 
          onClick={scrollToTop}
          className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
        >
          בית
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
