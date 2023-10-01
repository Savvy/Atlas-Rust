import XIcon from "@/components/icons/xicon";
import { cn } from "@/lib/utils";
import { Item } from "@/types";
import Image from "next/image";
import { useDrop } from "react-dnd";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

type DropCellProps = {
    invItem: Item,
    addItemToInv: (invItem: Item, index: number) => void,
    index: number,
}

export default function DropCell({ invItem, addItemToInv, index }: DropCellProps) {

    const [, drop] = useDrop(() => ({
        accept: invItem?.type ?? 'item',
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
                <div className={cn(
                    "w-full h-16 text-muted relative",
                    "rounded-md flex flex-col items-center justify-center",
                    "bg-transparent border border-[#434343]",
                    ""
                )}>
                    {invItem.image
                        ? <Image
                            src={`/images/store/items/${invItem.image}`}
                            width={38}
                            height={35}
                            alt={invItem.name}
                        />
                        : <XIcon />
                    }{/* opacity-30  */}
                    <div className="text-white font-semibold cursor-pointer opacity-20 hover:opacity-50 text-xs absolute top-1 right-1.5">
                        {/* &#x2715; */}
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
                    "w-full h-16",
                    "rounded-md flex items-center justify-center",
                    "bg-[#434343] border border-[#434343]",
                    "text-muted")}>
            </div>
    )
}