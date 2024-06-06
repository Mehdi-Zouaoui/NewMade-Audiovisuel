"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { useCategory } from "../../store";
import Country from "../products/Country";
import PriceRange from "../products/PriceRange";
import ProductRange from "../products/ProductRange";
import Supplier from "../products/Supplier";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export default function SideBar() {
  const { category } = useCategory();
  const setCurrentCategory = useCategory((state) => state.setCurrentCategory);
  return (
    <div className="flex flex-col w-full ">
      <div className="px-8 py-3">
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h1 className="text-2xl font-bold dark:text-white">Produits </h1>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col ">
                <RadioGroup
                  defaultValue="speakers"
                  onValueChange={(value) => {
                    setCurrentCategory(value);
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="speakers" id="option-one" />
                    <Label htmlFor="speakers">Enceintes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mix" id="option-two" />
                    <Label htmlFor="mix">Table de Mixage</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="micros" id="option-three" />
                    <Label htmlFor="micros">Micro</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="screens" id="option-four" />
                    <Label htmlFor="screens">Ecrans</Label>
                  </div>
                </RadioGroup>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="px-8 py-3">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h1 className="text-2xl font-bold dark:text-white">Pays </h1>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col ">
                <RadioGroup defaultValue="">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">France</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-one">Algérie</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-three" id="option-three" />
                    <Label htmlFor="option-one">Maroc</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-four" id="option-four" />
                    <Label htmlFor="option-one">Tunisie</Label>
                  </div>
                </RadioGroup>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="px-8 py-3">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h1 className="text-2xl font-bold dark:text-white">
                Fournisseurs
              </h1>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col ">
                <RadioGroup>
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <PriceRange />
      </div>
    </div>
  );
}
