import { cn } from "@/lib/utils";

import Edit from "./edit";
import EditContainer from "./edit-container";

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
            <section className="container md:-mt-60 relative z-10 mb-60">
                <div className={cn("w-full grid grid-cols-12 gap-4 mb-24 auto-rows-[910px]")}>
                    <EditContainer>
                        <Edit />
                    </EditContainer>
                </div>
            </section>
        </main>
    );
}
