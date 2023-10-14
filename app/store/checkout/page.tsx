"use client";

import Icon from "@mdi/react";
import { mdiMenuLeft } from "@mdi/js";
import CheckoutForm from "./checkout-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Servers() {

    const { back } = useRouter();

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
            <section className="container md:-mt-60 relative z-10 space-y-8 mb-10">
                <div className="block font-rajdhani">
                    <div onClick={() => back()} className={cn(
                        "w-fit select-none cursor-pointer flex items-center gap-2",
                        "text-[#8F9199] opacity-75 hover:opacity-100",
                        "transition-opacity duration-300 ease-in-out"
                    )}>
                        <div className="border border-[#8F919940]">
                            <Icon
                                path={mdiMenuLeft}
                                size={1.3}
                                color="#8F9199"
                                className=""
                            />
                        </div>
                        <span className="text-xl font-normal">Back</span>
                    </div>
                </div>
                <CheckoutForm />
            </section>
        </main>
    );
}
