import type { NextApiRequest, NextApiResponse } from 'next';
import type { Product } from '../../types';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

interface Request {
    items: Product[];
    email: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { items, email }: Request = req.body;

    const transformedItems = items.map((item) => ({
        quantity: 1,
        price_data: {
            currency: 'usd',
            unit_amount: item.price * 100,
            product_data: {
                name: item.title,
                images: [item.image],
            },
        },
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_address_collection: {
            allowed_countries: ['GB', 'US', 'CA'],
        },
        shipping_options: [
            {
                shipping_rate_data: {
                    fixed_amount: { amount: 0, currency: 'usd' },
                    display_name: 'Free shipping',
                    type: 'fixed_amount',
                    delivery_estimate: {
                        minimum: { unit: 'day', value: 5 },
                        maximum: { unit: 'day', value: 7 },
                    },
                },
            },
            {
                shipping_rate_data: {
                    fixed_amount: { amount: 1799, currency: 'usd' },
                    display_name: 'Next day shipping',
                    type: 'fixed_amount',
                    delivery_estimate: {
                        minimum: { unit: 'business_day', value: 1 },
                        maximum: { unit: 'business_day', value: 3 },
                    },
                },
            },
        ],
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/cart`,
        metadata: {
            email,
            images: JSON.stringify(items.map((item) => item.image)),
        },
    });

    res.status(200).json({ id: session.id });
}
