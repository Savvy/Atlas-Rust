import XIcon from "@/components/icons/xicon";
import { cn } from "@/lib/utils";
import { InvItem, Item } from "@/types";
import Image from "next/image";
import { useDrop } from "react-dnd";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

type DropCellProps = {
    invItem: InvItem,
    addItemToInv: (invItem: Item, index: number) => void,
    index: number
}

export default function DropCell({ invItem, addItemToInv, index }: DropCellProps) {

    const [, drop] = useDrop(() => ({
        accept: 'item',
        drop(item: Item, monitor) {
            addItemToInv(item, index);
            return item
        },
    }))

    return (
        invItem ?
            <div
                className="relative flex flex-col justify-start items-center select-none"
                ref={drop}
            >
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className={cn(
                                "w-full h-16 cursor-pointer",
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
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{invItem.item.name}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                {/* <span className="absolute -bottom-[19px] text-sm opacity-75 font-rajdhani">{invItem.item.name}</span> */}
            </div>
            :
            <div
                ref={drop}
                className={cn(
                    "w-full h-16",
                    "rounded-md flex items-center justify-center",
                    "bg-[#434343] border border-[#434343]",
                    "text-muted")}>
            </div>
    )
}