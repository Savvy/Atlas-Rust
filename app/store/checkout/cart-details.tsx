"use client";

import { useCartStore } from '@/store/useCartStore';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import useFromStore from '@/hooks/use-from-store';
import { useCallback, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { InvItem } from '@/types';
import CartItem from './cart-item';
import { cn } from '@/lib/utils';

export default function CartDetails() {
    const cart = useFromStore(useCartStore, (state) => state.cart)
    const totalPrice = useFromStore(useCartStore, (state) => state.totalPrice);
    const currency = useFromStore(useCartStore, (state) => state.currency);

    const removeFromCart = useCartStore((state) => state.removeFromCartByIndex);

    const formatter = useMemo(() => {
        if (!currency) return undefined;
        return new Intl.NumberFormat
            (currency?.locale, { style: 'currency', currency: currency?.currency });
    }, [currency]);

    useEffect(() => {
    }, [cart]);

    const filteredItems = (items: InvItem[]) => {
        return items.filter((value, index, self) =>
            value !== undefined && value !== null &&
            index === self.findIndex((item) => (
                item !== undefined && item.item.id === value.item.id
            ))
        )
    }

    /* const currentAmount = useMemo(() => invItems.reduce((val, item) => */
    /*     (item && item.item.id === invItem.id) ? val + item.amount : val, 0), [invItems, invItem]); */

    useEffect(() => {
        /* console.log(cart); */
    }, [cart])

    return (
        <div className="h-full flex flex-col justify-between">
            <Accordion type="multiple" className="w-full flex-grow">
                {!!cart ? cart.map((cartItem, index) => (
                    <AccordionItem value={`cart-${index}`} key={index} className='border-[#24272E]'>
                        <AccordionTrigger className='hover:no-underline'>
                            <div className="flex w-full justify-between pr-2">
                                <div className="flex items-center justify-center gap-3 text-[#8F9199]">
                                    <h2 className="text-lg">{cartItem.name}</h2>
                                    <span className="inline-block rounded-full bg-[#8F9199] h-1 w-1"></span>
                                    <h2 className="text-lg">{!!formatter ? formatter.format(cartItem.price || 0) : null}</h2>
                                </div>
                                <div className="">
                                    <a
                                        
                                        className={cn(
                                            "flex items-center justify-center h-9 rounded-md px-3 font-medium",
                                            'border bg-transparent uppercase border-[#F94242] text-[#F94242] rounded',
                                            'hover:bg-transparent hover:text-[#F94242] opacity-75 hover:opacity-100 transition-opacity'
                                        )}
                                        onClick={() => {
                                            removeFromCart(index);
                                        }}
                                    >
                                        Remove
                                    </a>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className='text-[#8F9199] space-y-2'>
                                {filteredItems(cartItem.items).map((item, innerIndex, arr) => (
                                    <CartItem
                                        invItems={cartItem.items}
                                        invItem={item}
                                        formatter={formatter}
                                        key={innerIndex}
                                    />
                                ))}

                                {filteredItems(cartItem.clothingItems).map((item, innerIndex) =>
                                    <div key={innerIndex}>
                                        <h5 className='w-full flex justify-between text-[#8F9199] font-semibold'>
                                            <span>{item.item.name}: {(+item.amount).toLocaleString()}</span>
                                            <span>{formatter?.format(item.amount * item?.item.pricePerStep)}</span>
                                        </h5>
                                    </div>
                                )}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                )) : null}
            </Accordion>
            <div className="w-full flex flex-col gap-3 mt-3">
                <Accordion type="multiple" className="w-full flex-grow">
                    <AccordionItem value={`billing-summary`} className='border-[#24272E]'>
                        <AccordionTrigger className='hover:no-underline'>
                            <div className="flex items-center justify-center gap-3 text-[#8F9199]">
                                <h2 className="text-lg">Billing Summary</h2>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-3">
                                <h5 className='w-full flex justify-between text-[#8F9199] font-semibold'>
                                    <span>Sub Total:</span>
                                    <span>{formatter?.format(totalPrice || 0)}</span>
                                </h5>
                                <h5 className='w-full flex justify-between text-[#8F9199] font-semibold'>
                                    <span>Tax:</span>
                                    <span>{formatter?.format(totalPrice || 0)}</span>
                                </h5>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <h3 className='w-full flex justify-between text-white font-semibold'>
                    <span className='text-lg font-medium'>Grand Total</span>
                    <span className='text-lg font-medium'>{formatter?.format(totalPrice || 0)}</span>
                </h3>
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
                <Button type="submit">Pay | {formatter?.format(totalPrice || 0)}</Button>
            </div>
        </div>
    )
}