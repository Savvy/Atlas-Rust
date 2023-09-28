import XIcon from "@/components/icons/xicon";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

import type { DragSourceMonitor } from 'react-dnd'
import { DragPreviewImage, useDrag } from 'react-dnd'

export default function DraggableItem({ item }: any) {

    const [forbidDrag, setForbidDrag] = useState(false)
    const [{ isDragging }, drag, preview] = useDrag(
        () => ({
            type: 'item',
            item: item,
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
                className="flex flex-col justify-start items-center gap-1 select-none"
                ref={drag}
            >
                <div className={cn(
                    "w-full h-16",
                    "rounded-md flex items-center justify-center",
                    "bg-transparent border border-[#434343]",
                    "text-muted")}>
                    {item.image
                        ? <Image
                            src={`/images/store/items/${item.image}`}
                            width={42}
                            height={39}
                            alt={item.name}
                        />
                        : <XIcon />
                    }
                </div>
                <span className="text-sm opacity-75 font-rajdhani">{item.name}</span>
            </div>
        </>
    )
}