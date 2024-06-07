import {
  ArrowRight,
  ShoppingCart,
  CircleUserRound,
  LogOut,
  User,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import { useCart } from "../../store";
import CartItem from "../cart/cartItem";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export default function UserBar({ numberOfProducts }) {
  const { products, removeItem, clearCart } = useCart();

  return (
    <div className="flex items-center gap-7">
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <CircleUserRound strokeWidth={1.5} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                onSelect={() => {
                  console.log("sign in");
                }}
              >
                <Link
                  href={{
                    pathname: "/register/",
                    query: { register: "signin" },
                  }}
                >
                  <div className="flex items-center gap-2">
                    <User className="mr-2 h-4 w-4" />
                    <span>Se connecter</span>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={{
                    pathname: "/register/",
                    query: { register: "signup" },
                  }}
                >
                  <div className="flex items-center gap-2">
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>S'inscrire</span>
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              alias suscipit accusantium cupiditate eligendi, labore nesciunt
              facilis nihil quis quidem ratione nostrum, vel nulla nemo at
              doloremque quo a veritatis.
            </SheetDescription>
            <div className="h-[80vh] overflow-y-auto flex flex-col gap-y-6 pt-6">
              {products.map((item, index) => (
                <div key={index}>
                  <div>
                    <CartItem product={item} />
                  </div>
                </div>
              ))}
            </div>
          </SheetHeader>
          <SheetFooter>
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
