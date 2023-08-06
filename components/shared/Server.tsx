"use client";

import { Button } from "../ui/button";
import Icon from '@mdi/react';
import { mdiInformationOutline, mdiPlayCircleOutline, mdiCartOutline } from '@mdi/js';
import { Progress } from "../ui/progress";
import { useEffect, useState } from "react";
import clsx from "clsx";
import useAtlasStore, { Server } from "@/lib/store";

export default function Server({ serverid, region, shopUrl }: Server) {

    const { servers, setServers } = useAtlasStore();

    const [server, setServer] = useState<Server>();

    useEffect(() => {
        if (!servers[serverid]) {
            fetch(`https://api.battlemetrics.com/servers/${serverid}`)
                .then((res) => res.json())
                .then(({ data }) => {
                    const serversObj = {
                        ...servers
                    }

                    const newObj = {
                        serverid: serverid,
                        region: region,
                        shopUrl: shopUrl,
                        data: data.attributes
                    }

                    serversObj[serverid] = newObj
                    
                    setServers(serversObj)
                    setServer(newObj);
                })
        } else {
            setServer(servers[serverid]);
        }
    }, [serverid]);

    return (
        <div className="rounded">
            <div className="bg-[#15171B] h-60 w-full">
            </div>
            <div className="bg-dark-gray p-3">
                <div className="font-rajdhani">
                    <div className="flex justify-between items-center gap-5">
                        <div className="font-semibold text-lg text-ellipsis whitespace-nowrap overflow-hidden">{!!server?.data ? server.data.name : 'Loading...'}</div>
                        <div className="flex-grow flex-shrink-0 uppercase text-sm flex justify-center items-center gap-1">
                            <div className={clsx(
                                "relative h-2 w-2 rounded-full",
                                { 'bg-success': region.toLowerCase() === 'na' },
                                { 'bg-europe': region.toLowerCase() === 'eu' },
                                { 'bg-australia': region.toLowerCase() === 'au' }
                            )}>
                                <span className={clsx(
                                    "animate-ping absolute grid place-items-center h-full w-full rounded-full opacity-75",
                                    { 'bg-success': region.toLowerCase() === 'na' },
                                    { 'bg-europe': region.toLowerCase() === 'eu' },
                                    { 'bg-australia': region.toLowerCase() === 'au' }
                                )}></span>
                            </div>
                            Server {region.toUpperCase()}
                        </div>
                    </div>
                    <div className="relative w-full my-6">
                        <Progress value={90} className="h-7 rounded-md" />
                        <div className="absolute top-0 flex items-center justify-center h-full w-full">{!!server?.data ? `${server.data.players} / ${server.data.maxPlayers} Players` : 'Loading...'}</div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 uppercase font-poppins">
                    <a
                        className={clsx(
                            "bg-transparent flex-grow inline-flex items-center justify-center",
                            "rounded-md text-sm font-medium ring-offset-background transition-colors",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                            "focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                            "border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                        )}
                        href={!!server?.data ? `steam://connect/${server.data.address}:${server.data.port}` : '#'}
                    >
                        <Icon path={mdiPlayCircleOutline} size={1} className="mr-1" />
                        Connect
                    </a>
                    <a
                        className={clsx(
                            "bg-transparent flex-grow inline-flex items-center justify-center",
                            "rounded-md text-sm font-medium ring-offset-background transition-colors",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                            "focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                            "border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                        )}
                        target="_blank"
                        href={!!server?.data ? shopUrl : '#'}
                    >
                        <Icon path={mdiCartOutline} size={1} className="mr-1" />
                        Shop
                    </a>
                    <Button
                        variant={'outline'}
                        className="bg-transparent"
                    ><Icon path={mdiInformationOutline} size={1} /></Button>
                </div>
            </div>
        </div>
    )
}