import XIcon from "@/components/icons/xicon";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

import type { DragSourceMonitor } from 'react-dnd'
import { useDrag } from 'react-dnd'

export default function DraggableItem({ tag }: any) {

    const [forbidDrag, setForbidDrag] = useState(false)
    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: 'item',
            item: tag,
            canDrag: true,
            collect: (monitor: DragSourceMonitor) => ({
                isDragging: !!monitor.isDragging(),
            }),
        }))

    return (
        <div
            className="flex flex-col justify-start items-center gap-1 select-none"
            key={tag.id.toString()}
            ref={drag}
        >
            <div className={cn(
                "w-full h-20",
                "rounded-md flex items-center justify-center",
                "bg-transparent border border-[#434343]",
                "text-muted")}>
                {tag.image
                    ? <Image
                        src={`/images/store/items/${tag.image}`}
                        width={48}
                        height={45}
                        alt={tag.name}
                    />
                    : <XIcon />
                }
            </div>
            <span className="text-sm opacity-75 font-rajdhani">{tag.name}</span>
        </div>
    )
}