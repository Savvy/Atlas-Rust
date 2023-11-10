import XIcon from "@/components/icons/xicon";
import { abbrNum, cn } from "@/lib/utils";
import { InvItem, Item } from "@/types";
import Image from "next/image";
import { useEffect } from "react";
import { DragPreviewImage, DragSourceMonitor, useDrag, useDrop } from "react-dnd";

type DropCellProps = {
    invItem: InvItem,
    addItemToInv: (invItem: Item, index: number, currentSlot: number | undefined) => void,
    index: number,
    removeItem: (slot: number) => void,
    type: string
    mtTop?: boolean
}

export default function DropCell({ invItem, addItemToInv, index, removeItem, type, mtTop }: DropCellProps) {

    const [collectedProps, drop] = useDrop(() => ({
        accept: type,
        drop(item: { currentSlot: number, invItem: Item }, monitor) {
            addItemToInv(item.invItem, index, item.currentSlot);
            return item
        },
    }));

    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: type,
        item: { currentSlot: index, invItem },
        canDrag: true,
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        end: (item, monitor) => {
            if (!monitor.didDrop()) {
                removeItem(index)
            }
        }
    }))

    return (
        <div className={cn(
            { "mt-2": mtTop },
            { "w-full h-full": type.toLowerCase().startsWith("clothing-") },
            { "w-20 h-20": !type.toLowerCase().startsWith("clothing-") },
        )}
            ref={drop}
        >
            {!!invItem ?
                <div
                    className={cn(
                        "relative flex flex-col justify-start items-center select-none group",
                        "w-full h-full",
                    )}
                    ref={drag}
                >
                    <DragPreviewImage
                        connect={preview}
                        src={`/images/store/items/${invItem.item.image}`}
                    />
                    <div className={cn(
                        "w-full h-full",
                        "text-muted relative",
                        "rounded-md flex flex-col items-center justify-end",
                        "bg-[#434343] border border-[#434343] group-hover:border-primary",
                        "group-hover:scale-105 transition-transform duration-75 ease-in-out"
                    )}>
                        {invItem.item.image
                            ? <Image
                                src={`/images/store/items/${invItem.item.image}`}
                                width={48}
                                height={45}
                                alt={invItem.item.name}
                                /* className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" */
                            />
                            : <XIcon />
                        }
                        <div
                            className="text-white font-semibold cursor-pointer opacity-50 hover:opacity-100 text-xs absolute top-1 right-1.5"
                            onClick={() => {
                                removeItem(index)
                            }}
                        >
                            X
                        </div>
                        <div className={cn(
                            "w-[100%] px-1 whitespace-nowrap overflow-hidden overflow-ellipsis text-center flex justify-between",
                        )}>
                            <span className="text-sm font-semibold font-rajdhani w-16 whitespace-nowrap overflow-hidden overflow-ellipsis text-left">{invItem.item.name}</span>
                            <span className="text-sm font-semibold font-rajdhani">{abbrNum(invItem.amount, 0)}</span>
                        </div>
                    </div>
                </div>
                :
                <div
                    className={cn(
                        "w-full h-full",
                        "rounded-md flex items-center justify-center",
                        "bg-[#434343] border border-[#434343]",
                        "text-muted",
                        "hover:scale-105 transition-transform duration-75 ease-in-out")}>
                    {type.toLowerCase().startsWith("clothing-") ?
                        <Image
                            src={`/images/store/${type}.png`}
                            width={28}
                            height={25}
                            alt={type}
                        />
                        :
                        null
                    }
                </div>
            }
        </div>
    )
}