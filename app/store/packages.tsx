'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Icon from '@mdi/react'
import { mdiCartOutline } from '@mdi/js'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Packages({ title }: { title: string }) {

    const [packages, setPackages] = useState<any>(Array.from({ length: 14 }, (_, i) => { }))

    return (
        <div className='mb-16'>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={{
                    offscreen: {
                        y: 300,
                        opacity: 0.3,
                    },
                    onscreen: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 0.8,
                        }
                    }
                }}
                viewport={{ once: true, amount: 0.12 }}
            >
                <h3 className="text-xl font-medium text-muted mb-5">{title}</h3>
            </motion.div>
            <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-4'>
                {
                    packages.map((_: any, i: any) => {
                        return (
                            <motion.div
                                key={i}
                                initial="offscreen"
                                whileInView="onscreen"
                                variants={{
                                    offscreen: {
                                        y: 300,
                                        opacity: 0.3,
                                    },
                                    onscreen: {
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            type: "spring",
                                            bounce: 0.4,
                                            duration: 0.8,
                                            delay: i % 2 ? 0.2 : 0
                                        }
                                    }
                                }}
                                viewport={{ once: true, amount: 0.12 }}
                            >
                                <div className='group bg-dark-gray min-h-48 w-full rounded-md overflow-hidden'>
                                    <div className="bg-secondary w-full">
                                        <Image
                                            src={'/images/kits/eternalkit.png'}
                                            height={476}
                                            width={380}
                                            alt='Eternal Kit Rank'
                                        className='group-hover:scale-105 transition-transform duration-300 ease-in-out'
                                        />
                                    </div>
                                    <div className="p-3">
                                        <div className="flex justify-between mb-5">
                                            <div className="text-base font-semibold">Eternal | Rank</div>
                                            <div className="text-primary uppercase">2.99 USD</div>
                                        </div>
                                        <div className="flex justify-between gap-3">
                                            <Button
                                                variant={'outline'}
                                                className={cn('bg-transparent')}
                                            >
                                                <Icon path={mdiCartOutline} size={0.8} className="mr-1" />
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
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}