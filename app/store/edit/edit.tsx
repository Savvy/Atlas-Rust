'use client';

import { cn } from "@/lib/utils";
import Miscellaneous from "./misc";
import ItemsList from "./items-list";

import { categories, items as initialItems } from "@/data/items"

import { useDrop } from 'react-dnd'

import { useEffect, useState } from "react";
import { Item } from "@/types";
import Image from "next/image";
import XIcon from "@/components/icons/xicon";

export default function Edit() {

    const [invItems, setInvItems] = useState<Item[]>([]);
    const [items, setItems] = useState<Item[]>([...initialItems]);

    useEffect(() => {
        console.log(invItems)
    }, [invItems])

    useEffect(() => {
        console.log(items)
    }, [items])

    const addItemToInv = (item: Item) => {
        console.log(item);
        setInvItems((prev) => {
            const newArray = [...prev, item];
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

    return (
        <>
            <div className={cn("bg-[#15171B] col-span-4", "rounded-md max-h-[28rem]")}>
                <ItemsList categories={categories} items={items} invItems={invItems} />
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
                        {!!invItems && invItems.map((item) => (
                            <div
                                className="flex flex-col justify-start items-center gap-1 select-none"
                                key={item.id}
                            >
                                <div className={cn(
                                    "w-full h-20",
                                    "rounded-md flex items-center justify-center",
                                    "bg-transparent border border-[#434343]",
                                    "text-muted")}>
                                    {item.image
                                        ? <Image
                                            src={`/images/store/items/${item.image}`}
                                            width={48}
                                            height={45}
                                            alt={item.name}
                                        />
                                        : <XIcon />
                                    }
                                </div>
                                <span className="text-sm opacity-75 font-rajdhani">{item.name}</span>
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
        </>
    )
}