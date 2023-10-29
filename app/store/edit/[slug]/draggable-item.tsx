import XIcon from "@/components/icons/xicon";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

import type { DragSourceMonitor } from 'react-dnd'
import { DragPreviewImage, useDrag } from 'react-dnd'

export default function DraggableItem({ item, type }: any) {
    const [{ isDragging }, drag, preview] = useDrag(
        () => ({
            type: type,
            item: { currentSlot: undefined, invItem: item },
            canDrag: true,
            collect: (monitor: DragSourceMonitor) => ({
                isDragging: !!monitor.isDragging(),
            }),
        }))

    return (
        <>
            <DragPreviewImage
                connect={preview}
                src={`/images/store/items/${item.image}`}
            />
            <div
                className="flex flex-col justify-center items-center gap-1 select-none aspect-square"
                ref={drag}
            >
                <div className={cn(
                    "w-16 h-16",
                    "rounded-md flex items-center justify-center",
                    "bg-transparent border border-[#434343]",
                    "text-muted")}>
                    {item.image
                        ? <Image
                            src={`/images/store/items/${item.image}`}
                            width={32}
                            height={29}
                            alt={item.name}
                        />
                        : <XIcon />
                    }
                </div>
                <div className="w-16 whitespace-nowrap overflow-hidden overflow-ellipsis text-center">
                    <span className="text-sm opacity-75 font-rajdhani">{item.name}</span>
                </div>
            </div>
        </>
    )
}