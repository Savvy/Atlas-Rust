import { useCartStore } from "@/store/useCartStore"
import { Button } from "../ui/button"
import Icon from "@mdi/react"
import { mdiCartOutline } from "@mdi/js"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import useFromStore from "@/hooks/use-from-store"
import { useMemo } from "react"
import Locales from "@/data/locales";
import Link from "next/link";

export default function CartNav() {

    const currency = useFromStore(useCartStore, (state) => state.currency);
    const updateCurrency = useCartStore((state) => state.updateCurrency);
    const totalItems = useFromStore(useCartStore, (state) => state.totalItems);
    const totalPrice = useFromStore(useCartStore, (state) => state.totalPrice);

    const formatter = useMemo(() => {
        if (!currency) return undefined;
        return new Intl.NumberFormat
            (currency?.locale, { style: 'currency', currency: currency?.currency });
    }, [currency]);

    const changeCurrency = (value: string) => {
        const newLocale = Locales[value as keyof typeof Locales];
        if (!newLocale || !updateCurrency) {
            return;
        }
        updateCurrency(newLocale);
    }
    return (
        <>
            <Select onValueChange={changeCurrency}>
                <SelectTrigger className="w-[90px] bg-[#434343] border-transparent focus:outline-none focus:shadow-none">
                    <SelectValue placeholder={`${currency?.symbol} ${currency?.currency}`} className="text-sm font-medium" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {!!Locales && Object.entries(Locales).map((entry) => (
                            <SelectItem
                                value={entry[1].locale}
                                key={entry[1].locale}
                                className="font-medium"
                                defaultChecked={true}

                            >
                                {entry[1].symbol} {entry[1].currency}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Link href={'/store/checkout'}>
                <Button variant={'default'}>
                    <Icon path={mdiCartOutline} size={0.8} className="mr-1" />
                    {totalItems} items for {!!formatter ? formatter.format(totalPrice || 0) : '$ 0.00'}
                </Button>
            </Link>
        </>
    )
} ``