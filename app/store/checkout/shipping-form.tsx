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
                            <FormItem className="flex-1">
                                <FormLabel className="text-[#8F9199]">First Name</FormLabel>
                                <FormControl>
                                    <Input className="border-[#8F9099] bg-transparent" placeholder="First Name" {...field} />
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
                            <FormItem className="flex-1">
                                <FormLabel className="text-[#8F9199]">Last Name</FormLabel>
                                <FormControl>
                                    <Input className="border-[#8F9099] bg-transparent" placeholder="Last Name" {...field} />
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
                            <FormItem className="flex-1">
                                <FormLabel className="text-[#8F9199]">Email Address</FormLabel>
                                <FormControl>
                                    <Input className="border-[#8F9099] bg-transparent" placeholder="Email Address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="streetAddress"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel className="text-[#8F9199]">Street Address</FormLabel>
                                <FormControl>
                                    <Input className="border-[#8F9099] bg-transparent" placeholder="Street Address" {...field} />
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
                            <FormItem className="flex-1">
                                <FormLabel className="text-[#8F9199]">State/Province</FormLabel>
                                <FormControl>
                                    <Input className="border-[#8F9099] bg-transparent" placeholder="State/Province" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel className="text-[#8F9199]">City</FormLabel>
                                <FormControl>
                                    <Input className="border-[#8F9099] bg-transparent" placeholder="City" {...field} />
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
                            <FormItem className="flex-1">
                                <FormLabel className="text-[#8F9199]">Zip/Postal Code</FormLabel>
                                <FormControl>
                                    <Input className="border-[#8F9099] bg-transparent" placeholder="Zip/Postal Code" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel className="text-[#8F9199]">Phone</FormLabel>
                                <FormControl>
                                    <Input className="border-[#8F9099] bg-transparent" placeholder="Phone" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </>
    )
}