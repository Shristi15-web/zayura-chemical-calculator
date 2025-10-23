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
      defaultWater: 24,
      color: "hsl(var(--primary))",
      dilutionSteps: [
        "Add 1 L of FCC (25*)",
        "Add 6.25 L of water with Conc.",
        "Mix it well for about 5-8 mins.",
        "Add remaining 17.75 L of water to the solution.",
        "Mix it well for 10-15 mins.",
        "Floor Cleaner is ready."
      ],
    },
    {
      id: "toilet",
      label: "Toilet Cleaner",
      icon: Droplet,
      defaultConcentrate: 1,
      defaultWater: 5,
      color: "hsl(var(--info))",
      dilutionSteps: [
        "Add appropriate amount of TCC",
        "Add initial water and mix for 5-8 mins.",
        "Add remaining water to the solution.",
        "Mix well for 10-15 mins.",
        "Toilet Cleaner is ready."
      ],
    },
    {
      id: "glass",
      label: "Glass Cleaner",
      icon: Sparkle,
      defaultConcentrate: 1,
      defaultWater: 29,
      color: "hsl(var(--secondary))",
      dilutionSteps: [
        "Add 1 L of GCC (30*)",
        "Add 15 L of water in the Conc.",
        "Stir it for about 5-8 mins.",
        "Add remaining 14 L of water in the solution.",
        "Mix it for about 10-15 mins.",
        "Glass Cleaner is ready."
      ],
    },
    {
      id: "bathroom",
      label: "Bathroom Cleaner",
      icon: Bath,
      defaultConcentrate: 1,
      defaultWater: 4,
      color: "hsl(var(--accent))",
      dilutionSteps: [
        "Add 1 L of BCC (5*)",
        "Add 1 L of water in the Conc.",
        "Mix it well for 5-8 mins.",
        "Add the remaining 3 L of water with the solution.",
        "Mix it well for 10-15 mins.",
        "Bathroom Cleaner is ready."
      ],
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
            dilutionSteps={calc.dilutionSteps}
          />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CalculatorTabs;
