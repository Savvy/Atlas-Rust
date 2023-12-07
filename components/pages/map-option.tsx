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
import { useEffect, useState } from "react";
import useMapInfo from "@/hooks/use-map-info";
import { submitVote } from "@/actions/maps";
import { useToast } from "../ui/use-toast";
import { signIn } from "next-auth/react";

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
            <DialogContent className="border-input/10 bg-background-dark max-w-xl">
                <DialogHeader className="items-center text-center">
                    <DialogTitle>Map Option #01</DialogTitle>
                </DialogHeader>
                <div className="flex w-full">
                    <Image
                        src={data?.data?.imageIconUrl ?? "/images/servers/map-vote.png"}
                        width={663}
                        height={394}
                        alt=""
                        className="rounded"
                    />
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

