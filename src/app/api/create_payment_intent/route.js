import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export async function POST(request) {
  console.log("in api payment");
  try {
    const { amount } = await request.json();
    console.log(amount);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "eur",
      automatic_payment_methods: { enabled: true },
    });
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Internal Error: ", error);
    return NextResponse.json(
      { error: `Internal Server Error le caca: ${error}` },

      { status: 500 }
    );
  }
}
