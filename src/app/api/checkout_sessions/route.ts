import {NextRequest, NextResponse} from "next/server";
import {headers} from "next/headers";
import { Product } from "@/contexts/cartContext";
import stripe from "@/config/stripe";


export async function POST(req: NextRequest, res: NextResponse) {
    const headersList = headers();
    const cartDetails = await req.json();
    console.log(cartDetails)
    const cartDetailsArray: Product[] = Object.values(cartDetails) as Product[];

    const lineItems = cartDetailsArray.map((item: Product) => {
        return {
            price_data: {
                currency: 'USD',
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price,
            },
            quantity: item.qty,
        };
    });
    
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${headersList.get("origin")}/thank-you`,
            cancel_url: `${headersList.get("origin")}/`,
        });

        return NextResponse.json({sessionId: session.id});
    } catch (err) {
        console.log(err)
        return NextResponse.json({error: "Error creating checkout session"});
    }
}