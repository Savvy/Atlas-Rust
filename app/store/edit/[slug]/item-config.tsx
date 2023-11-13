import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { InvItem, Item } from "@/types";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type ItemConfigProps = {
    invItems: InvItem[],
    invItem: Item,
    /* itemAmounts: any, */
    setItemAmount?: any
}

export default function ItemConfig({ invItems, invItem, setItemAmount }: ItemConfigProps) {

    const currentAmount = useMemo(() => invItems.reduce((val, item) =>
        (item && item.item.id === invItem.id) ? val + item.amount : val, 0), [invItems, invItem]);

    return (
        <div className="w-full text-muted py-2 font-rajdhani font-medium">
            <div className="flex items-center justify-between w-full mb-2">
                <div className="flex gap-2 flex-row items-center">
                    <Image
                        src={`/images/store/items/${invItem.image}`}
                        width={30}
                        height={30}
                        alt={invItem.name}
                    />
                    <span className="">{invItem.name}<br />{currentAmount.toLocaleString()} / {invItem.max.toLocaleString()}</span>
                </div>
                <span>${invItem.pricePerStep.toLocaleString()} / {invItem.step.toLocaleString()}</span>
            </div>
            <div className="">
                <Slider
                    min={invItem.min === invItem.max ? 2 : invItem.min}
                    max={invItem.max}
                    step={invItem.step}
                    className={cn("w-full")}
                    value={[currentAmount]}
                    onValueChange={(value) => {
                        if (setItemAmount)
                            setItemAmount(invItem, value[0]);
                    }}
                />
                <div className="flex justify-between font-rajdhani text-muted font-semibold mt-2">
                    <span>Min</span>
                    <span>Max</span>
                </div>
            </div>
        </div>
    )
}