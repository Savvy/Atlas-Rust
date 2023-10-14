import XIcon from "@/components/icons/xicon";
import { cn } from "@/lib/utils";
import { Item } from "@/types";
import Image from "next/image";
import { useDrop } from "react-dnd";

type DropCellProps = {
    invItem: Item,
    addItemToInv: (invItem: Item, index: number) => void,
    index: number,
    removeItem: (item: Item, slot: number,) => void,
    type: string
}

export default function DropCell({ invItem, addItemToInv, index, removeItem, type }: DropCellProps) {

    const [, drop] = useDrop(() => ({
        accept: type,
        drop(item: Item, monitor) {
            addItemToInv(item, index);
            return item
        },
    }))

    return (
        invItem ?
            <div
                className="relative flex flex-col justify-start items-center select-none group"
                ref={drop}
            >
                <div className={cn(
                    {"w-full h-full": type.toLowerCase().startsWith("clothing-")},
                    {"w-20 h-20": !type.toLowerCase().startsWith("clothing-")},
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
                ref={drop}
                className={cn(
                    {"w-full h-full": type.toLowerCase().startsWith("clothing-")},
                    {"w-20 h-20": !type.toLowerCase().startsWith("clothing-")},
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
    )
}