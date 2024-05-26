import ShoppingCart from "../../components/checkout/ShoppingCart";
import Payment from "../../components/checkout/Payment";
export default function ProductPage({}) {
  return (
    <div className="h-full w-full  flex items-center justify-center">
      <div className="w-[90%] flex items-center justify-center">
        <div className="flex flex-col w-[60%] items-start mr-2">
          <h2 className="text-3xl font-bold leading-none my-4 pb-5">Votre Pannier</h2>
          <ShoppingCart />
          
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <Payment />
        </div>
      </div>
    </div>
  );
}
