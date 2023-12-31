"use client";

import { cn } from "@/lib/utils";

import Edit from "./edit";
import EditContainer from "./edit-container";
import { useEffect, useMemo } from "react";
import { editPackage } from "@/data/items";
import storeItems from "@/data/packages";
import { InvItem, Item, Package } from "@/types";

export default function Page(props: any) {

    const findPackageById = (id: string): Package | undefined => {
        for (let index = 0; index < storeItems.length; index++) {
            const { packages } = storeItems[index];
            for (let index = 0; index < packages.length; index++) {
                const element = packages[index];
                if (element.id.toLowerCase() === id.toLowerCase()) {
                    return element;
                }
            }
        }
        return undefined;
    }

    const defaultItems = useMemo(() => {
        const invItems = Array.from({ length: (editPackage.maxInventorySlots) });
        const slug = props.params.slug;
        let packageItem = findPackageById(slug);

        if (packageItem === undefined) return invItems;

        for (let index = 0; index < packageItem.items.length; index++) {
            const element = packageItem.items[index];
            if (element === undefined || element === null) continue;
            invItems[index] = element;
        }

        return invItems;
    }, [props.params]);

    /* const defaultInvAmount = useMemo(() => findPackageById(props.params.slug)?.invAmount || {}, [props.params]); */

    return (
        <main className="w-full">
            <header className="relative bg-hero bg-primary bg-opacity-70 pt-28 bg-no-repeat bg-cover bg-center overflow-hidden font-rajdhani">
                <div className="container">
                    <div className="relative z-10 flex items-center flex-col gap-4 text-center pt-24 pb-48">
                    </div>
                    <div className="bg-grids bg-cover bg-center absolute left-0 top-28 h-full w-full z-[3]"></div>
                </div>
                <div style={{
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    position: "absolute",
                    opacity: 0.8,
                    zIndex: 1,
                    background:
                        "radial-gradient(68.42% 68.38% at 68.40% 30.68%, rgba(2, 2, 3, 0) 0%, #020203 71%)",
                }}
                />
            </header>
            <section className="container md:-mt-60 relative z-10 mb-60">
                <div className={cn("w-full grid grid-cols-12 gap-4 mb-24 auto-rows-[910px]")}>
                    <EditContainer>
                        <Edit
                            packageContent={findPackageById(props.params.slug) as Package}
                            defaultItems={defaultItems as InvItem[]}
                            /* defaultInvAmount={defaultInvAmount} */
                        />
                    </EditContainer>
                </div>
            </section>
        </main>
    );
}
