import { FlaskConical } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-primary shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-accent/10 p-3 rounded-xl backdrop-blur-sm">
              <FlaskConical className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary-foreground">Zayura</h1>
              <p className="text-sm text-primary-foreground/80">Industrial Chemical Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
