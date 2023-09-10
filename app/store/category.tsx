'use client'

import { motion } from 'framer-motion'
import Package from './package'
import { Category } from '@/types'

export default function Category({ title, packages }: Category) {

    // const [packages, setPackages] = useState<any>(Array.from({ length: 14 }, (_, i) => { }))

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
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    packages.map((item: any, i: any) => {
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
                                <Package content={item} />
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}