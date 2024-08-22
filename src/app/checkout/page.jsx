"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import PaymentForm from "../../components/checkout/PaymentForm";
import ShoppingCart from "../../components/checkout/ShoppingCart";
import convertToSubcurrency from "../../lib/convertToSubcurrency";
import { useCart } from "../../store";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("Stripe public key is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function ProductPage({}) {
  const { products, addItem, removeItem, clearCart } = useCart();
  const [amount, setAmount] = useState();

  useEffect(() => {
    if (products.length) {
      const totalAmount = products.reduce((acc, produit) => {
        return acc + parseInt(produit.price, 10);
      }, 0);
      setAmount(totalAmount);
    }
  }, []);

  return (
    <div className="h-full w-full  flex items-center justify-center">
      <div className="w-[90%] flex items-center justify-center">
        <div className="flex flex-col w-[60%] items-start mr-2">
          <h2 className="text-3xl font-bold leading-none my-4 pb-5">
            Votre Pannier
          </h2>
          <ShoppingCart />
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <div>
            PaymentForm
            {amount && (
              <Elements
                stripe={stripePromise}
                options={{
                  mode: "payment",
                  amount: convertToSubcurrency(amount),
                  currency: "eur",
                }}
              >
                {" "}
                <PaymentForm amount={amount} />
              </Elements>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
