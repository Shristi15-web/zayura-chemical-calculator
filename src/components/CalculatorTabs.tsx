import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Droplet, Sparkle, Bath } from "lucide-react";
import CalculatorCard from "./CalculatorCard";

const CalculatorTabs = () => {
  const calculators = [
    {
      id: "floor",
      label: "Floor Cleaner",
      icon: Sparkles,
      defaultConcentrate: 1,
      defaultWater: 9,
      color: "hsl(var(--primary))",
    },
    {
      id: "toilet",
      label: "Toilet Cleaner",
      icon: Droplet,
      defaultConcentrate: 1,
      defaultWater: 5,
      color: "hsl(var(--info))",
    },
    {
      id: "glass",
      label: "Glass Cleaner",
      icon: Sparkle,
      defaultConcentrate: 1,
      defaultWater: 10,
      color: "hsl(var(--secondary))",
    },
    {
      id: "bathroom",
      label: "Bathroom Cleaner",
      icon: Bath,
      defaultConcentrate: 1,
      defaultWater: 4,
      color: "hsl(var(--accent))",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Chemical Dilution Calculator
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <Tabs defaultValue="floor" className="w-full animate-fade-in-up">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 bg-muted/50 p-2 rounded-xl mb-8 h-auto">
            {calculators.map((calc) => {
              const Icon = calc.icon;
              return (
                <TabsTrigger
                  key={calc.id}
                  value={calc.id}
                  className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 rounded-lg transition-all hover:scale-105"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{calc.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {calculators.map((calc) => (
            <TabsContent
              key={calc.id}
              value={calc.id}
              className="animate-fade-in"
            >
              <CalculatorCard
                title={calc.label}
                icon={calc.icon}
                defaultConcentrate={calc.defaultConcentrate}
                defaultWater={calc.defaultWater}
                color={calc.color}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CalculatorTabs;
