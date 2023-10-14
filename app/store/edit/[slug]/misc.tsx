'use client';

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";

type MiscProps = {
    kitCooldown: number
    teleportCooldown: number
    amountOfHomes: number
    coloredName: number
    autoUpgrade: boolean
    skipQueue: boolean
    skinBox: boolean
    colorHex: string
    setKitCooldown: (value: number) => void
    setTeleportCooldown: (value: number) => void
    setAmountOfHomes: (value: number) => void
    setColoredName: (value: number) => void
    setAutoUpgrade: (value: boolean) => void
    setSkipQueue: (value: boolean) => void
    setSkinBox: (value: boolean) => void
    setColorHex: (value: string) => void
}

export default function Miscellaneous(props: MiscProps) {
    return (
        <div className="w-full grid grid-cols-12 gap-4">
            <div className="col-span-6 flex flex-col gap-2 justify-between"> {/* left side */}
                <div className="flex flex-col gap-2">
                    <Label htmlFor="terms" className="font-rajdhani text-muted text-lg">Kit Cooldown</Label>
                    <Slider
                        id="kitCooldown"
                        max={4}
                        step={1}
                        className={cn("w-full")}
                        value={[props.kitCooldown]}
                        onValueChange={(values) => {
                            props.setKitCooldown(values[0])
                        }}
                    />
                    <div className="flex justify-between font-rajdhani text-muted font-semibold select-none">
                        <span>12h</span>
                        <span>10h</span>
                        <span>8h</span>
                        <span>6h</span>
                        <span>4h</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="terms" className="font-rajdhani text-muted text-lg">Teleportation Cooldown</Label>
                    <Slider
                        max={4}
                        step={1}
                        className={cn("w-full")}
                        value={[props.teleportCooldown]}
                        onValueChange={(values) => {
                            props.setTeleportCooldown(values[0])
                        }}
                    />
                    <div className="flex justify-between font-rajdhani text-muted font-semibold select-none">
                        <span>25S</span>
                        <span>20S</span>
                        <span>15S</span>
                        <span>10S</span>
                        <span>5S</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="terms" className="font-rajdhani text-muted text-lg">Amount of Homes</Label>
                    <Slider
                        max={4}
                        step={1}
                        className={cn("w-full")}
                        value={[props.amountOfHomes]}
                        onValueChange={(values) => {
                            props.setAmountOfHomes(values[0])
                        }}
                    />
                    <div className="flex justify-between font-rajdhani text-muted font-semibold select-none">
                        <span>3</span>
                        <span>5</span>
                        <span>10</span>
                        <span>15</span>
                        <span>20</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="terms" className="font-rajdhani text-muted text-lg">Colored Name</Label>
                    <Slider
                        max={4}
                        step={1}
                        className={cn("w-full")}
                        value={[props.coloredName]}
                        onValueChange={(values) => {
                            props.setColoredName(values[0])
                        }}
                    />
                    <div className="flex justify-between font-rajdhani text-muted font-semibold select-none">
                        <span>Blue</span>
                        <span>Red</span>
                        <span>Yellow</span>
                        <span>Pink</span>
                        <span>Custom</span>
                    </div>
                </div>
            </div>
            <div className="col-span-6 w-full flex flex-col justify-between"> {/* right side */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between space-x-2">
                        <label
                            htmlFor="autoUpgrade"
                            className="font-rajdhani text-muted text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            HQM Auto Upgrade
                        </label>
                        <Checkbox
                            id="autoUpgrade"
                            checked={props.autoUpgrade}
                            onCheckedChange={(value: boolean) => {
                                props.setAutoUpgrade(value)
                            }}
                        />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                        <label
                            htmlFor="skipQueue"
                            className="font-rajdhani text-muted text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Skip Queue
                        </label>
                        <Checkbox
                            id="skipQueue"
                            checked={props.skipQueue}
                            onCheckedChange={(value: boolean) => {
                                props.setSkipQueue(value)
                            }}
                        />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                        <label
                            htmlFor="skinBox"
                            className="font-rajdhani text-muted text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Skinbox
                        </label>
                        <Checkbox
                            id="skinBox"
                            checked={props.skinBox}
                            onCheckedChange={(value: boolean) => {
                                props.setSkinBox(value)
                            }}
                        />
                    </div>
                </div>
                {props.coloredName >= 4 ? <div className="w-full mt-5">
                    <HexColorPicker
                        color={props.colorHex}
                        onChange={props.setColorHex}
                        style={{
                            width: '100%',
                        }}
                    />
                </div> : null}
            </div>
        </div>
    )
}