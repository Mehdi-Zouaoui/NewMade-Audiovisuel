"use client";
import { useCart } from "../../store";
import ProductWidget from "../../components/checkout/ProductWidget";
export default function ShoppingCart() {
  const { products, addItem, removeItem, clearCart } = useCart();
  const calculateTotalPrice = (products) => {
    return products.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full gap-y-7">
      <div className=" max-h-[650px] pt-6 overflow-y-auto w-full">
        <div className="w-full flex flex-col gap-y-6 ">
          {products.map((item, index) => (
            <div key={index}>
              <ProductWidget product={item} />
            </div>
          ))}
        </div>
       
      </div>
      <div>Price : {calculateTotalPrice(products)}€ </div>
    </div>
  );
}
