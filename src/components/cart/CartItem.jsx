import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useCart } from "../../store";
export default function CartItem({ product }) {
  const { removeItem } = useCart();

  return (
    <div className="w-full">
      <div className="flex gap-x-3 items-center">
        <Image alt="" width={120} height={150} src={`/default.png`} />
        <div>{product.name}</div>
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
      </div>
    </div>
  );
}
