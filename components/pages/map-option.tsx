"use client";

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Icon from "@mdi/react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { mdiCancel, mdiCheckCircleOutline, mdiInformationOutline, mdiLoading } from "@mdi/js"
import Image from "next/image"
import { useEffect, useMemo, useState } from "react";
import useMapInfo from "@/hooks/use-map-info";
import { submitVote } from "@/actions/maps";
import { useToast } from "../ui/use-toast";
import { signIn } from "next-auth/react";
import { ScrollArea } from "../ui/scroll-area";

export default function MapOption({ user, vote, option, index }: any) {
    const { data, isSuccess, isError, error, refetch } = useMapInfo(option);

    const { toast } = useToast()

    const [isSubmitting, setSubmitting] = useState<boolean>(false);

    const submitSelection = () => {
        setSubmitting(true);
        submitVote(user.id, vote.voteId, index).then(() => {
            setSubmitting(false);
            toast({
                title: "Vote Submitted",
                description: `You have successfully voted for map option #${index + 1}`,
                className: 'border-primary/10',
            })
        })
    }

    useEffect(() => {
        console.log(vote)
    }, [vote])

    return (
        <Card className="w-full bg-[#0E0E0E4D] border-0 overflow-hidden relative group">
            <CardHeader className="p-0">
                <Image
                    src={data?.data?.imageIconUrl ?? "/images/servers/eu-main.png"} /* "/images/servers/eu-main.png" */
                    width={424}
                    height={268}
                    alt="Eu Servers"
                    className="w-full h-full"
                />
            </CardHeader>
            <CardContent className={cn(
                "absolute p-0 px-3 py-1 rounded-br bg-background-dark top-0 flex justify-between items-center",
                "group-hover:left-0 -left-40 transition-all duration-300 ease-in-out opacity-75"
            )}>
                <h1 className="text-lg font-semibold font-rajdhani text-primary-foreground">Map Option #{index + 1}</h1>
            </CardContent>
            {vote.endDate < new Date()
                ?
                <CardFooter className="p-3 gap-3 flex justify-between flex-col md:flex-row text-primary-foreground font-poppins">
                    <ExpandedMap data={data} submitSelection={submitSelection} isSubmitting={isSubmitting} isLoggedIn={user !== undefined && user !== null} />
                </CardFooter>
                :
                <CardFooter className="p-3 gap-3 flex justify-between flex-col md:flex-row text-primary-foreground font-poppins">
                    {!user ?
                        <Button
                            variant={'outline'}
                            className="border border-input/10 bg-transparent w-full"
                            onClick={() => signIn("steam")}
                        >
                            Login
                        </Button>
                        :
                        <Button
                            variant={'outline'}
                            className="border border-input/10 bg-transparent w-full"
                            onClick={() => submitSelection()}
                            disabled={isSubmitting}
                        >
                            {isSubmitting
                                ?
                                <Icon path={mdiLoading} size={1} className="mr-1 animate-spin" />
                                :
                                <>
                                    <Icon path={mdiCheckCircleOutline} size={1} className="mr-1" />
                                    Map Vote
                                </>
                            }
                        </Button>
                    }
                    <ExpandedMap
                        data={data}
                        endDate={vote.endDate}
                        submitSelection={submitSelection}
                        isSubmitting={isSubmitting}
                        isLoggedIn={user !== undefined && user !== null}
                    />
                </CardFooter>
            }
        </Card>
    )
}

function ExpandedMap({ data, submitSelection, isSubmitting, isLoggedIn, endDate }: any) {
    const [isOpen, setOpen] = useState<boolean>(false);

    const largeMon = useMemo(() => {
        return data?.data.monuments.filter((mon: any) => mon.type.toLowerCase().includes("large"))
    }, [data]);
    const smallMon = useMemo(() => {
        return data?.data.monuments.filter((mon: any) => mon.type.toLowerCase().includes("small"))
    }, [data]);
    const tinyMon = useMemo(() => {
        return data?.data.monuments.filter((mon: any) => !mon.type.toLowerCase().includes("large") && !mon.type.toLowerCase().includes("small"))
    }, [data]);

    const caves = useMemo(() => {
        return data?.data.monuments.filter((mon: any) => mon.type.toLowerCase().includes("cave"))
    }, [data]);

    const icebergs = useMemo(() => {
        return data?.data.monuments.filter((mon: any) => mon.type.toLowerCase().includes("iceberg"))
    }, [data]);

    const safezones = useMemo(() => {
        return data?.data.monuments.filter((mon: any) => (
            mon.type.toLowerCase().includes("ranch") ||
            mon.type.toLowerCase().includes("barn") ||
            mon.type.toLowerCase().includes("fishing village") ||
            mon.type.toLowerCase().includes("outpost")
        ))
    }, [data]);

    return (
        <Dialog open={isOpen} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant={'outline'}
                    className="border border-input/10 bg-transparent w-full"
                >
                    <Icon path={mdiInformationOutline} size={1} className="mr-1" />
                    Expand
                </Button>
            </DialogTrigger>
            <DialogContent className="border-input/10 bg-background-dark max-w-4xl">
                <DialogHeader className="items-center text-center">
                    <DialogTitle>Map Option #01</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 w-full">
                    <Image
                        src={data?.data?.imageIconUrl ?? "/images/servers/map-vote.png"}
                        width={663}
                        height={394}
                        alt=""
                        className="rounded"
                    />
                    <ScrollArea className="max-h-[415px]">
                        <div className="space-y-3">
                            <div className="">
                                <h3 className="text-lg font-semibold mb-2">Map Information</h3>
                                <div className="space-x-1">
                                    <span>Seed:</span>
                                    <span className="font-medium">{data?.data.seed}</span>
                                </div>
                                <div className="space-x-1">
                                    <span>Size:</span>
                                    <span className="font-medium">{data?.data.size}</span>
                                </div>
                            </div>

                            <div className="">
                                <h3 className="text-lg font-semibold">Biome Percentages</h3>
                                <div className="space-x-1">
                                    <span>Snow Biome:</span>
                                    <span className="font-medium">{data?.data.biomePercentages.s.toFixed(2)}%</span>
                                </div>
                                <div className="space-x-1">
                                    <span>Desert Biome:</span>
                                    <span className="font-medium">{data?.data.biomePercentages.d.toFixed(2)}%</span>
                                </div>
                                <div className="space-x-1">
                                    <span>Forest Biome:</span>
                                    <span className="font-medium">{data?.data.biomePercentages.f.toFixed(2)}%</span>
                                </div>
                                <div className="space-x-1">
                                    <span>Tundra Biome:</span>
                                    <span className="font-medium">{data?.data.biomePercentages.t.toFixed(2)}%</span>
                                </div>
                                <div className="space-x-1">
                                    <span>Land Percentage:</span>
                                    <span className="font-medium">{data?.data.landPercentageOfMap}%</span>
                                </div>
                            </div>

                            <div className="">
                                <h3 className="text-lg font-semibold">Monuments</h3>
                                <div className="space-x-1">
                                    <span>Total:</span>
                                    <span className="font-medium">{data?.data.totalMonuments}</span>
                                </div>
                                <div className="space-x-1">
                                    <span>Large Monuments:</span>
                                    <span className="font-medium">{largeMon?.length ?? 0}</span>
                                </div>
                                <div className="space-x-1">
                                    <span>Small Monuments:</span>
                                    <span className="font-medium">{smallMon?.length ?? 0}</span>
                                </div>
                                <div className="space-x-1">
                                    <span>Tiny Monument:s</span>
                                    <span className="font-medium">{tinyMon?.length ?? 0}</span>
                                </div>


                                <div className="space-x-1">
                                    <span>Safezones:</span>
                                    <span className="font-medium">{safezones?.length ?? 0}</span>
                                </div>


                                <div className="space-x-1">
                                    <span>Islands:</span>
                                    <span className="font-medium">{data?.data.islands}</span>
                                </div>
                                <div className="space-x-1">
                                    <span>Caves:</span>
                                    <span className="font-medium">{caves?.length ?? 0}</span>
                                </div>
                                <div className="space-x-1">
                                    <span>Rivers:</span>
                                    <span className="font-medium">{data?.data.rivers}</span>
                                </div>
                                <div className="space-x-1">
                                    <span>Mountains:</span>
                                    <span className="font-medium">{data?.data.mountains}</span>
                                </div>
                                <div className="space-x-1">
                                    <span>Icebergs:</span>
                                    <span className="font-medium">{icebergs?.length ?? 0}</span>
                                </div>
                                <div className="space-x-1">
                                    <span>Ice Lakes:</span>
                                    <span className="font-medium">{data?.data.iceLakes}</span>
                                </div>
                            </div>
                        </div>
                    </ScrollArea>
                </div>
                {endDate < new Date() ?
                    <DialogFooter>
                        <Button
                            variant={'outline'}
                            className="border border-input/10 bg-transparent w-full"
                            onClick={() => setOpen(false)}
                        >
                            <Icon path={mdiCancel} size={1} className="mr-1" />
                            Cancel
                        </Button>
                    </DialogFooter>
                    :
                    <DialogFooter>
                        {!isLoggedIn ?
                            <Button
                                variant={'outline'}
                                className="border border-input/10 bg-transparent w-full"
                                onClick={() => signIn("steam")}
                            >
                                Login
                            </Button>
                            :
                            <Button
                                variant={'outline'}
                                className="border border-input/10 bg-transparent w-full"
                                onClick={() => submitSelection()}
                                disabled={isSubmitting}
                            >
                                {isSubmitting
                                    ?
                                    <Icon path={mdiLoading} size={1} className="mr-1 animate-spin" />
                                    :
                                    <>
                                        <Icon path={mdiCheckCircleOutline} size={1} className="mr-1" />
                                        Map Vote
                                    </>
                                }
                            </Button>
                        }
                        <Button
                            variant={'outline'}
                            className="border border-input/10 bg-transparent w-full"
                            onClick={() => setOpen(false)}
                        >
                            <Icon path={mdiCancel} size={1} className="mr-1" />
                            Cancel
                        </Button>
                    </DialogFooter>}
            </DialogContent>
        </Dialog>
    )
}

