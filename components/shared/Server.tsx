import { Button } from "../ui/button";
import Icon from '@mdi/react';
import { mdiInformationOutline, mdiPlayCircleOutline, mdiCartOutline } from '@mdi/js';
import { Progress } from "../ui/progress";

export default function Server() {
    return (
        <div className="rounded">
            <div className="bg-[#15171B] h-60 w-full">

            </div>
            <div className="bg-dark-gray p-3">
                <div className="font-rajdhani">
                    <div className="flex justify-between items-center">
                        <div className="font-semibold text-lg">Atlas Rust | US Main</div>
                        <div className="uppercase text-sm flex justify-center items-center gap-1">
                            <div className="relative h-2 w-2 bg-success rounded-full">
                            <span className="animate-ping absolute grid place-items-center h-full w-full rounded-full bg-success opacity-75"></span>
                            </div>
                            Servers NA
                        </div>
                    </div>
                    <div className="relative w-full my-6">
                        <Progress value={90} className="h-7 rounded-md" />
                        <div className="absolute top-0 flex items-center justify-center h-full w-full">296 / 300 (7) Players</div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 uppercase font-poppins">
                    <Button
                        variant={'outline'}
                        className="bg-transparent flex-grow"
                    >
                        <Icon path={mdiPlayCircleOutline} size={1} className="mr-1" />
                        Connect
                    </Button>
                    <Button
                        variant={'outline'}
                        className="bg-transparent flex-grow"
                    >
                        <Icon path={mdiCartOutline} size={1} className="mr-1" />
                        Shop
                    </Button>
                    <Button
                        variant={'outline'}
                        className="bg-transparent"
                    ><Icon path={mdiInformationOutline} size={1} /></Button>
                </div>
            </div>
        </div>
    )
}