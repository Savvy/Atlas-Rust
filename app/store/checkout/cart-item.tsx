import { items } from "@/data/items";
import { InvItem } from "@/types";
import { useMemo } from "react";

export default function CartItem({ invItem, invItems, formatter }: { invItem: InvItem, invItems: InvItem[], formatter: any }) {
    const currentAmount = useMemo(() => invItems.reduce((val, item) =>
        (item && item.item === invItem.item) ? val + item.amount : val, 0), [invItems, invItem]);

    const itemInfo = useMemo(() => items.find((item) => item.id === invItem.item), [invItem]);

    const pricing = useMemo(() => {
        if (!itemInfo) return 0
        let newPrice = undefined;
        const search = itemInfo.pricing.find((pricing) => (currentAmount >= pricing.min && currentAmount <= pricing.max));
        if (search) newPrice = search.price
        if (newPrice === undefined) {
            newPrice = itemInfo.defaultPricing
        }
        return newPrice;
    }, [itemInfo, currentAmount])


    return itemInfo ? (
        <div>
            <h5 className='w-full flex justify-between text-[#8F9199] font-semibold'>
                <span>{itemInfo.name}: {(+currentAmount).toLocaleString()}</span>
                <span>{formatter?.format(currentAmount * pricing)}</span>
            </h5>
        </div>
    ) : null
}