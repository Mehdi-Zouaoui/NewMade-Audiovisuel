import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
export default function ProductRange() {
  return (
    <div className="flex flex-col gap-5 p-8">
      <h1 className="text-2xl font-bold dark:text-white">Produits </h1>
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Enceintes</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-one">Table de Mixage</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-three" id="option-three" />
          <Label htmlFor="option-one">Micro</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-four" id="option-four" />
          <Label htmlFor="option-one">Ecrans</Label>
        </div>

        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-five" id="option-five" />
          <Label htmlFor="option-two">Système audio</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
