import { cn } from '@/lib/utils'
import Icon from '@mdi/react'
import { mdiCartOutline, mdiLoading } from '@mdi/js'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Package as PackageType } from '@/types'
import { useMemo, useState } from 'react'
import useFromStore from '@/hooks/useFromStore'
import { useCartStore } from '@/store/useCartStore'

export default function Package({ content }: { content: PackageType }) {

    const [isLoading, setLoading] = useState<boolean>(false);
    const currency = useFromStore(useCartStore, (state) => state.currency);

    const addToCart = useCartStore((state) => state.addToCart);

    const formatter = useMemo(() => {
        if (!currency) return undefined;
        return new Intl.NumberFormat
            (currency?.locale, { style: 'currency', currency: currency?.currency });
    }, [currency]);

    const addItemToCart = () => {
        setLoading(true);
        addToCart(content);
        setLoading(false);
    }

    return (
        <div className='group bg-dark-gray min-h-48 w-full rounded-md overflow-hidden'>
            <div className="bg-secondary w-full">
                <Image
                    src={`/images/store/${content.image}`}
                    height={476}
                    width={380}
                    alt='Eternal Kit Rank'
                    className='group-hover:scale-105 transition-transform duration-300 ease-in-out'
                />
            </div>
            <div className="p-3">
                <div className="flex justify-between mb-5">
                    <div className="text-base font-semibold">{content.name}</div>
                    <div className="text-primary uppercase">{formatter?.format(content.price)} {currency?.currency}</div>
                </div>
                {content.editable && <div className="flex mb-3 w-full">
                    <Button
                        variant={'outline'}
                        className={cn('bg-transparent flex-grow')}
                    >
                        Edit Package
                    </Button>
                </div>}
                <div className="flex justify-between gap-3">
                    <Button
                        variant={'outline'}
                        className={cn('bg-transparent')}
                        onClick={addItemToCart}
                    >
                        {isLoading
                            ? <Icon path={mdiLoading} size={0.8} className="mr-1 animate-spin" />
                            : <Icon path={mdiCartOutline} size={0.8} className="mr-1" />
                        }
                    </Button>
                    <Button
                        variant={'outline'}
                        className={cn('bg-transparent flex-grow')}
                    >
                        Buy Now
                    </Button>
                    {/* <a
                                            className={cn(
                                                "bg-transparent flex-grow inline-flex items-center justify-center",
                                                "rounded-md text-sm font-medium ring-offset-background transition-colors",
                                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                                "focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                                                "border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                                            )}
                                            target="_blank"
                                            href={'/'}
                                        >
                                            Buy Now
                                        </a> */}
                </div>
            </div>
        </div>
    )
}