

import { cn } from "@/lib/utils";
import Miscellaneous from "./misc";
import ItemsList from "./items-list";


export default function Servers() {

    return (
        <main className="w-full">
            <header className="relative bg-hero bg-primary bg-opacity-70 pt-28 bg-no-repeat bg-cover bg-center overflow-hidden font-rajdhani">
                <div className="container">
                    <div className="relative z-10 flex items-center flex-col gap-4 text-center pt-24 pb-48">
                    </div>
                    <div className="bg-grids bg-cover bg-center absolute left-0 top-28 h-full w-full z-[3]"></div>
                </div>
                <div
                    style={{
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
                <div
                    className={cn(
                        "w-full grid grid-cols-6 grid-rows-1 gap-4 mb-24"
                        // "w-full flex flex-nowrap justify-start gap-4 mb-24"
                    )}>
                    <div className={cn(
                        "bg-[#15171B] col-span-2",
                        "rounded-md max-h-[28rem]"
                    )}>
                        <ItemsList />
                    </div>
                    <div className="col-span-3 flex flex-col gap-5 w-full">
                        <div className={cn(
                            "bg-[#15171B] w-full",
                            "rounded-md p-5"
                        )}>
                            <h3 className="text-2xl text-muted font-rajdhani font-medium mb-3">Miscellaneous</h3>
                            <Miscellaneous />
                        </div>
                        <div className={cn(
                            "bg-[#15171B] w-full",
                            "rounded-md p-5"
                        )}>
                            <h3>Inventory - Rust</h3>
                        </div>
                        <div className={cn(
                            "bg-[#15171B] w-full",
                            "rounded-md p-5"
                        )}>
                            <h3>Clothing</h3>
                        </div>
                    </div>
                    <div className="col-span-1 h-96">
                        <div className="bg-[#15171B] rounded-md w-full p-5 text-muted">
                            <h5 className="font-semibold font-rajdhani uppercase">Server</h5>
                            <h3 className="text-xl font-semibold font-rajdhani">Vanilla - EU Main</h3>
                            <hr className="border-muted my-5 opacity-50" />
                            <h5 className="font-semibold font-rajdhani uppercase">Kit</h5>
                            <h3 className="text-xl font-semibold font-rajdhani">Immortal</h3>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
