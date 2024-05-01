import { Search } from "lucide-react";
export default function SearchBar(options) {
  return (
    <div className="flex justify-between border w-full rounded-full gap-2 p-3">
      <Search />
      <input type="text" className="w-[90%] pr-2 appearance-none border-0" />
    </div>
  );
}
