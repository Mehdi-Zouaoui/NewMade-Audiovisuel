import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
export default function SimilaritiesCard() {
  return (
    <div className="w-full h-full">
      <Card className="h-5/6">
        <div className="flex justify-around py-10">
          <Image alt="" width={100} height={150} src={`/default.png`} />
          <div>
            <h2 className="text-lg">Produit</h2>
            <p>100€</p>
            <Button variant="secondary">Aperçu</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
