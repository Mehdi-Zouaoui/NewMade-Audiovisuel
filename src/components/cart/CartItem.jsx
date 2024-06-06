import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useCart } from "../../store";
export default function CartItem({ product }) {
  const { removeItem } = useCart();

  return (
    <div className="w-full">
      <div className="flex gap-x-3 items-center">
        <Image
          alt="product image"
          width={120}
          height={150}
          src={product.imagesUrl[0]}
        />
        <div>{product.name}</div>
        <div>{product.quantity}</div>
        <div>{product.price * product.quantity}€</div>
        <div
          className="text-sm text-destructive"
          onClick={() => {
            removeItem(product.id);
          }}
        >
          <Trash2 />
        </div>
      </div>
    </div>
  );
}
