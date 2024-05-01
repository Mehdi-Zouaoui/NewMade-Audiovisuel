import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export default function Supplier() {
  return (
    <div className="flex flex-col gap-5 p-8">
      <h1 className="text-2xl font-bold dark:text-white">Fournisseur </h1>
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Marque 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-one">Marque 2</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-three" id="option-three" />
          <Label htmlFor="option-one">Marque 3</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-four" id="option-four" />
          <Label htmlFor="option-one">Marque 4</Label>
        </div>

        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-five" id="option-five" />
          <Label htmlFor="option-two">Marque 5</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
