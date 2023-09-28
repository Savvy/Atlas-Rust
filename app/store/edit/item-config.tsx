import { Slider } from "@/components/ui/slider";
import { editPackage } from "@/data/items";
import { cn } from "@/lib/utils";
import { InvItem } from "@/types";
import Image from "next/image";
import { useMemo, useState } from "react";

type ItemConfigProps = {
    index?: number,
    invItems: InvItem[],
    invItem: InvItem,
    itemAmounts: any,
    setAmount: any,
    slotsAvailable: number
}

export default function ItemConfig({ invItems, invItem, itemAmounts, setAmount, slotsAvailable }: ItemConfigProps) {
    const [val, setVal] = useState(itemAmounts[invItem.item.id].amount);

    const itemsInInv = useMemo(() => invItems.reduce((val, item) =>
        (item?.item && item.item.id == invItem.item.id) ? val + 1 : val, 0), [invItems, invItem])

    return (
        <div className="w-full text-muted py-2 font-rajdhani font-medium">
            <div className="flex items-center justify-between w-full mb-2">
                <div className="flex gap-2 flex-row items-center">
                    <Image
                        src={`/images/store/items/${invItem.item.image}`}
                        width={30}
                        height={30}
                        alt={invItem.item.name}
                    />
                    <span className="">{invItem.item.name}<br />{itemAmounts[invItem.item.id].amount.toLocaleString()} / {invItem.item.max.toLocaleString()}</span>
                </div>
                <span>$0.35 / 1,000</span>
            </div>
            <div className="">
                <Slider
                    min={invItem.item.min}
                    max={invItem.item.max}
                    step={invItem.item.step}
                    className={cn("w-full")}
                    value={[val]}
                    onValueChange={(value) => {
                        const newAmount = Math.ceil(value[0] / invItem.item.maxPerStack);
                        const amountToAdd = newAmount - itemsInInv;
                        if ((slotsAvailable == 0 && value[0] > val) || amountToAdd > slotsAvailable) {
                            return;
                        }
                        setVal(value[0]);
                    }}
                    onValueCommit={(value) => {
                        setVal(value[0]);
                        setAmount(invItem.item.id, value[0]);
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