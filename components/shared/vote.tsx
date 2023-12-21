import { buttonVariants } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Icon from "@mdi/react"
import { mdiPlayCircleOutline } from "@mdi/js"
import Image from "next/image"
import MapVotes from "../pages/map-votes"
import { formatDistance } from "date-fns"

export function Vote({ user, vote }: any) {
    return (
        <Card className="w-full bg-[#0E0E0E4D] border-0 overflow-hidden">
            <CardHeader className="p-0">
                <Image
                    src={vote.image}
                    width={424}
                    height={268}
                    alt="Eu Servers"
                    className="w-full h-full"
                />
            </CardHeader>
            <CardContent className="p-3 flex justify-between items-center">
                <h1 className="text-lg font-semibold font-rajdhani text-primary-foreground">{vote.server}</h1>
                <div className="uppercase text-sm flex justify-center items-center gap-1 text-primary-foreground">
                    <div className={cn(
                        "relative h-2 w-2 rounded-full",
                        { 'bg-success': vote.region.toLowerCase() === 'na' },
                        { 'bg-europe': vote.region.toLowerCase() === 'eu' },
                        { 'bg-australia': vote.region.toLowerCase() === 'au' }
                    )}>
                        <span className={cn(
                            "animate-ping absolute grid place-items-center h-full w-full rounded-full opacity-75",
                            { 'bg-success': vote.region.toLowerCase() === 'na' },
                            { 'bg-europe': vote.region.toLowerCase() === 'eu' },
                            { 'bg-australia': vote.region.toLowerCase() === 'au' }
                        )}></span>
                    </div>
                    Server {vote.region.toUpperCase()}
                </div>
            </CardContent>
            <CardFooter className="p-3 gap-3 flex justify-between flex-col md:flex-row uppercase text-primary-foreground font-poppins">
                <a
                    className={cn(
                        buttonVariants({ variant: "outline" }),
                        "border border-input/10 bg-transparent w-full"
                    )}
                    href={'#'}
                >
                    <Icon path={mdiPlayCircleOutline} size={1} className="mr-1" />
                    {formatDistance(new Date(vote.endDate), new Date(), {
                        addSuffix: true
                    })}
                </a>
                <MapVotes user={user} vote={vote} />
            </CardFooter>
        </Card>
    )
}