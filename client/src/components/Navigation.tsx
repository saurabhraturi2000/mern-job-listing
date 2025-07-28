import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, Plus, Home } from "lucide-react";

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <Briefcase className="h-6 w-6 text-primary" />
          <span>JobSpotter</span>
        </Link>

        <div className="flex items-center space-x-4">
          <Button
            variant={location.pathname === "/" ? "default" : "ghost"}
            asChild
          >
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-4 w-4" />
              <span>Jobs</span>
            </Link>
          </Button>

          <Button
            variant={location.pathname === "/add-job" ? "default" : "outline"}
            asChild
          >
            <Link to="/add-job" className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Post Job</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
