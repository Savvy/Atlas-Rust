'use client';

import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import DraggableItem from "./draggable-item";
import { Item } from "@/types";

type ItemsListType = {
    categories: string[],
    items: Item[],
    invItems?: Item[]
}

export default function ItemsList({ categories, items }: ItemsListType) {
    return (
        <ScrollArea className="w-full h-full rounded-md">
            <div className="py-4 px-5">
                {categories.map((category: string, index: number) => (
                    <div className={cn({ "py-4": index !== 0 })} key={index}>
                        <h3 className="text-xl text-muted font-medium font-rajdhani mb-2">{category}</h3>
                        <div className="w-full flex flex-wrap gap-x-1 gap-y-2"> {/* grid grid-cols-3 md:grid-cols-5 */}
                            {items.filter((item: Item) => item.category.toLowerCase() === category.toLowerCase()).map((item: Item, i: number) => (
                                <DraggableItem item={item} key={item.id} type={item.type} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </ScrollArea>
    )
}