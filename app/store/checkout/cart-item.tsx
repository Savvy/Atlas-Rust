import { InvItem } from "@/types";
import { useMemo } from "react";

export default function CartItem({ invItem, invItems, formatter }: { invItem: InvItem, invItems: InvItem[], formatter: any }) {
    const currentAmount = useMemo(() => invItems.reduce((val, item) =>
        (item && item.item.id === invItem.item.id) ? val + item.amount : val, 0), [invItems, invItem]);
    return (
        <div>
            <h5 className='w-full flex justify-between text-[#8F9199] font-semibold'>
                <span>{invItem.item.name}: {(+currentAmount).toLocaleString()}</span>
                <span>{formatter?.format(currentAmount * invItem?.item.pricePerStep)}</span>
            </h5>
        </div>
    )
}