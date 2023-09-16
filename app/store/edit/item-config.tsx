import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { InvItem, Item } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ItemConfig({ index, invItem, setAmount }: { index: number, invItem: InvItem, setAmount: any }) {

   /*  useEffect(() => {
        console.log((invItem.amount / invItem.item.step) * invItem.item.pricePerStep);
    }, [invItem])
 */
    return (
        <div  className="w-full text-muted py-2 font-rajdhani font-medium">
            <div className="flex items-center justify-between w-full mb-2">
                <div className="flex gap-2 flex-row items-center">
                    <Image
                        src={`/images/store/items/${invItem.item.image}`}
                        width={30}
                        height={30}
                        alt={invItem.item.name}
                    />
                    <span className="">{invItem.item.name} | {invItem.item.max.toLocaleString()}</span>
                </div>
                <span>$0.35 / 1,000</span>
            </div>
            <div className="">
                <Slider
                    min={invItem.item.min}
                    max={invItem.item.max}
                    step={invItem.item.step}
                    className={cn("w-full")}
                    value={[invItem.amount]}
                    onValueChange={(value) => {
                        setAmount(index, value[0]);
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