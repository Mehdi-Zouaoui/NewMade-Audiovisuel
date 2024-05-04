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
export default function Showcase({ speakers }) {
  return (
    <div className="w-full h-full p-10 overflow-y-auto">
      <div className="flex flex-wrap justify-between gap-8">
        {speakers.map((speaker, index) => (
          <div key={index} className="w-1/4">
            <Link
              href={{
                pathname: `/products/${index}`,
                query: {
                  id: speaker.id,
                  title: speaker.name,
                  price: speaker.price,
                  description: speaker.description,
                },
              }}
            >
              <Card>
                <CardHeader>
                  <CardTitle> {speaker.name}</CardTitle>
                  <Image alt="" width={250} height={150} src={`/default.png`} />
                </CardHeader>
                <CardContent>
                  <CardDescription>{speaker.description}</CardDescription>
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
