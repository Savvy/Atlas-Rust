'use client';

import { Button } from "@/components/ui/button";
import useFromStore from "@/hooks/useFromStore";
import { useCartStore } from "@/store/useCartStore";
import { InvItem } from "@/types";
import { useMemo } from "react";

export default function Subtotal({ invItems, addPackageToCart }: { invItems: InvItem[], addPackageToCart: () => void }) {

    const currency = useFromStore(useCartStore, (state) => state.currency);
    const totalPrice = useFromStore(useCartStore, (state) => state.totalPrice);

    const formatter = useMemo(() => {
        if (!currency) return undefined;
        return new Intl.NumberFormat
            (currency?.locale, { style: 'currency', currency: currency?.currency });
    }, [currency]);

    const total = useMemo(() => {
        return invItems.reduce((acc, invItem: InvItem) => {
            return !!invItem ? acc + ((invItem.amount / invItem.item.step) * invItem.item.pricePerStep) : acc
        }, 0)
    }, [invItems]);

    return (
        <>
            <h5 className="mb-3 font-rajdhani text-lg">Sub Total:</h5>
            <Button
                variant={'default'}
                size={"lg"}
                className={"w-full font-rajdhani text-lg"}
                onClick={addPackageToCart}
            >Add To Cart | {!!formatter ? formatter.format(total || 0) : '$ 0.00'}</Button>
        </>
    )
}