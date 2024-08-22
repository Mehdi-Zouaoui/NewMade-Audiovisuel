"use client";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { CreditCard } from "lucide-react";
import { useCart } from "../../store";

import { useEffect, useState } from "react";
import convertToSubcurrency from "../../lib/convertToSubcurrency";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function PaymentForm({ amount }) {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .post("/api/create_payment_intent", {
        amount: convertToSubcurrency(amount),
      })
      .then((response) => {
        console.log("axios", response);
        setClientSecret(response.data.clientSecret);
      });
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      return;
    }
    const { submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
      },
    });
    if (error) {
      //This point is only reached if there's an immediate error when
      //confirming the payment. Show the error to your customer (for example, payment details incomplete)
      setErrorMessage(error.message);
    } else {
      //The payment UI automatically closes with a success animation
      //Customer is redirected to your `return_url`
    }
    setLoading(false);
  };

  return (
    <div className="w-full pl-3">
      {/* <div className="text-2xl"> {amount}€</div> */}
      <form
        onSubmit={handleSubmit}
        className="bg-slate-400 text-white p-2 rounded-md"
      >
        {clientSecret && <PaymentElement />}
        {errorMessage && <div>{errorMessage}</div>}
        <button
          disabled={!stripe || loading}
          className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold"
        >
          {!loading ? `Payer  ${amount}€` : "Processing"}
        </button>
      </form>
      {/* <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Payment Informations</CardTitle>
          <CardDescription>Moyen de paiment.</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue="comfortable" className="mb-4">
            <div className="flex items-center space-x-2 py-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1" className="flex items-center gap-2">
                <CreditCard size={20} strokeWidth={1} />
                Credit Card
              </Label>
            </div>
            <div className="flex items-center space-x-2 py-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Paypal</Label>
            </div>
          </RadioGroup>

          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card> */}
    </div>
  );
}
