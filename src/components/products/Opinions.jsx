import { Star, StarHalf } from "lucide-react";

export default function Opinions() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className=" absolute top-0 left-0">
        <div className="flex gap-1">
          {Array.from({ length: 5 }, (item, index) => (
            <Star key={index} fill="#111" strokeWidth={0} />
          ))}
        </div>
        <div className="flex gap-1 absolute top-0">
          <Star fill="#fcbf49" strokeWidth={0} />
          <Star fill="#ffbe0b" strokeWidth={0} />
          <Star fill="#ffbe0b" strokeWidth={0} />
          <Star fill="#ffbe0b" strokeWidth={0} />
          <StarHalf fill="#ffbe0b" strokeWidth={0} />
        </div>
      </div>
    </div>
  );
}
