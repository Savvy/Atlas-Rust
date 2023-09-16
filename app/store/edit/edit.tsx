'use client';

import { cn } from "@/lib/utils";
import Miscellaneous from "./misc";
import ItemsList from "./items-list";

import { categories, items as initialItems } from "@/data/items"

import { useDrop } from 'react-dnd'

import { useEffect, useState } from "react";
import { Item, InvItem } from "@/types";
import Image from "next/image";
import XIcon from "@/components/icons/xicon";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import Subtotal from "./subtotal";
import ItemConfig from "./item-config";

export default function Edit() {

    const [invItems, setInvItems] = useState<InvItem[]>([]);
    const [items, setItems] = useState<Item[]>([...initialItems]);

   /*  useEffect(() => {
        console.log(invItems)
    }, [invItems])
 */
    useEffect(() => {
        console.log(items)
    }, [items])

    const addItemToInv = (item: Item) => {
        console.log(item);
        setInvItems((prev) => {
            const newArray = [...prev, { item, amount: item.min }];
            return newArray
        });
        setItems((prev) => {
            const newArray = [...prev];
            newArray.splice(prev.findIndex((obj) => obj.id === item.id), 1)
            return newArray
        })
    }

    const [collectedProps, drop] = useDrop(() => ({
        accept: 'item',
        drop(item: Item, monitor) {
            addItemToInv(item);
            return item
        },
    }))

    const setItemAmount = (index: number, amount: number) => {
        const newArray = [...invItems];
        newArray[index]['amount'] = amount;
        setInvItems(newArray);
    }

    return (
        <>
            <div className={cn("bg-[#15171B] col-span-4", "rounded-md max-h-[28rem]")}>
                <ItemsList categories={categories} items={items} />
            </div>
            <div className="col-span-5 flex flex-col gap-5 w-full">
                <div className={cn(
                    "bg-[#15171B] w-full",
                    "rounded-md p-5"
                )}>
                    <h3 className="text-2xl text-muted font-rajdhani font-medium mb-3">Miscellaneous</h3>
                    <Miscellaneous />
                </div>
                <div className={cn(
                    "bg-[#15171B] w-full",
                    "rounded-md p-5"
                )}>
                    <h3 className="text-2xl text-muted font-rajdhani font-medium mb-3">Inventory - Rust</h3>
                    <div ref={drop} className="w-full grid grid-cols-5 gap-x-1 gap-y-4">
                        {!!invItems && invItems.map((invItem,) => (
                            <div
                                className="flex flex-col justify-start items-center gap-1 select-none"
                                key={invItem.item.id}
                            >
                                <div className={cn(
                                    "w-full h-20",
                                    "rounded-md flex items-center justify-center",
                                    "bg-transparent border border-[#434343]",
                                    "text-muted")}>
                                    {invItem.item.image
                                        ? <Image
                                            src={`/images/store/items/${invItem.item.image}`}
                                            width={48}
                                            height={45}
                                            alt={invItem.item.name}
                                        />
                                        : <XIcon />
                                    }
                                </div>
                                <span className="text-sm opacity-75 font-rajdhani">{invItem.item.name}</span>
                            </div>
                        ))}
                        {Array.from({ length: (30 - invItems.length) }).map((_, index) => (
                            <div key={index} className={cn(
                                "w-full h-20",
                                "rounded-md flex items-center justify-center",
                                "bg-[#434343] border border-[#434343]",
                                "text-muted")}>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cn(
                    "bg-[#15171B] w-full",
                    "rounded-md p-5"
                )}>
                    <h3 className="text-2xl text-muted font-rajdhani font-medium mb-3">Clothing</h3>
                    <div className="w-full grid grid-cols-8 gap-x-1 gap-y-1">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div key={index} className={cn(
                                "w-full h-16",
                                "rounded-md flex items-center justify-center",
                                "bg-[#434343] border border-[#434343]",
                                "text-muted")}>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="col-span-3 h-96 flex flex-col gap-5">
                <div className="bg-[#15171B] rounded-md w-full p-5 text-muted">
                    <h5 className="font-semibold font-rajdhani uppercase">Server</h5>
                    <h3 className="text-xl font-semibold font-rajdhani">Vanilla - EU Main</h3>
                    <hr className="border-muted my-5 opacity-50" />
                    <h5 className="font-semibold font-rajdhani uppercase">Kit</h5>
                    <h3 className="text-xl font-semibold font-rajdhani">Immortal</h3>
                </div>

                {invItems.length > 0 ? <div className="bg-[#15171B] rounded-md w-full max-h-[26rem] h-full">
                    <ScrollArea className="w-full h-full py-3 px-5">
                        {invItems.map((item, index) => (
                            <ItemConfig key={index} index={index} invItem={item} setAmount={setItemAmount} />
                        ))}
                    </ScrollArea>
                </div> : null}
                <div className="bg-[#15171B] rounded-md w-full p-5">
                    <Subtotal invItems={invItems} />
                </div>
            </div>
        </>
    )
}