
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { InvItem, Item } from "@/types";
import { XIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

type ItemConfigProps = {
    invItems: InvItem[],
    invItem: Item,
    /* itemAmounts: any, */
    setItemAmount?: any,
    removeByType: any
}

export default function ItemConfig({ invItems, invItem, setItemAmount, removeByType }: ItemConfigProps) {

    const currentAmount = useMemo(() => invItems.reduce((val, item) =>
        (item && item.item.id === invItem.id) ? val + item.amount : val, 0), [invItems, invItem]);

    return (
        <div className="w-full flex flex-row items-center gap-2">
            <div className="text-white cursor-pointer" onClick={() => {
                removeByType(invItem.id)
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
                    <span>${invItem.pricePerStep.toLocaleString()} / {invItem.step.toLocaleString()}</span>
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
    )
}