import { ShoppingCart } from "lucide-react";
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
export default function UserBar({ numberOfProducts }) {
  const { products, removeItem, clearCart } = useCart();

  return (
    <div className="flex">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className=" relative">
            <ShoppingCart />
            <Badge
              className="absolute top-[-16px] right-[-16px]"
              variant="destructive"
            >
              {products.length > 0 ? products.length : 0}
            </Badge>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Votre Panier</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {products.map((item, index) => (
            <div key={index}>
              <div>
                <CartItem product={item} />
              </div>
              <DropdownMenuSeparator />
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
