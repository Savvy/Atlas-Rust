import { cn } from "@/lib/utils";

import Image from 'next/image';
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import Subtotal from "./subtotal";

import Edit from "./edit";
import { useState } from "react";
import EditContainer from "./edit-container";
import { Item } from "@/types";

export default function Servers() {
    return (
        <main className="w-full">
            <header className="relative bg-hero bg-primary bg-opacity-70 pt-28 bg-no-repeat bg-cover bg-center overflow-hidden font-rajdhani">
                <div className="container">
                    <div className="relative z-10 flex items-center flex-col gap-4 text-center pt-24 pb-48">
                    </div>
                    <div className="bg-grids bg-cover bg-center absolute left-0 top-28 h-full w-full z-[3]"></div>
                </div>
                <div style={{
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    position: "absolute",
                    opacity: 0.8,
                    zIndex: 1,
                    background:
                        "radial-gradient(68.42% 68.38% at 68.40% 30.68%, rgba(2, 2, 3, 0) 0%, #020203 71%)",
                }}
                />
            </header>
            <section className="container md:-mt-48 relative z-10 mb-60">
                <div className={cn("w-full grid grid-cols-12 grid-rows-1 gap-4 mb-24")}>
                    <EditContainer>
                        <Edit />
                    </EditContainer>
                    <div className="col-span-3 h-96 flex flex-col gap-5">
                        <div className="bg-[#15171B] rounded-md w-full p-5 text-muted">
                            <h5 className="font-semibold font-rajdhani uppercase">Server</h5>
                            <h3 className="text-xl font-semibold font-rajdhani">Vanilla - EU Main</h3>
                            <hr className="border-muted my-5 opacity-50" />
                            <h5 className="font-semibold font-rajdhani uppercase">Kit</h5>
                            <h3 className="text-xl font-semibold font-rajdhani">Immortal</h3>
                        </div>

                        <div className="bg-[#15171B] rounded-md w-full max-h-[26rem] h-full">
                            <ScrollArea className="w-full h-full py-3 px-5">
                                {Array.from({ length: 14 }).map((_, index) => (
                                    <div key={index} className="w-full text-muted py-2 font-rajdhani font-medium">
                                        <div className="flex items-center justify-between w-full mb-2">
                                            <div className="flex gap-2 flex-row items-center">
                                                <Image
                                                    src={'/images/store/items/timber.png'}
                                                    width={30}
                                                    height={30}
                                                    alt="Purchase Timber"
                                                />
                                                <span className="">Wood | 10,000</span>
                                            </div>
                                            <span>$0.35 / 1,000</span>
                                        </div>
                                        <div className="">
                                            <Slider
                                                defaultValue={[500]}
                                                max={1000}
                                                step={1}
                                                className={cn("w-full")}
                                            />
                                            <div className="flex justify-between font-rajdhani text-muted font-semibold mt-2">
                                                <span>Min</span>
                                                <span>Max</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </ScrollArea>
                        </div>
                        <div className="bg-[#15171B] rounded-md w-full p-5">
                            <Subtotal />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
