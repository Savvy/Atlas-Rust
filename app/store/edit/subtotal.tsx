'use client';

import { Button } from "@/components/ui/button";
import useFromStore from "@/hooks/useFromStore";
import { useCartStore } from "@/store/useCartStore";
import { useMemo } from "react";

export default function Subtotal() {

    const currency = useFromStore(useCartStore, (state) => state.currency);
    const totalPrice = useFromStore(useCartStore, (state) => state.totalPrice);

    const formatter = useMemo(() => {
        if (!currency) return undefined;
        return new Intl.NumberFormat
            (currency?.locale, { style: 'currency', currency: currency?.currency });
    }, [currency]);

    return (
        <>
            <h5 className="mb-3 font-rajdhani text-lg">Sub Total:</h5>
            <Button
                variant={'default'}
                size={"lg"}
                className={"w-full font-rajdhani text-lg"}
            >Buy | {!!formatter ? formatter.format(totalPrice || 0) : '$ 0.00'}</Button>
        </>
    )
}