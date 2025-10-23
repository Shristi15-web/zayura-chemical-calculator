import { Calculator } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-glow rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <Calculator className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold">Professional Calculator Tool</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Precision Chemical <br />
            <span className="text-accent">Dilution Calculator</span>
          </h2>
          
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Calculate exact measurements for your industrial cleaning solutions with our specialized calculator. 
            Ensure optimal performance and cost efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
