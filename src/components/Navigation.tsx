import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const scrollToContact = () => {
    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact");
      contactSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDarkPage = location.pathname === "/blogs";
  
  return (
    <nav className={`${isDarkPage ? 'bg-gray-900/95 border-gray-700/50' : 'bg-card/80 border-border/50'} backdrop-blur-md border-b sticky top-0 z-50`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-xl font-bold ${isDarkPage ? 'text-blue-400' : 'text-primary'}`}>
            {isDarkPage ? 'TechWise Consulting' : 'WealthWise India'}
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button 
                variant={location.pathname === "/" ? "default" : "ghost"}
                className={isDarkPage && location.pathname !== "/" ? "text-gray-300 hover:text-white hover:bg-gray-800" : ""}
              >
                Home
              </Button>
            </Link>
            <Link to="/blogs">
              <Button 
                variant={location.pathname === "/blogs" ? "default" : "ghost"}
                className={isDarkPage && location.pathname === "/blogs" ? "bg-blue-600 hover:bg-blue-700" : isDarkPage ? "text-gray-300 hover:text-white hover:bg-gray-800" : ""}
              >
                Blogs
              </Button>
            </Link>
            {location.pathname === "/" ? (
              <Button variant="outline" onClick={scrollToContact}>
                Contact
              </Button>
            ) : (
              <Link to="/#contact">
                <Button 
                  variant="outline"
                  className={isDarkPage ? "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white" : ""}
                >
                  Contact
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;