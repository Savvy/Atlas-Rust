import XIcon from "@/components/icons/xicon";
import { cn } from "@/lib/utils";
import { Item } from "@/types";
import Image from "next/image";
import { DragPreviewImage, DragSourceMonitor, useDrag, useDrop } from "react-dnd";

type DropCellProps = {
    invItem: Item,
    addItemToInv: (invItem: Item, index: number, currentSlot: number | undefined) => void,
    index: number,
    removeItem: (item: Item, slot: number) => void,
    type: string
    mtTop?: boolean
}

export default function DropCell({ invItem, addItemToInv, index, removeItem, type, mtTop }: DropCellProps) {

    const [collectedProps, drop] = useDrop(() => ({
        accept: type,
        drop(item: { currentSlot: number, invItem: Item }, monitor) {
            console.log(item);
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
    }))

    return (
        <div className={cn(
            { "mt-2": mtTop },
            { "w-full h-full": type.toLowerCase().startsWith("clothing-") },
            { "w-20 h-20": !type.toLowerCase().startsWith("clothing-") },
        )}
            ref={drop}
        >
            {invItem ?
                <div
                    className={cn(
                        "relative flex flex-col justify-start items-center select-none group",
                        "w-full h-full",
                    )}
                    ref={drag}
                >
                    <DragPreviewImage
                        connect={preview}
                        src={`/images/store/items/${invItem.image}`}
                    />
                    <div className={cn(
                        "w-full h-full",
                        "text-muted relative",
                        "rounded-md flex flex-col items-center justify-center",
                        "bg-transparent border border-[#434343]",
                        "group-hover:scale-105 transition-transform duration-75 ease-in-out"
                    )}>
                        {invItem.image
                            ? <Image
                                src={`/images/store/items/${invItem.image}`}
                                width={38}
                                height={35}
                                alt={invItem.name}
                            />
                            : <XIcon />
                        }
                        <div
                            className="text-white font-semibold cursor-pointer opacity-20 hover:opacity-50 text-xs absolute top-1 right-1.5"
                            onClick={() => {
                                removeItem(invItem, index)
                            }}
                        >
                            X
                        </div>
                        <div className="w-[95%] whitespace-nowrap overflow-hidden overflow-ellipsis text-center">
                            <span className="text-sm font-semibold font-rajdhani">{invItem.name}</span>
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