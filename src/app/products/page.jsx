"use client"
import Showcase from "../../components/products/Showcase";
import { useSpeakers } from "../../store";
export default async function Page() {
  const getSpeakers = useSpeakers((state) => state.getSpeakers);
  console.log(getSpeakers())
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Showcase />
    </div>
  );
}
