
import { items } from "@/data/items";
import { InvItem, Item } from "@/types";
import { XIcon } from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

type ItemConfigProps = {
    invItems: InvItem[],
    itemId: number,
    /* itemAmounts: any, */
    setItemAmount?: any,
    removeByType: any
}

export default function ItemConfig({ invItems, itemId, setItemAmount, removeByType }: ItemConfigProps) {

    const currentAmount = useMemo(() => invItems.reduce((val, item) =>
        (item && item.item === itemId) ? val + item.amount : val, 0), [invItems, itemId]);

    const invItem = useMemo(() => items.find((item) => item.id === itemId), [itemId]);

    const pricing = useMemo(() => {
        if (!invItem) return 0
        let newPrice = undefined;
        const search = invItem.pricing.find((pricing) => (currentAmount >= pricing.min && currentAmount <= pricing.max));
        if (search) newPrice = search.price
        if (newPrice === undefined) {
            newPrice = invItem.defaultPricing
        }
        return newPrice;
    }, [invItem, currentAmount])

    return invItem ?
        (
            <div className="w-full flex flex-row items-center gap-2">
                <div className="text-white cursor-pointer" onClick={() => {
                    removeByType(itemId)
                }}><XIcon className="w-4 h-4" /></div>
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
                        <span>${pricing.toLocaleString()} / {invItem.step.toLocaleString()}</span>
                    </div>
                    <div className="">
                        {/* <Slider
                        min={invItem.min === invItem.max ? 2 : invItem.min}
                        max={invItem.max}
                        step={invItem.step}
                        className={cn("w-full mb-8")}
                        value={[currentAmount]}
                        onValueChange={(value) => {
                            if (setItemAmount)
                                setItemAmount(invItem, value[0]);
                        }}
                    /> */}
                        <RangeSlider
                            className="single-thumb w-full"
                            min={invItem.min === invItem.max ? 2 : invItem.min}
                            max={invItem.max}
                            step={invItem.step}
                            value={[0, currentAmount]}
                            thumbsDisabled={[true, false]}
                            rangeSlideDisabled={true}
                            onInput={(value: any) => {
                                if (setItemAmount)
                                    setItemAmount(invItem, value[1]);
                            }}
                        />
                        <div className="flex justify-between font-rajdhani text-muted font-semibold mt-2">
                            <span>Min</span>
                            <span>Max</span>
                        </div>
                    </div>
                </div>
            </div>
        ) : null
}