import Link from "next/link";
import { Separator } from "../ui/separator";

export default function Nav() {
  return (
    <div>
      <ul className="flex  h-6  gap-3 dark:border-slate-200 ">
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <Separator orientation="vertical" />
        <li>
          <Link href="/admin">Admin</Link>
        </li>
        <Separator orientation="vertical" />
        <li>
          <Link href="/system">Services</Link>
        </li>
        <Separator orientation="vertical" />

        <li>
          <Link href="/system">Systèmes</Link>
        </li>
        <Separator orientation="vertical" />
        <li>
          <Link href="/products">Produits</Link>
        </li>
        <Separator orientation="vertical" />
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
