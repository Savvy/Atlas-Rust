import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Item } from "@/types";
import Image from "next/image";
import { useMemo, useState } from "react";

type ItemConfigProps = {
    index?: number,
    invItems: Item[],
    invItem: Item,
    itemAmounts: any,
    setAmount: any,
    slotsAvailable: number
}

export default function ItemConfig({ invItems, invItem, itemAmounts, setAmount, slotsAvailable }: ItemConfigProps) {
    const [val, setVal] = useState(itemAmounts[invItem.id].amount);

    const itemsInInv = useMemo(() => invItems.reduce((val, item) =>
        (item?.id == invItem.id) ? val + 1 : val, 0), [invItems, invItem])

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
                    <span className="">{invItem.name}<br />{itemAmounts[invItem.id].amount.toLocaleString()} / {invItem.max.toLocaleString()}</span>
                </div>
                <span>$0.35 / 1,000</span>
            </div>
            <div className="">
                <Slider
                    min={invItem.min}
                    max={invItem.max}
                    step={invItem.step}
                    
                    className={cn("w-full")}
                    value={[val]}
                    onValueChange={(value) => {
                       /*  if (value[0] < val) {
                            console.log(val);
                            console.log(value[0]);
                            console.log(val - value[0])
                            if ((val - value[0]) < invItem.min) {
                                return;
                            }
                        } */
                        const newAmount = Math.ceil(value[0] / invItem.maxPerStack);
                        const amountToAdd = newAmount - itemsInInv;
                        if ((slotsAvailable == 0 && value[0] > val) || amountToAdd > slotsAvailable) {
                            return;
                        }
                        console.log(value[0])
                        setVal(value[0]);
                        setAmount(invItem.id, value[0]);
                    }}
                    /* onValueCommit={(value) => {
                        console.log(value);
                    }} */
                />
                <div className="flex justify-between font-rajdhani text-muted font-semibold mt-2">
                    <span>Min</span>
                    <span>Max</span>
                </div>
            </div>
        </div>
    )
}