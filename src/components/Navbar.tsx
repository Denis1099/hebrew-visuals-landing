
import { Home, Info } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md py-3 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex-1">
          <img 
            src="/lovable-uploads/gg-logo.webp" 
            alt="Logo" 
            className="h-8 w-auto"
            width="64"
            height="32"
            loading="eager"
          />
        </div>
        <div className="flex gap-4">
          <Link 
            to="/about" 
            className="flex items-center gap-1 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
          >
            <Info className="w-4 h-4 animate-icon-pulse" />
            <span>אודות</span>
          </Link>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
          >
            <Home className="w-4 h-4 animate-icon-pulse" />
            <span>בית</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
