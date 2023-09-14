'use client';

import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import DraggableItem from "./DraggableItem";
import { Item } from "@/types";
import { useMemo } from "react";

type Category = {
    id: number,
    title: string
}

type ItemsListType = {
    categories: Category[],
    items: Item[],
    invItems: Item[]
}

export default function ItemsList({ categories, items, invItems }: ItemsListType) {

    /* const items = useMemo(() => {
        return itemData.items.filter((item) => !invItems.some((invItem) => invItem.id === item.id))
    }, [itemData, invItems]) */

    return (
        <ScrollArea className="w-full h-full rounded-md">
            <div className="py-4 px-5">
                {categories.map((category: Category, index: number) => (
                    <div className={cn({ "py-4": index !== 0 })} key={category.title}>
                        <h3 className="text-2xl text-muted font-medium font-rajdhani mb-4">{category.title}</h3>
                        <div className="grid grid-cols-4 gap-x-2 gap-y-8">
                            {items.filter((item: Item) => item.categoryId === category.id).map((tag: Item, i: number) => (
                                <DraggableItem tag={tag} key={i} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </ScrollArea>
    )
}