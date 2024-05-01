import { ShoppingCart } from "lucide-react";
import { useCartProduct } from "../../store";
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
  const cartQuantity = useCartProduct((state) => state.cartQuantity);
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
              {cartQuantity}
            </Badge>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Votre Panier</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <CartItem />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <CartItem />
          </DropdownMenuItem>{" "}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
