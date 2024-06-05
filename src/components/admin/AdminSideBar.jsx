"use client";
import { Boxes, LayoutDashboard, PackagePlus, Undo2 } from "lucide-react";
import Link from "next/link";
import { useAdminPage } from "../../store";
export default function AdminSideBar() {
  const currentAdminPage = useAdminPage((state) => state.adminPage);
  const updateAdminPage = useAdminPage((state) => state.setCurrentAdminPage);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center border relative">
      <Link href={`/products/`} className="absolute top-4 left-4 text-xl">
        <Undo2 />
      </Link>
      <ul className=" h-full w-full mt-20 m-3 rounded-xl pl-10 flex flex-col items-center gap-6">
        <li
          onClick={() => {
            updateAdminPage("dashboard");
          }}
          className="flex items-center justify-start gap-3 w-full"
        >
          <LayoutDashboard />

          <h4>Dashboard</h4>
        </li>
        <li
          onClick={() => {
            updateAdminPage("products");
          }}
          className="flex items-center justify-start gap-3 w-full"
        >
          <PackagePlus />
          <h4>Ajouter un produit</h4>
        </li>
        <li
          onClick={() => {
            updateAdminPage("system");
          }}
          className="flex items-center justify-start gap-3 w-full"
        >
          {" "}
          <Boxes />
          <h4> Ajouter Un Système</h4>
        </li>
      </ul>
    </div>
  );
}
