'use client';

import { Button } from "@/components/ui/button";
import { misc } from "@/data/items";
import useFromStore from "@/hooks/useFromStore";
import { useCartStore } from "@/store/useCartStore";
import { InvItem } from "@/types";
import { useMemo } from "react";

type SubtotalProps = {
    invItems: InvItem[],
    addPackageToCart: () => void,
    kitCooldown: number,
    tpCooldown: number,
    amountOfHomes: number,
    coloredName: number,

    autoUpgrade: boolean,
    skipQueue: boolean,
    skinBox: boolean,
}

export default function Subtotal(props: SubtotalProps) {
    const currency = useFromStore(useCartStore, (state) => state.currency);

    const formatter = useMemo(() => {
        if (!currency) return undefined;
        return new Intl.NumberFormat
            (currency?.locale, { style: 'currency', currency: currency?.currency });
    }, [currency]);

    const total = useMemo(() => {
        let amount = 0;
        amount += props.invItems.reduce((acc, invItem: InvItem) => {
            return !!invItem ? acc + ((invItem.amount / invItem.item.step) * invItem.item.pricePerStep) : acc
        }, 0);

        if (props.autoUpgrade) {
            amount += misc.autoUpgrade
        }

        if (props.skipQueue) {
            amount += misc.skipQueue
        }

        if (props.skinBox) {
            amount += misc.skinBox
        }

        amount += misc.kitCooldown[props.kitCooldown].price
        amount += misc.tpCooldown[props.tpCooldown].price
        amount += misc.amountOfHomes[props.amountOfHomes].price
        amount += misc.coloredName[props.coloredName].price

        return amount;
    }, [props]);

    return (
        <>
            <h5 className="mb-3 font-rajdhani text-lg">Sub Total:</h5>
            <Button
                variant={'default'}
                size={"lg"}
                className={"w-full font-rajdhani text-lg"}
                onClick={props.addPackageToCart}
            >Add To Cart | {!!formatter ? formatter.format(total || 0) : '$ 0.00'}</Button>
        </>
    )
}
