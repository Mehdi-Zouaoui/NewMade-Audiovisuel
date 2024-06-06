import { ArrowLeftRight, Truck } from "lucide-react";

export default function Informations() {
  return (
    <div className="flex flex-col items-start gap-4 p-3 pl-6 rounded-lg w-full text-xs">
      <div className="flex items-center gap-3 ">
        <Truck />
        <p> Livraison sous 30 jours ! </p>
      </div>
      <div className="flex items-center gap-3 ">
        <ArrowLeftRight />
        <p>Retours et échanges GRATUITS pendant 365 jours </p>
      </div>
    </div>
  );
}
