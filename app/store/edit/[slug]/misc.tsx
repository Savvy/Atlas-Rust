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

const kitLabels = [
    '12h',
    '10h',
    '8h',
    '6h',
    '4h',
]

const tpLabels = [
    '25S',
    '20S',
    '15S',
    '10S',
    '5S',
]

const homesLabels = [
    '3',
    '5',
    '10',
    '15',
    '20',
]

const colorLabels = [
    'Blue',
    'Red',
    'Yellow',
    'Pink',
    'Custom',
]

export default function Miscellaneous(props: MiscProps) {

    const THUMB_SIZE = 12;

    function calcStepMarkOffset(index: number, maxIndex: number) {
        const percent = convertValueToPercentage(index, 0, maxIndex);
        const thumbInBoundsOffset = getThumbInBoundsOffset(THUMB_SIZE, percent, 1);
        return `calc(${percent}% + ${thumbInBoundsOffset}px)`;
    }

    const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max)

    function convertValueToPercentage(value: number, min: number, max: number) {
        const maxSteps = max - min;
        const percentPerStep = 100 / maxSteps;
        const percentage = percentPerStep * (value - min);
        return clamp(percentage, 0, 100);
    }

    function getThumbInBoundsOffset(width: number, left: number, direction: number) {
        const halfWidth = width / 2;
        const halfPercent = 50;
        const offset = linearScale([0, halfPercent], [0, halfWidth]);
        return (halfWidth - offset(left) * direction) * direction;
    }

    function linearScale(input: readonly [number, number], output: readonly [number, number]) {
        return (value: number) => {
            if (input[0] === input[1] || output[0] === output[1]) return output[0];
            const ratio = (output[1] - output[0]) / (input[1] - input[0]);
            return output[0] + ratio * (value - input[0]);
        };
    }

    return (
        <div className="w-full grid grid-cols-12 gap-6">
            <div className="col-span-6 flex flex-col gap-2 justify-between"> {/* left side */}
                <div className="relative flex flex-col gap-2">
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
                    <div className="mb-8 flex justify-between font-rajdhani text-muted font-semibold select-none">
                        {kitLabels.map((label: string, index) => (
                            <div
                                key={index}
                                className={cn("absolute", "-translate-x-1/2")}
                                style={{ ["left"]: calcStepMarkOffset(index, kitLabels.length - 1) }}
                            >{label}</div>
                        ))}
                    </div>
                </div>
                <div className="relative flex flex-col gap-2">
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
                    <div className="mb-8 flex justify-between font-rajdhani text-muted font-semibold select-none">
                        {tpLabels.map((label: string, index) => (
                            <div
                                key={index}
                                className={cn("absolute", "-translate-x-1/2")}
                                style={{ ["left"]: calcStepMarkOffset(index, tpLabels.length - 1) }}
                            >{label}</div>
                        ))}
                    </div>
                </div>
                <div className="relative flex flex-col gap-2">
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
                    <div className="mb-8 flex justify-between font-rajdhani text-muted font-semibold select-none">
                        {homesLabels.map((label: string, index) => (
                            <div
                                key={index}
                                className={cn("absolute", "-translate-x-1/2")}
                                style={{ ["left"]: calcStepMarkOffset(index, homesLabels.length - 1) }}
                            >{label}</div>
                        ))}
                    </div>
                </div>
                <div className="relative flex flex-col gap-2">
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
                    <div className="mb-8 flex justify-between font-rajdhani text-muted font-semibold select-none">
                        {colorLabels.map((label: string, index) => (
                            <div
                                key={index}
                                className={cn("absolute", "-translate-x-1/2")}
                                style={{ ["left"]: calcStepMarkOffset(index, colorLabels.length - 1) }}
                            >{label}</div>
                        ))}
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