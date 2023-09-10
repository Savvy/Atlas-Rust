import XIcon from "@/components/icons/xicon"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Items } from "@/data/items"
import { cn } from "@/lib/utils"
import Image from 'next/image'

export default function ItemsList() {
    return (
        <ScrollArea className="w-full h-full rounded-md">
            <div className="py-4 px-8">
                {Items.map((item, index) => (
                    <div className={cn({ "py-4": index !== 0 })} key={item.title}>
                        <h3 className="text-2xl text-muted font-semibold font-rajdhani mb-4">{item.title}</h3>
                        <div className="grid grid-cols-4 gap-x-4 gap-y-8">
                            {item.items.map((tag, i) => (
                                <div key={i} className="flex flex-col justify-center items-center gap-1">
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
                                            : <XIcon />}
                                    </div>
                                    <span className="text-sm opacity-75 font-rajdhani">{tag.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
                }
            </div>
        </ScrollArea>
    )
}