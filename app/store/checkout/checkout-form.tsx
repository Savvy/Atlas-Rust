"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";

import ShippingForm from "./shipping-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import CartDetails from "./cart-details";

const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email("Username must be at least 2 characters."),
    streetAddress: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    stateProvince: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    city: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    zipPostal: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    phone: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
});

export default function CheckoutForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        /* defaultValues: {
        }, */
    });
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <div className="grid grid-cols-2 gap-6 w-full">
                    <div className="bg-[#15171B] h-fit rounded-md w-full p-5 space-y-6">
                        <ShippingForm form={form} />
                    </div>
                    <div className="bg-[#15171B] h-fit rounded-md w-full p-5">
                        <CartDetails />
                    </div>
                </div>
            </form>
        </Form>
    )
}