import { ShoppingCart, ShoppingBasket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCart } from "../../store";
import CartItem from "../cart/cartItem";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export default function UserBar({ numberOfProducts }) {
  const { products, removeItem, clearCart } = useCart();

  return (
    <div className="flex">
      <Sheet>
        <SheetTrigger>
          <div className=" relative">
            <ShoppingCart />
            <Badge
              className="absolute top-[-16px] right-[-16px]"
              variant="destructive"
            >
              {products.length > 0 ? products.length : 0}
            </Badge>
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Votre Panier</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
            <div className="min-h-[80vh] flex flex-col gap-y-6 pt-6">
              {products.map((item, index) => (
                <div key={index}>
                  <div>
                    <CartItem product={item} />
                  </div>
                </div>
              ))}
            </div>
          </SheetHeader>
          <SheetFooter >
            <Link
              href={`/checkout/`}
              className="flex gap-3 bg-gray-600 text-white p-3 rounded-lg"
            >
              <div className="flex items-center gap-3 text-sm">
                <p>Checkout</p> <ArrowRight size={20} strokeWidth={1.5} />
              </div>
            </Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
