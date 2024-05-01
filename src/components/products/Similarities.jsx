import SimilaritiesCard from "./SimilaritiesCard";
export default function Similarities() {
  const similaritiesCard = [1, 1, 1, 1];
  return (
    <div className="flex flex-col w-full h-full pl-20 gap-y-4">
      <h1 className="text-xl font-bold">Produit qui pourrait vous plaire </h1>

      <div className="w-full h-full flex justify-between items-end pr-20">
        {similaritiesCard.map((card, index) => (
          <div className="h-full w-1/5">
            <SimilaritiesCard />
          </div>
        ))}
      </div>
    </div>
  );
}
