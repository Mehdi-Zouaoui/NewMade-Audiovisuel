import Country from "../products/Country";
import ProductRange from "../products/ProductRange";
import Supplier from "../products/Supplier";
export default function SideBar() {
  return (
    <div className="flex flex-col w-full">
      <div>
        <Country />
      </div>
      <div>
        <ProductRange />
      </div>
      <div>
        <Supplier />
      </div>
    </div>
  );
}
