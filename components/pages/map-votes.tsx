'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import Icon from "@mdi/react";
import { mdiInformationOutline } from "@mdi/js"
import { useEffect, useMemo, useState } from "react";
import MapOption from "./map-option";

export default function MapVotes({ user, vote }: any) {

    const options = useMemo(() => JSON.parse(vote.mapOptions) || [], [vote]);

    useEffect(() => {
        console.log(vote);
    }, [vote]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant={'outline'}
                    className="border border-input/10 bg-transparent w-full"
                >
                    <Icon path={mdiInformationOutline} size={1} className="mr-1" />
                    View Vote
                </Button>
            </DialogTrigger>
            <DialogContent className="border-input/10 bg-background-dark max-w-5xl">
                <DialogHeader className="items-center text-center">
                    <DialogTitle>What map would you like next wipe?</DialogTitle>
                    <DialogDescription className="text-center">
                        Remembering, before saving the edition, review all<br />changed data.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 py-4 w-full">
                    {/* {Array.from({ length: 6 }, (_, i) => { }).map((_, index) => ( */}
                    {options.map((option: any, index: number) => (
                        <MapOption
                            user={user}
                            key={index}
                            vote={vote}
                            option={option}
                            index={index}
                        />
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    )
}