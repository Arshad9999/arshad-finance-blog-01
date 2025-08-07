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

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">WealthWise India</div>
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant={location.pathname === "/" ? "default" : "ghost"}>
                Home
              </Button>
            </Link>
            <Link to="/blogs">
              <Button variant={location.pathname === "/blogs" ? "default" : "ghost"}>
                Blogs
              </Button>
            </Link>
            {location.pathname === "/" ? (
              <Button variant="outline" onClick={scrollToContact}>
                Contact
              </Button>
            ) : (
              <Link to="/#contact">
                <Button variant="outline">
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