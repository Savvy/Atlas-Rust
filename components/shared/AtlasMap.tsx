'use client'
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Atlas from "@/components/icons/atlas";
import { useState } from "react";

import Locations from "@/data/locations";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import useAtlasStore from "@/lib/store";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Map() {

    const { onlinePlayers } = useAtlasStore();

    return (
        <>
            <section className="hidden md:block container mt-24 py-4">
                <div className="flex flex-col gap-3 justify-center items-center mb-20">
                    <h3 className="text-3xl">The most competitive servers in Rust.</h3>
                    <h5 className="text-xl text-muted">See the most played places.</h5>
                </div>
                <div className="w-full">
                    <AspectRatio ratio={16 / 9} className="relative flex items-center justify-center">
                        <Atlas />
                        {!!Locations && Locations.map((location, index) =>
                            <div
                                className={cn(`absolute`)}
                                style={{
                                    top: location.top,
                                    right: location.right,
                                    bottom: location.bottom,
                                    left: location.left,
                                }}
                                key={index}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className={clsx(
                                                "relative h-2 w-2 rounded-full cursor-pointer",
                                                { 'bg-success': location.region.toLowerCase() === 'na' },
                                                { 'bg-europe': location.region.toLowerCase() === 'eu' },
                                                { 'bg-australia': location.region.toLowerCase() === 'au' }
                                            )}
                                            >
                                                <span className={clsx(
                                                    "animate-ping absolute grid place-items-center h-full w-full rounded-full opacity-75",
                                                    { 'bg-success': location.region.toLowerCase() === 'na' },
                                                    { 'bg-europe': location.region.toLowerCase() === 'eu' },
                                                    { 'bg-australia': location.region.toLowerCase() === 'au' }
                                                )}></span>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent className="bg-background border-background text-white">
                                            <div className="font-bold">{location.region}</div>
                                            <p>Online Players: <strong>{location.onlinePlayers}</strong></p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        )}
                    </AspectRatio>
                </div>
                <div className="mt-10 flex flex-row justify-between">
                    <div className="text-2xl"><span className="font-bold">{onlinePlayers.toLocaleString()}</span> Players Online</div>
                    <div className="flex gap-8">
                        <div className="uppercase text-sm flex justify-center items-center gap-1">
                            <div className="relative h-2 w-2 bg-success rounded-full">
                                <span className="animate-ping absolute grid place-items-center h-full w-full rounded-full bg-success opacity-75"></span>
                            </div>
                            Servers NA
                        </div>
                        <div className="uppercase text-sm flex justify-center items-center gap-1">
                            <div className="relative h-2 w-2 bg-europe rounded-full">
                                <span className="animate-ping absolute grid place-items-center h-full w-full rounded-full bg-europe opacity-75"></span>
                            </div>
                            Servers EU
                        </div>
                        <div className="uppercase text-sm flex justify-center items-center gap-1">
                            <div className="relative h-2 w-2 bg-australia rounded-full">
                                <span className="animate-ping absolute grid place-items-center h-full w-full rounded-full bg-australia opacity-75"></span>
                            </div>
                            Servers AU
                        </div>
                    </div>
                </div>
            </section >
            <section className="container text-center py-4">
                <h5 className="text-lg md:hidden">Map not visible on mobile.</h5>
            </section>
        </>
    )
}