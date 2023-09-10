'use client';

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";

export default function Miscellaneous() {
    const [color, setColor] = useState("#561ecb");
    return (
        <div className="w-full grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-5 justify-between"> {/* left side */}
                <div className="flex flex-col gap-2">
                    <Label htmlFor="terms" className="font-rajdhani text-muted text-lg">Kit Cooldown</Label>
                    <Slider
                        defaultValue={[1]}
                        max={4}
                        step={1}
                        className={cn("w-full")}
                    />
                    <div className="flex justify-between font-rajdhani text-muted font-semibold">
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
                        defaultValue={[1]}
                        max={4}
                        step={1}
                        className={cn("w-full")}
                    />
                    <div className="flex justify-between font-rajdhani text-muted font-semibold">
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
                        defaultValue={[1]}
                        max={4}
                        step={1}
                        className={cn("w-full")}
                    />
                    <div className="flex justify-between font-rajdhani text-muted font-semibold">
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
                        defaultValue={[1]}
                        max={4}
                        step={1}
                        className={cn("w-full")}
                    />
                    <div className="flex justify-between font-rajdhani text-muted font-semibold">
                        <span>Blue</span>
                        <span>Red</span>
                        <span>Yellow</span>
                        <span>Pink</span>
                        <span>Custom</span>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-between"> {/* right side */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between space-x-2">
                        <label
                            htmlFor="autoUpgrade"
                            className="font-rajdhani text-muted text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            HQM Auto Upgrade
                        </label>
                        <Checkbox id="autoUpgrade" />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                        <label
                            htmlFor="skipQueue"
                            className="font-rajdhani text-muted text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Skip Queue
                        </label>
                        <Checkbox id="skipQueue" />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                        <label
                            htmlFor="skinBox"
                            className="font-rajdhani text-muted text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Skinbox
                        </label>
                        <Checkbox id="skinBox" />
                    </div>
                </div>
                <div className="w-full mt-5">
                    <HexColorPicker
                        color={color}
                        onChange={setColor}
                        style={{
                            width: '100%',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}