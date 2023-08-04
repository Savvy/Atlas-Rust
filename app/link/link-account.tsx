'use client';
import { UserProps, getCurrentUser } from "@/lib/session";
import DiscordIcon from "@/components/icons/discord";
import clsx from "clsx";

import SteamIcon from "@/components/icons/steam";
import Icon from "@mdi/react";
import { mdiCheckDecagram } from "@mdi/js";
import { signIn } from "next-auth/react";

export default function LinkAccount({ user }: { user: UserProps | undefined}) {
    return (
        <div className="flex flex-col gap-6">
            {/* Steam Login */}
            <div className={clsx(
                "w-full bg-[#15171B] p-3 rounded-md flex items-center justify-between",
                "cursor-pointer"
            )}
                onClick={() => {
                    if (!!user && user.steamId) {
                        return;
                    }
                    signIn("steam");
                }}
            >
                <div className="flex flex-row gap-6 items-center">
                    <div className="fill-white h-10 w-10">
                        <SteamIcon />
                    </div>
                    <div className="text-xl font-rajdhani">Login via Steam</div>
                </div>
                <div className="bg-[#1D2025] w-10 h-10 rounded-md flex items-center justify-center">
                    {!!user?.steamId && <Icon
                        path={mdiCheckDecagram}
                        size={1}
                        className="text-white/90"
                    />}
                </div>
            </div>
            {/* Discord Login */}
            <div className={clsx(
                "w-full bg-[#15171B] p-3 rounded-md flex items-center justify-between",
                "cursor-pointer"
            )}
            onClick={() => {
                if (!!user && user.steamId) {
                    return;
                }
                signIn("discord");
            }}
            >
                <div className="flex flex-row gap-6 items-center">
                    <div className="fill-white h-10 w-10">
                        <DiscordIcon />
                    </div>
                    <div className="text-xl font-rajdhani">Login via Discord</div>
                </div>
                <div className="bg-[#1D2025] w-10 h-10 rounded-md flex items-center justify-center">
                    {!!user?.discordId && <Icon
                        path={mdiCheckDecagram}
                        size={1}
                        className="text-white/90"
                    />}
                </div>
            </div>
            {/* Join Steam Group */}
            <div className={clsx(
                "w-full bg-[#15171B] p-3 rounded-md flex items-center justify-between",
                "cursor-pointer"
            )}
                onClick={() => {

                }}
            >
                <div className="flex flex-row gap-6 items-center opacity-30">
                    <div className="fill-white h-10 w-10">
                        <SteamIcon />
                    </div>
                    <div className="text-xl font-rajdhani">Join Steam Group</div>
                </div>
                <div className="bg-[#1D2025] w-10 h-10 rounded-md flex items-center justify-center">
                    {/* {!!user?.steamId && <Icon
								path={mdiCheckDecagram}
								size={1}
								className="text-white/90"
							/>} */}
                </div>
            </div>
            {/* Join Discord Server */}
            <div className={clsx(
                "w-full bg-[#15171B] p-3 rounded-md flex items-center justify-between",
                "cursor-pointer"
            )}
                onClick={() => {

                }}
            >
                <div className="flex flex-row gap-6 items-center opacity-30">
                    <div className="fill-white h-10 w-10">
                        <DiscordIcon />
                    </div>
                    <div className="text-xl font-rajdhani">Join Discord Server</div>
                </div>
                <div className="bg-[#1D2025] w-10 h-10 rounded-md flex items-center justify-center">
                    {/* {!!user?.steamId && <Icon
								path={mdiCheckDecagram}
								size={1}
								className="text-white/90"
							/>} */}
                </div>
            </div>
        </div>
    )
}