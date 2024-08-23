"use client";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Header from "../../components/products/Header";
import SideBar from "../../components/products/SideBar";
const inter = Inter({ subsets: ["latin"] });

export default function ProductLayout({ children }) {
  const path = usePathname();
  return (
    <div className="w-full bg-blue h-screen border dark:bg-zinc-800  dark:border-stone-400">
      <div className="h-[10%] ">
        <Header />
      </div>
      <div className="w-full flex h-[90%]">
        {path === "/products" ? (
          <div className="w-1/6 h-full border dark:bg-zinc-800 dark:border-stone-400">
            <SideBar />
          </div>
        ) : null}

        <div className="w-full h-full border dark:bg-zinc-800 dark:border-stone-400">
          {children}
        </div>
      </div>
    </div>
  );
}
