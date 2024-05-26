import { Trash2 } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function ProductWidget({ product }) {
  return (
    <div className="w-full">
      <Card className="w-[80%] ">
          <CardContent className="p-2 flex flex gap-x-3 items-center justify-around" >
        <Image
          alt=""
          className="rounded-xl"
          width={160}
          height={100}
          src={product.imagesUrl[0]}
        />
        <div>{product.name}</div>
        <div>Quantity</div>
        <div>{product.price}€</div>
        <div
          className="text-sm text-destructive"
          onClick={() => {
            console.log("yesy", product);
            removeItem(product.id);
          }}
        >
          <Trash2 />
        </div>
        </CardContent>
      </Card>
    </div>
  );
}
