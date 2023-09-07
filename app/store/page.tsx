
import Map from "@/components/shared/AtlasMap";

import Packages from "./packages";
import Image from "next/image";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Servers() {
    return (
        <main className="w-full">
            <header className="relative bg-hero bg-primary bg-opacity-70 pt-28 bg-no-repeat bg-cover bg-center overflow-hidden font-rajdhani">
                <div className="container">
                    <div className="relative z-10 flex items-center flex-col gap-4 text-center pt-24 pb-48">
                        <Image
                            src={'/images/create-kit-banner.png'}
                            height={170}
                            width={1312}
                            alt="Create your own kit"
                            className="mb-5 w-full"
                        />
                        <div className="w-full justify-start items-center flex flex-row gap-6">
                            <Input
                                className={cn("w-1/4 border-transparent")}
                                placeholder="Search"
                            />
                            <Select>
                                <SelectTrigger className="w-[180px] border-transparent bg-primary">
                                    <SelectValue placeholder="Select Server" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
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
            <section className="container md:-mt-24 relative z-10">
                    <Packages title="Atlas Package - NA 5X" />
                    <Packages title="Atlas Skins" />
            </section>
            <Map />
        </main>
    );
}
