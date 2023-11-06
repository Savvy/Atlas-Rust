"use client";

import Category from "./category";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import storeItems from "@/data/packages";
import useServersQuery from "@/hooks/use-servers-query";
import { useEffect, useMemo, useState } from "react";

export default function HomePage() {
    const { data, isSuccess, isError, error } = useServersQuery();

    const [searchQuery, setSearchQuery] = useState<string>("");
    const [server, setServer] = useState<string>();

    const packages = useMemo(() => {
        return !server || server === 'overall' ? storeItems :
            storeItems.filter((store) => (server && server === store.title))
    }, [server])
    
    return (
        <>
            <header className="relative bg-hero bg-primary bg-opacity-70 pt-28 bg-no-repeat bg-cover bg-center overflow-hidden font-rajdhani">
                <div className="container">
                    <div className="relative z-10 flex items-center flex-col gap-4 text-center pt-24 pb-48">
                        <div className="w-full justify-start items-center flex flex-row gap-6">
                            <Input
                                className={cn("w-1/4 border-transparent")}
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(event) => setSearchQuery(event.target.value)}
                            />
                            <Select onValueChange={setServer}>
                                <SelectTrigger className="w-[180px] border-transparent bg-primary">
                                    <SelectValue placeholder="Select Server" />
                                </SelectTrigger>
                                <SelectContent>
                                    {isSuccess && data.map((server: any) => (
                                        <SelectItem key={server.server} value={server.server}>{server.server}</SelectItem>
                                    ))}
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
                {packages.map((store, index) => (
                    <Category title={store.title} key={index} packages={store.packages} searchQuery={searchQuery} />
                ))}
            </section>
        </>
    )
}