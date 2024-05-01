import { Trash2 } from "lucide-react";
import Image from "next/image";

export default function CartItem() {
  return (
    <div className="w-full">
      <div className="flex gap-x-3 items-center">
        <Image alt="" width={120} height={150} src={`/default.png`} />
        <div>Produit 1</div>
        <div>150€ </div>
        <div className="text-sm text-destructive">
          <Trash2 />
        </div>
      </div>
    </div>
  );
}
