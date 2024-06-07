import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { Slider } from "../ui/range-slider";
export default function PriceRange() {
  const [range, setRange] = useState([0, 2999]);

  const handleRangeChange = (value) => {
    setRange(value);
  };

  return (
    <div className="w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>
            <p className="text-xl">Prix</p>
          </CardTitle>
          <CardDescription>
            Plage de prix pour la recherche du produit.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6 items-start mb-6">
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="Trier par : " />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="croissant">
                  <div className="flex gap-3 w-full items-center">
                    Prix croissant <ArrowUp strokeWidth={1} size={16} />
                  </div>
                </SelectItem>
                <SelectItem value="decroissant">
                  <div className="flex gap-3 w-full items-center">
                    Prix décroissant <ArrowDown strokeWidth={1} size={16} />
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            <div className="w-[87%] flex flex-col items-start  gap-3 ">
              <p className="text-xs"> Echelle des prix</p>
              <Slider
                defaultValue={[0, 2999]}
                max={2999}
                min={0}
                step={1}
                value={range}
                onValueChange={handleRangeChange}
                formatLabel={(value) => `${value} €`}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Rechercher</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
