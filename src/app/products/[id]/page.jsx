"use client";
import { BadgeCheck, ShoppingCart, Undo2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import * as React from "react";
import Similarities from "../../../components/products/Similarities";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { ToastAction } from "../../../components/ui/toast";
import { Toaster } from "../../../components/ui/toaster";
import { useToast } from "../../../hooks/use-toast";
import { useCartProduct } from "../../../store";

export default function ProductPage({}) {
  const incrementCartQuantity = useCartProduct(
    (state) => state.incrementCartQuantity
  );
  const decrementCartQuantity = useCartProduct(
    (state) => state.decrementCartQuantity
  );
  const searchParams = useSearchParams();
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);
  const [stock, setStock] = React.useState(true);
  const { toast } = useToast();

  const addToCart = () => {
    console.log("added to cart");
    incrementCartQuantity();
    toast({
      title: "Produit ajouter au panier ",
      description: "",
      action: <ToastAction altText="Annuler">Annuler</ToastAction>,
    });
  };
  const handleQuantity = (operator, quantity) => {
    if (operator === "+") setQuantity(quantity + 1);
    else {
      if (quantity === 1) return;
      else setQuantity(quantity - 1);
    }
  };
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const carouselTest = [
    "/default.png",
    "/default.png",
    "/default.png",
    "/default.png",
    "/default.png",
  ];
  return (
    <div className="h-full w-full flex flex-col ">
      <div className="p-6 text-gray-700">
        <Link href={`/products/`}>
          <Undo2 />
        </Link>
      </div>
      <div className="h-[70%] w-full flex items-center">
        <div className="flex flex-col w-1/2 h-3/4 items-center justify-center ">
          <div>
            <Carousel setApi={setApi} className="w-full max-w-md">
              <CarouselContent>
                {carouselTest.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6 h-full">
                        <Image alt="" width={250} height={150} src={image} />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
              Slide {current} of {count}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2 h-3/4 gap-y-6 items-center justify-center ">
          <h2 className="text-5xl font-extrabold">
            {searchParams.get("title")}
          </h2>
          <h3 className="text-4xl font-bold">{searchParams.get("price")}</h3>
          {stock === true ? (
            <p className="text-sm font-bold text-success">In stock</p>
          ) : (
            <p className="text-sm font-bold text-destructive">Out of stock</p>
          )}
          <p className="text-gray-600">Description du produit</p>
          <div>
            <Table>
              <TableCaption>Caractéristique du produit</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Référence</TableHead>
                  <TableHead>Dimensions</TableHead>
                  <TableHead>Information_3</TableHead>
                  <TableHead>Information_4</TableHead>
                  <TableHead>Information_5</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-center">
                    XXXX
                  </TableCell>
                  <TableCell className="text-center">30x20x10cm</TableCell>
                  <TableCell className="text-center">Detail_3</TableCell>
                  <TableCell className="text-center">Detail_4</TableCell>
                  <TableCell className="text-center">Detail_5</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-around w-full">
            <div className="flex gap-4 items-center">
              <Button
                variant="outline"
                onClick={() => handleQuantity("+", quantity)}
              >
                +
              </Button>
              <div className="h-10 px-4 py-2 rounded-md text-sm border border-input bg-background hover:bg-accent hover:text-accent-foreground flex justify-center items-center">
                {quantity}
              </div>
              <Button
                variant="outline"
                onClick={() => handleQuantity("-", quantity)}
              >
                -
              </Button>
            </div>
            <Button className="rounded-full gap-3" onClick={() => addToCart()}>
              Ajouter au panier <ShoppingCart className="test-sm" size={20} />
            </Button>
          </div>
        </div>
        <Toaster />
      </div>
      <div className="h-[30%] w-full">
        <Similarities />
      </div>
    </div>
  );
}
