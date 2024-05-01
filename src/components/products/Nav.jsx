import Link from "next/link";
import { Separator } from "../ui/separator";

export default function Nav() {
  return (
    <div>
      <ul className="flex  h-6  gap-3">
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <Separator orientation="vertical" />
        <li>Services</li>
        <Separator orientation="vertical" />
        <li>Produits</li>
        <Separator orientation="vertical" />
        <li>Contact</li>
      </ul>
    </div>
  );
}
