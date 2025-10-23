import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Beaker, FlaskConical } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CalculatorCardProps {
  title: string;
  icon: LucideIcon;
  defaultConcentrate: number;
  defaultWater: number;
  color: string;
}

type CalculationMode = "product" | "ingredients";

const CalculatorCard = ({
  title,
  icon: Icon,
  defaultConcentrate,
  defaultWater,
}: CalculatorCardProps) => {
  const [mode, setMode] = useState<CalculationMode>("product");
  const [concentrateRatio, setConcentrateRatio] = useState(defaultConcentrate);
  const [waterRatio, setWaterRatio] = useState(defaultWater);
  const [productQuantity, setProductQuantity] = useState("");
  const [concentrateAmount, setConcentrateAmount] = useState("");
  const [waterAmount, setWaterAmount] = useState("");
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    setResults(null);
  }, [mode, concentrateRatio, waterRatio]);

  const calculateFromProduct = () => {
    if (!productQuantity || parseFloat(productQuantity) <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid product quantity",
        variant: "destructive",
      });
      return;
    }

    const total = concentrateRatio + waterRatio;
    const concentrate = (concentrateRatio / total) * parseFloat(productQuantity);
    const water = (waterRatio / total) * parseFloat(productQuantity);

    setResults({
      concentrate: concentrate.toFixed(2),
      water: water.toFixed(2),
      total: parseFloat(productQuantity).toFixed(2),
      ratio: `${concentrateRatio}:${waterRatio}`,
    });
  };

  const calculateFromIngredients = () => {
    if (
      !concentrateAmount ||
      !waterAmount ||
      parseFloat(concentrateAmount) <= 0 ||
      parseFloat(waterAmount) <= 0
    ) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid concentrate and water amounts",
        variant: "destructive",
      });
      return;
    }

    const concentrate = parseFloat(concentrateAmount);
    const water = parseFloat(waterAmount);
    const total = concentrate + water;
    const ratio = `1:${(water / concentrate).toFixed(1)}`;

    setResults({
      concentrate: concentrate.toFixed(2),
      water: water.toFixed(2),
      total: total.toFixed(2),
      ratio: ratio,
    });
  };

  const handleCalculate = () => {
    if (mode === "product") {
      calculateFromProduct();
    } else {
      calculateFromIngredients();
    }
  };

  return (
    <Card className="p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-border/50 bg-card">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/10 rounded-xl">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-3xl font-bold text-foreground">{title}</h3>
      </div>

      {/* Mode Selection */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        <Button
          variant={mode === "product" ? "default" : "outline"}
          className="h-auto py-4 flex flex-col gap-2"
          onClick={() => setMode("product")}
        >
          <FlaskConical className="w-5 h-5" />
          <span className="text-sm font-semibold">From Product</span>
        </Button>
        <Button
          variant={mode === "ingredients" ? "default" : "outline"}
          className="h-auto py-4 flex flex-col gap-2"
          onClick={() => setMode("ingredients")}
        >
          <Beaker className="w-5 h-5" />
          <span className="text-sm font-semibold">From Ingredients</span>
        </Button>
      </div>

      {mode === "product" ? (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="concentrate-ratio">Concentrate Ratio</Label>
              <Input
                id="concentrate-ratio"
                type="number"
                min="1"
                value={concentrateRatio}
                onChange={(e) => setConcentrateRatio(parseInt(e.target.value) || 1)}
                className="text-lg"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="water-ratio">Water Ratio</Label>
              <Input
                id="water-ratio"
                type="number"
                min="1"
                value={waterRatio}
                onChange={(e) => setWaterRatio(parseInt(e.target.value) || 1)}
                className="text-lg"
              />
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg text-center">
            <span className="text-sm text-muted-foreground">Current Dilution Ratio</span>
            <p className="text-2xl font-bold text-primary mt-1">
              {concentrateRatio}:{waterRatio}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="product-quantity">Desired Product Quantity (kg)</Label>
            <Input
              id="product-quantity"
              type="number"
              min="1"
              step="0.1"
              placeholder="Enter quantity in kg"
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
              className="text-lg"
            />
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="concentrate-amount">Concentrate Amount (kg)</Label>
            <Input
              id="concentrate-amount"
              type="number"
              min="0.1"
              step="0.1"
              placeholder="Enter concentrate amount"
              value={concentrateAmount}
              onChange={(e) => setConcentrateAmount(e.target.value)}
              className="text-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="water-amount">Water Amount (kg)</Label>
            <Input
              id="water-amount"
              type="number"
              min="0.1"
              step="0.1"
              placeholder="Enter water amount"
              value={waterAmount}
              onChange={(e) => setWaterAmount(e.target.value)}
              className="text-lg"
            />
          </div>
        </div>
      )}

      <Button
        onClick={handleCalculate}
        className="w-full mt-8 h-14 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-all shadow-md hover:shadow-lg"
      >
        <Calculator className="w-5 h-5 mr-2" />
        Calculate
      </Button>

      {results && (
        <div className="mt-8 bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border border-primary/20 animate-scale-in">
          <div className="flex items-center gap-2 mb-4">
            <Calculator className="w-5 h-5 text-primary" />
            <h4 className="text-xl font-bold text-foreground">Calculation Results</h4>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center py-3 border-b border-border/50">
              <span className="font-semibold text-foreground">Concentrate Needed:</span>
              <span className="text-xl font-bold text-primary">{results.concentrate} kg</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border/50">
              <span className="font-semibold text-foreground">Water Needed:</span>
              <span className="text-xl font-bold text-secondary">{results.water} kg</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border/50">
              <span className="font-semibold text-foreground">Total Product:</span>
              <span className="text-xl font-bold text-accent">{results.total} kg</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="font-semibold text-foreground">Actual Ratio:</span>
              <span className="text-xl font-bold text-info">{results.ratio}</span>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default CalculatorCard;
