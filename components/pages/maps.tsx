"use client";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "../ui/input";
import { useEffect, useMemo, useState } from "react";
import { Vote } from "../shared/vote";

import MAP_DATA from '@/data/server-maps';
import checkVotes from "@/actions/maps";
import useMapVotes from "@/hooks/get-map-votes";


export default function Maps({ user }: any) {
    const [region, setRegion] = useState<string>("all");

    const { data, isSuccess, isError, error, refetch } = useMapVotes();

    useEffect(() => {
        checkVotes();
        refetch();
    }, []);


    /*  useEffect(() => {
         console.log(data);
     }, [data]);
  */
    const activeVotes = useMemo(() => {
        return data ?
            data?.filter((vote) => (region === "all" || region === vote.region) && vote.startDate <= new Date() && vote.endDate > new Date())
            : []
    }, [data, region]);

    const inactiveVotes = useMemo(() => {
        return data ?
            data?.filter((vote) => (region === "all" || region === vote.region) && vote.endDate < new Date())
            : []
    }, [data, region]);

    return (
        <div className="bg-background-dark w-full rounded p-4">
            <div className="flex flex-row items-center justify-between mb-8">
                <h1 className="text-muted text-2xl font-rajdhani font-semibold">Maps Vote</h1>
                <div className="flex flex-row items-center gap-4">
                    <Select value={region} onValueChange={setRegion}>
                        <SelectTrigger className="w-[180px] border-input/10 bg-transparent">
                            <SelectValue placeholder="Select A Region" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select Region</SelectLabel>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="na">NA</SelectItem>
                                <SelectItem value="eu">EU</SelectItem>
                                <SelectItem value="sea">SEA</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Input className="w-[230px] border-input/10 bg-transparent placeholder:text-primary-foreground/30" placeholder="Search Server" />
                </div>
            </div>
            <div className="space-y-10">
                <div className="">
                    <h2 className="text-muted text-xl font-rajdhani font-semibold mb-4">Active Map Votes</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {activeVotes.map((vote) => (
                            <Vote
                                key={vote.voteId}
                                vote={vote}
                                user={user}
                            />
                        ))}
                    </div>
                </div>
                <div className="">
                    <h2 className="text-muted text-xl font-rajdhani font-semibold mb-4">Inactive Map Votes</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {inactiveVotes.map((vote) => (
                            <Vote
                                key={vote.voteId}
                                vote={vote}
                                user={user}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}