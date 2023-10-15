"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

export default function ShippingForm({ form }: any) {

    return (
        <>
            <div className="flex gap-5">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem className="flex-1 relative">
                            <FormLabel className="text-[#8F9199] text-xs absolute -top-1 left-2 bg-[#15171B] px-2 py-1">First Name</FormLabel>
                            <FormControl>
                                <Input className="border-[#8F9099] bg-transparent" {...field} />
                            </FormControl>
                            {/* <FormDescription>
                                    This is your public display name.
                                </FormDescription> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem className="flex-1 relative">
                            <FormLabel className="text-[#8F9199] text-xs absolute -top-1 left-2 bg-[#15171B] px-2 py-1">Last Name</FormLabel>
                            <FormControl>
                                <Input className="border-[#8F9099] bg-transparent" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div className="flex flex-col gap-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="flex-1 relative">
                            <FormLabel className="text-[#8F9199] text-xs absolute -top-1 left-2 bg-[#15171B] px-2 py-1">Email Address</FormLabel>
                            <FormControl>
                                <Input className="border-[#8F9099] bg-transparent" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="streetAddress"
                    render={({ field }) => (
                        <FormItem className="flex-1 relative">
                            <FormLabel className="text-[#8F9199] text-xs absolute -top-1 left-2 bg-[#15171B] px-2 py-1">Street Address</FormLabel>
                            <FormControl>
                                <Input className="border-[#8F9099] bg-transparent" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div className="flex gap-5">
                <FormField
                    control={form.control}
                    name="stateProvince"
                    render={({ field }) => (
                        <FormItem className="flex-1 relative">
                            <FormLabel className="text-[#8F9199] text-xs absolute -top-1 left-2 bg-[#15171B] px-2 py-1">State/Province</FormLabel>
                            <FormControl>
                                <Input className="border-[#8F9099] bg-transparent" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem className="flex-1 relative">
                            <FormLabel className="text-[#8F9199] text-xs absolute -top-1 left-2 bg-[#15171B] px-2 py-1">City</FormLabel>
                            <FormControl>
                                <Input className="border-[#8F9099] bg-transparent" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div className="flex gap-5">
                <FormField
                    control={form.control}
                    name="zipPostal"
                    render={({ field }) => (
                        <FormItem className="flex-1 relative">
                            <FormLabel className="text-[#8F9199] text-xs absolute -top-1 left-2 bg-[#15171B] px-2 py-1">Zip/Postal Code</FormLabel>
                            <FormControl>
                                <Input className="border-[#8F9099] bg-transparent" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem className="flex-1 relative">
                            <FormLabel className="text-[#8F9199] text-xs absolute -top-1 left-2 bg-[#15171B] px-2 py-1">Phone</FormLabel>
                            <FormControl>
                                <Input className="border-[#8F9099] bg-transparent" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </>
    )
}