import clsx from "clsx";
import { Button } from "../ui/button";
import Atlas from '../icons/atlas.svg';
import Image from "next/image";
import { mdiTwitter, mdiYoutube, mdiInstagram, mdiArrowUp, mdiAccountOutline } from '@mdi/js';
import Icon from "@mdi/react";

export default function Footer() {
    return (
        <div className={clsx(
            "bg-secondary w-full py-6",
        )}>
            <div className="container">
                <div className="flex items-center justify-between">
                    <Image
                        src={'/atlas.svg'}
                        width={100}
                        height={100}
                        className="h-8 w-auto"
                        alt="Atlas Logo"
                    />
                    <div className="flex gap-3">
                        <a href="/" className={clsx(
                            "bg-secondary-accent hover:bg-secondary-accent-foreground",
                            "p-3 rounded-full",
                            "transition-colors duration-300 ease-in-out"
                        )}>
                            <Icon path={mdiTwitter}
                                size={0.8}
                                color="white"
                            />
                        </a>
                        <a href="/" className={clsx(
                            "bg-secondary-accent hover:bg-secondary-accent-foreground",
                            "p-3 rounded-full",
                            "transition-colors duration-300 ease-in-out"
                        )}>
                            <Icon path={mdiYoutube}
                                size={0.8}
                                color="white"
                            />
                        </a>
                        <a href="/" className={clsx(
                            "bg-secondary-accent hover:bg-secondary-accent-foreground",
                            "p-3 rounded-full",
                            "transition-colors duration-300 ease-in-out"
                        )}>
                            <Icon path={mdiInstagram}
                                size={0.8}
                                color="white"
                            />
                        </a>
                        <a href="/" className={clsx(
                            "bg-secondary-accent hover:bg-secondary-accent-foreground",
                            "p-3 rounded-full",
                            "transition-colors duration-300 ease-in-out"
                        )}>
                            <Icon path={mdiInstagram}
                                size={0.8}
                                color="white"
                            />
                        </a>
                    </div>
                    <Button
                        size={"default"}
                        className="bg-secondary-accent hover:bg-secondary-accent-foreground"
                    >
                        <Icon path={mdiAccountOutline}
                            size={0.8}
                            color="white"
                            className="mr-1"
                        />
                        Login
                    </Button>
                </div>
                <hr className="my-5 border-[#212121]" />
                <div className="flex items-center justify-between uppercase font-rajdhani font-[700]">
                    <div className="opacity-60">Atlas Rust - All Rights Reserved.</div>
                    <a href="#" className="flex items-center gap-2">
                        <div className="bg-secondary-accent hover:bg-secondary-accent-foreground p-3 rounded-full">
                            <Icon path={mdiArrowUp}
                                size={0.6}
                                color="white"
                            />
                        </div>
                        <span className="opacity-60">Back To The Top</span>
                    </a>
                </div>
            </div>
        </div>
    )
}