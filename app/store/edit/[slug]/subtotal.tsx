'use client';

import { Button } from "@/components/ui/button";

type SubtotalProps = {
    addPackageToCart: () => void,
    price: string
}

export default function Subtotal(props: SubtotalProps) {


    return (
        <>
            <h5 className="mb-3 font-rajdhani text-lg">Sub Total:</h5>
            <Button
                variant={'default'}
                size={"lg"}
                className={"w-full font-rajdhani text-lg"}
                onClick={props.addPackageToCart}
            >Add To Cart | {props.price}</Button>
        </>
    )
}
