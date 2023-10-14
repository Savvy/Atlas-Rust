"use client";

import { useCartStore } from '@/store/useCartStore';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import useFromStore from '@/hooks/useFromStore';
import { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

export default function CartDetails() {
    const cart = useFromStore(useCartStore, (state) => state.cart)

    const currency = useFromStore(useCartStore, (state) => state.currency);

    const formatter = useMemo(() => {
        if (!currency) return undefined;
        return new Intl.NumberFormat
            (currency?.locale, { style: 'currency', currency: currency?.currency });
    }, [currency]);

    return (
        <div className="h-full flex flex-col justify-between">
            <Accordion type="multiple" className="w-full">
                {!!cart ? cart.map((cartItem, index) => (
                    <AccordionItem value={`cart-${index}`} key={index} className='border-[#24272E]'>
                        <AccordionTrigger>
                            <div className="flex items-center justify-center gap-3 text-[#8F9199]">
                                <h2 className="text-lg">{cartItem.name}</h2>
                                <span className="inline-block rounded-full bg-[#8F9199] h-1 w-1"></span>
                                <h2 className="text-lg">{!!formatter ? formatter.format(cartItem.price || 0) : null}</h2>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className='text[#8F9199]'>Cart Contents</div>
                            {/* {cartItem.items.map((item, index) => (
                                <div key={index}>
                                    <h5>
                                        <span>{item?.name}: {cartItem.invAmount[item?.id]}</span>
                                        <span>{cartItem.invAmount[item?.id] * item.pricePerStep}</span>
                                    </h5>
                                </div>
                            ))} */}
                        </AccordionContent>
                    </AccordionItem>
                )) : null}
                <AccordionItem value={`billing-summary`} className='border-[#24272E]'>
                    <AccordionTrigger>
                        <div className="flex items-center justify-center gap-3 text-[#8F9199]">
                            <h2 className="text-lg">Billing Summary</h2>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        Here is the billing summary
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="w-full flex flex-col gap-3 mt-3">
                <h3 className='text-lg font-medium'>Grand Total</h3>
                <hr className='border-[#24272E]' />
                <div className="flex items-center space-x-2 my-3">
                    <Checkbox id="terms" className='rounded-full' />
                    <label
                        htmlFor="terms"
                        className="text-[#8F9199] text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Please check to acknowledge our <Link href={'#'} className='text-primary'>Privacy & Terms Policy</Link>.
                    </label>
                </div>
                <Button type="submit">Pay | {'$200'}</Button>
            </div>
        </div>
    )
}