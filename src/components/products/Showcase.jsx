"use client";
import Image from "next/image";
import Link from "next/link";
import { useCategory } from "../../store";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
export default function Showcase({ speakers, micros }) {
  const { category } = useCategory();

  return (
    <div className="w-full h-full p-10 overflow-y-auto dark:bg-zinc-800">
      <div className="flex flex-wrap  gap-6 gap-y-10">
        {category === "speakers" ? (
          <>
            {speakers.map((speaker, index) => (
              <div key={index} className="w-[30%]">
                <Link
                  href={{
                    pathname: `/products/${index}`,
                    query: {
                      id: speaker.id,
                      title: speaker.name,
                      price: speaker.price,
                      description: speaker.description,
                      imagesUrl: JSON.stringify(speaker.imagesUrl),
                    },
                  }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle> {speaker.name}</CardTitle>
                      <div className="min-h-64 flex items-center pt-3">
                        <Image
                          alt=""
                          className="rounded-xl m-auto"
                          width={350}
                          height={100}
                          src={speaker.imagesUrl[0]}
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="h-24">
                      <CardDescription className="leading-5 line-clamp-3 ">
                        {speaker.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <p>{speaker.price} € </p>
                    </CardFooter>
                  </Card>
                </Link>
              </div>
            ))}
          </>
        ) : (
          <>
            {micros.map((speaker, index) => (
              <div key={index} className="w-[23%]">
                <Link
                  href={{
                    pathname: `/products/${index}`,
                    query: {
                      id: speaker.id,
                      title: speaker.name,
                      price: speaker.price,
                      description: speaker.description,
                      imagesUrl: JSON.stringify(speaker.imagesUrl),
                    },
                  }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle> {speaker.name}</CardTitle>
                      <div className="min-h-64 flex items-center ">
                        <Image
                          alt=""
                          className="rounded-xl"
                          width={250}
                          height={100}
                          src={speaker.imagesUrl[0]}
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="h-24">
                      <CardDescription className="leading-5 line-clamp-3">
                        {speaker.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <p>{speaker.price} €</p>
                    </CardFooter>
                  </Card>
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
