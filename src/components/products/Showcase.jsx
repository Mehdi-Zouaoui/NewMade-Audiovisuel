import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
export default function Showcase() {
  const products = [1, 1, 1, 1, 1];
  return (
    <div className="w-full h-full p-10 overflow-y-auto">
      <div className="flex flex-wrap justify-between gap-8">
        {products.map((product, index) => (
          <div key={index}>
            <Link
              href={{
                pathname: `/products/${index}`,
                query: { title: `Product ${index}`, price: `${index + 1}50€` },
              }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Produit {index}</CardTitle>
                  <Image alt="" width={250} height={150} src={`/default.png`} />
                  <CardDescription>Description du produit</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
