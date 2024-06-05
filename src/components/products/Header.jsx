"use client";
import { useState } from "react";
import ThemeButton from "../layout/ThemeButton";
import Image from "next/image";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import UserBar from "./UserBar";
export default function Header() {
  const [quantityInCart, setQuantityInCart] = useState(3);
  return (
    <div className="h-full flex items-center justify-around ">
      <div className="bg-black p-3 rounded-xl">
        <Image alt="" width={150} height={100} src={"/logo.png"} />
      </div>
      <div className="w-1/5">
        <SearchBar />
      </div>
      <Nav />
      <UserBar numberOfProducts={quantityInCart} />
      <ThemeButton />
    </div>
  );
}
