'use client';

import { Button } from "@/components/ui/button";
import { misc } from "@/data/items";
import useFromStore from "@/hooks/useFromStore";
import { useCartStore } from "@/store/useCartStore";
import { Item } from "@/types";
import { useMemo } from "react";

type SubtotalProps = {
    /* invItems: Item[],
    clothingItems: Item[],
    invAmount: any,
    addPackageToCart: () => void,
    kitCooldown: number,
    tpCooldown: number,
    amountOfHomes: number,
    coloredName: number,

    autoUpgrade: boolean,
    skipQueue: boolean,
    skinBox: boolean,
    setPrice: any */
    addPackageToCart: () => void,
    price: string
}

export default function Subtotal(props: SubtotalProps) {
    

    return (
        <>
            <h5 className="mb-3 font-rajdhani text-lg">Sub Total:</h5>
            <Button
                variant={'default'}
                size={"lg"}
                className={"w-full font-rajdhani text-lg"}
                onClick={props.addPackageToCart}
                >Add To Cart | {props.price}</Button>
            {/* >Add To Cart | {!!formatter ? formatter.format(total || 0) : '$ 0.00'}</Button> */}
        </>
    )
}
