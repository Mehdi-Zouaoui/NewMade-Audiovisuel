"use client";
import {
  Fullscreen,
  Package,
  PackageOpen,
  ShoppingCart,
  Trash2,
  Undo2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import * as React from "react";
import Informations from "../../../components/products/Informations";
import Similarities from "../../../components/products/Similarities";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { Separator } from "../../../components/ui/separator";
import { Slider } from "../../../components/ui/slider";
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
import { useCart } from "../../../store";

export default function ProductPage({}) {
  const { products, addItem, removeItem, clearCart } = useCart();
  const searchParams = useSearchParams();
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);
  const [stock, setStock] = React.useState(true);
  const { toast } = useToast();
  const [imageSize, setImageSize] = React.useState(400);
  const imagesUrl = JSON.parse(searchParams.get("imagesUrl"));

  const handleImageSizeChange = (newSizes) => {
    setImageSize(newSizes * 1);
  };
  const handleQuantity = (operator, quantity) => {
    if (operator === "+") setQuantity(quantity + 1);
    else {
      if (quantity === 1) return;
      else setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const product = {
      quantity: quantity,
      name: searchParams.get("title"),
      price: searchParams.get("price"),
      id: searchParams.get("id"),
      imagesUrl: JSON.parse(searchParams.get("imagesUrl")),
    };
    addItem(product);
    toast({
      title: `${searchParams.get("title")} à été ajouté au panier`,
      description: `Prix : ${searchParams.get("price")} €`,
    });
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
    <div className="h-full w-full flex flex-col overflow-y-auto ">
      <div className="px-6 pt-6 text-gray-700">
        <Link href={`/products/`}>
          <Undo2 />
        </Link>
      </div>
      <div className="h-full w-full flex items-center j">
        <div className="flex flex-col w-[48%] h-full items-center justify-center ">
          <div className="flex flex-col items-center justify-center">
            <Carousel
              setApi={setApi}
              className="w-full max-w-lg"
              opts={{ align: "center", loop: true }}
            >
              <CarouselContent>
                {searchParams.get("imagesUrl").length ? (
                  <>
                    {imagesUrl.map((url, index) => (
                      <CarouselItem key={index} className="basis-full">
                        <Card>
                          <CardContent className="  p-6 h-full relative ">
                            <Image
                              alt="product image"
                              width={500}
                              height={500}
                              src={url}
                              className=""
                            />
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  className="absolute top-10 right-10 opacity-70 p-3"
                                  variant="outline"
                                >
                                  <Fullscreen strokeWidth={1} />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl">
                                <div className="flex flex-col items-center space-x-2 w-full h-full">
                                  <Image
                                    width={imageSize}
                                    height={imageSize}
                                    alt="Picture of the product"
                                    src={url}
                                  />
                                  <div className="w-1/2">
                                    <Slider
                                      min={400}
                                      max={1000}
                                      value={[imageSize]}
                                      onValueChange={handleImageSizeChange}
                                    />
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
              Slide {current} of {count}
            </div>
          </div>
        </div>
        <div className="h-[90%] w-[4%] self-start">
          <Separator orientation="vertical" />
        </div>

        <div className="flex flex-col w-[48%] h-full gap-y-6 items-start justify-center pr-6 ">
          <h2 className="text-5xl font-extrabold">
            {searchParams.get("title")}
          </h2>
          <h3 className="text-4xl font-bold">
            {searchParams.get("price")}€{" "}
            <span className="text-xs">pièce/H.T</span>
          </h3>
          {stock === true ? (
            <p className="text-sm font-bold text-success flex items-center gap-2">
              In stock <Package />
            </p>
          ) : (
            <p className="text-sm font-bold text-destructive flex items-center gap-2">
              Out of stock <PackageOpen />
            </p>
          )}
          <p className="overflow-y-auto  min-h-80 text-gray-600 text-sm leading-6 whitespace-pre-line">
            {searchParams.get("description")}
          </p>
          <div>
            <Table>
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
          <div className="flex justify-between w-full items-center">
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
            <Button className="rounded-full gap-3" onClick={handleAddToCart}>
              Ajouter au panier <ShoppingCart className="test-sm" size={20} />
            </Button>
            <div className="w-1/3">
              <Informations />
            </div>
          </div>
        </div>
        <Toaster />
      </div>
      {/* <div className="h-[30%] w-full">
        <Similarities />
      </div> */}
    </div>
  );
}
