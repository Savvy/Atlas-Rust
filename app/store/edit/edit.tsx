'use client';

import { cn } from "@/lib/utils";
import Miscellaneous from "./misc";
import ItemsList from "./items-list";

import { categories, editPackage, items as initialItems } from "@/data/items"

import { useEffect, useMemo, useState } from "react";
import { Item } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import Subtotal from "./subtotal";
import ItemConfig from "./item-config";
import { useToast } from "@/components/ui/use-toast";
import DropCell from "./drop-cell";
import { useCartStore } from "@/store/useCartStore";

export default function Edit() {

    const { toast } = useToast()

    const [price, setPrice] = useState<number>(0);

    // Inventory items
    const [invItems, setInvItems] = useState<Item[]>(Array.from({ length: (editPackage.maxInventorySlots) }));
    const [invAmount, setInvAmount] = useState<any>({});

    const [clothingItems, setClothingItems] = useState<Item[]>(Array.from({ length: (editPackage.clothingSlots.length) }));

    // const [invAmount, setInvAmount] = useState<any>({});

    // All items to be sold, when added to the invItems array,
    // they are removed from this one
    const [items, setItems] = useState<Item[]>([...initialItems]);

    // Slider misc values
    const [kitCooldown, setKitCooldown] = useState<number>(0);
    const [teleportCooldown, setTeleportCooldown] = useState<number>(0);
    const [amountOfHomes, setAmountOfHomes] = useState<number>(0);
    const [coloredName, setColoredName] = useState<number>(0);

    // Boolean misc values
    const [autoUpgrade, setAutoUpgrade] = useState<boolean>(false);
    const [skipQueue, setSkipQueue] = useState<boolean>(false);
    const [skinBox, setSkinBox] = useState<boolean>(false);

    // Color hex misc value
    const [colorHex, setColorHex] = useState<string>('#0437b9');

    const addToCart = useCartStore((state) => state.addToCart);

    // this keeps the list of items up to date
    useEffect(() => {
        const newArray = [...initialItems];
        for (let index = 0; index < invItems.length; index++) {
            const element = invItems[index];
            if (element !== undefined) {
                const itIndex = newArray.findIndex((obj) => obj.id === element.id)
                if (itIndex !== -1)
                    newArray.splice(itIndex, 1)
            }
        }
        setItems(newArray)
    }, [invItems]);

    // this ensures that the amount matches the inventory items
    useEffect(() => {
        for (let index = 0; index < invItems.length; index++) {
            const item = invItems[index];
            if (item)
                adjustAmount(item);
        }
    }, [invItems])

    const addItemToInv = (item: Item, index: number) => {
        setInvItems((prev) => {
            const newArray = [...prev];
            newArray[index] = item
            return newArray
        });

        setInvAmount((prev: any) => {

            const newInvAmount = { ...prev };
            newInvAmount[item.id] = {
                amount: item.min
            };

            return newInvAmount
        });
    }

    const addItemToClothing = (item: Item, index: number) => {
        setClothingItems((prev) => {
            const newArray = [...prev];
            newArray[index] = item
            return newArray
        });
    }

    const adjustAmount = (item: Item) => {
        const itemsInInv = invItems.reduce((val, invItem) =>
            (invItem && invItem.id === item.id) ? val + 1 : val, 0);

        const amountInInv = invAmount[item.id].amount;
        const countInInv = Math.ceil(amountInInv / item.maxPerStack);
        if (countInInv === itemsInInv) return;
        if (itemsInInv < countInInv) {
            // We need to adjust the amountInInv because it doesn't match
            const newInvAmount = { ...invAmount };

            newInvAmount[item.id] = {
                amount: itemsInInv * item.maxPerStack
            };
            setInvAmount(newInvAmount);
            return;
        }
    }

    const slotsAvailable = useMemo(() => {
        return invItems.reduce((val, item) => (item === undefined) ? val + 1 : val, 0);
    }, [invItems])

    const setItemAmount = (id: number, amount: number) => {
        const item = getItemById(id);

        if (!item) return;

        const currentAmount = invAmount[id].amount;

        /* if (amount < item.min) return; */

        // This is how many items are currently in the inventory
        const itemsInInv = invItems.reduce((val, item) =>
            (item && item?.id == id) ? val + 1 : val, 0);

        if (amount > currentAmount) {
            const newAmount = Math.ceil(amount / item.maxPerStack)
            if (newAmount > itemsInInv) {

                const amountToAdd = newAmount - itemsInInv;

                // Checks inventory size
                /*  if (slotsAvailable == editPackage.maxInventorySlots || (slotsAvailable - amountToAdd) >= editPackage.maxInventorySlots) {
                     console.log('can not add');
                     return;
                 } */

                setInvItems((prev) => {
                    const newArray = [...prev];
                    for (let x = 0; x < (amountToAdd); x++) {
                        innerLoop:
                        for (let i = 0; i < newArray.length; i++) {
                            if (newArray[i] === undefined) {
                                newArray[i] = { ...item }
                                break innerLoop;
                            }
                        }
                    }
                    return newArray
                });
            }
        } else if (amount < currentAmount) {
            /*  if ((amount - currentAmount) < item.min) {
                 return;
             } */

            const newAmount = Math.ceil(amount / item.maxPerStack)
            const amountToRemove = itemsInInv - newAmount;

            if (amountToRemove > 0) {
                setInvItems((prev) => {
                    const newArray = [...prev];
                    for (let x = 0; x < amountToRemove; x++) {
                        for (let index = newArray.length - 1; index >= 0; index--) {
                            const element = newArray[index];
                            if (element && element.id === id) {
                                newArray[index] = undefined!;
                                break;
                            }
                        }
                    }
                    return newArray
                });
            }
        }

        const newInvAmount = { ...invAmount };

        newInvAmount[id] = {
            amount: amount
        };
        setInvAmount(newInvAmount);
        /*  setInvItems(newArray); */
    }

    const addPackageToCart = () => {
        if (invItems.length < editPackage.minInventoryItems) {
            toast({
                title: "Uh oh! You can't do this yet.",
                description: "You need to add more items to your inventory.",
                className: 'border-primary',
            })
            return;
        }
        console.log(invItems)
        addToCart({
            id: "",
            name: "",

            price: price,
            server: "",
            misc: {
                cooldown: kitCooldown,
                tpCooldown: teleportCooldown,
                homes: amountOfHomes,
                coloredName,
                autoUpgrade,
                skipQueue,
                skinBox,
            },

            items: invItems,
            invAmount: invAmount,
            clothingItems: clothingItems
        })
    }

    const getItemById = (id: number) => {
        return invItems.find((item: Item) => item?.id === id)
    }

    const removeItem = (item: Item, slot: number) => {
        // const amount = invAmount[item.id].amount;
        setInvItems((prev) => {
            const newArray = [...prev];
            newArray[slot] = undefined!;
            return newArray
        });
    }

    const removeItemFromClothing = (item: Item, slot: number) => {
        // const amount = invAmount[item.id].amount;
        setClothingItems((prev) => {
            const newArray = [...prev];
            newArray[slot] = undefined!;
            return newArray
        });
    }
    return (
        <>
            <div className={cn("bg-[#15171B] col-span-4", "rounded-md")}>
                <ItemsList categories={categories} items={items} />
            </div>
            <div className="col-span-5 flex flex-col gap-3 w-full">
                <div className={cn(
                    "bg-[#15171B] w-full",
                    "rounded-md p-5"
                )}>
                    <h3 className="text-xl text-muted font-rajdhani font-medium mb-2">Miscellaneous</h3>
                    <Miscellaneous
                        kitCooldown={kitCooldown}
                        setKitCooldown={setKitCooldown}
                        teleportCooldown={teleportCooldown}
                        setTeleportCooldown={setTeleportCooldown}
                        amountOfHomes={amountOfHomes}
                        setAmountOfHomes={setAmountOfHomes}
                        coloredName={coloredName}
                        setColoredName={setColoredName}
                        autoUpgrade={autoUpgrade}
                        setAutoUpgrade={setAutoUpgrade}
                        skipQueue={skipQueue}
                        setSkipQueue={setSkipQueue}
                        skinBox={skinBox}
                        setSkinBox={setSkinBox}
                        colorHex={colorHex}
                        setColorHex={setColorHex}
                    />
                </div>
                <div className={cn(
                    "bg-[#15171B] w-full",
                    "rounded-md p-5"
                )}>
                    <h3 className="text-xl text-muted font-rajdhani font-medium mb-2">Inventory - Rust</h3>
                    <div className="w-full flex flex-wrap gap-x-1 gap-y-1"> {/* grid grid-cols-3 md:grid-cols-6 */}
                        {Array.from({ length: (editPackage.maxInventorySlots) }).map((_, index) => (
                            <DropCell
                                key={index}
                                invItem={invItems[index]}
                                addItemToInv={addItemToInv}
                                removeItem={removeItem}
                                index={index}
                                type={'item'}
                            />
                        ))}
                    </div>
                </div>
                <div className={cn(
                    "bg-[#15171B] w-full",
                    "rounded-md p-5"
                )}>
                    <h3 className="text-xl text-muted font-rajdhani font-medium mb-2">Clothing</h3>
                    <div className="w-full flex flex-wrap gap-x-1 gap-y-1"> {/* grid grid-cols-8 */}
                        {Array.from({ length: (editPackage.clothingSlots.length) }).map((_, index) => (
                            <div key={index} className="aspect-square w-[11.5%] h-[11.5%]">
                                <DropCell
                                    key={index}
                                    invItem={clothingItems[index]}
                                    addItemToInv={addItemToClothing}
                                    removeItem={removeItemFromClothing}
                                    index={index}
                                    type={editPackage.clothingSlots[index]}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="col-span-3 flex flex-col gap-3">
                <div className="bg-[#15171B] rounded-md w-full p-5 text-muted">
                    <h5 className="font-semibold font-rajdhani uppercase">Server</h5>
                    <h3 className="text-xl font-semibold font-rajdhani">Vanilla - EU Main</h3>
                    <hr className="border-muted my-5 opacity-50" />
                    <h5 className="font-semibold font-rajdhani uppercase">Kit</h5>
                    <h3 className="text-xl font-semibold font-rajdhani">Immortal</h3>
                </div>

                <div className="bg-[#15171B] flex-grow flex flex-col rounded-md w-full">
                    <ScrollArea className="w-full h-[300px] flex-grow py-3 px-5">
                        {Object.keys(invAmount).map((itemId, index) => {
                            const invItem = getItemById(+itemId);
                            return !!!invItem ? null :
                                <ItemConfig
                                    key={index}
                                    invItems={invItems}
                                    invItem={invItem}
                                    itemAmounts={invAmount}
                                    setAmount={setItemAmount}
                                    slotsAvailable={slotsAvailable}
                                />
                        })}
                    </ScrollArea>
                    <div className="p-5">
                        <Subtotal
                            invItems={invItems}
                            invAmount={invAmount}
                            clothingItems={clothingItems}
                            addPackageToCart={addPackageToCart}
                            kitCooldown={kitCooldown}
                            tpCooldown={teleportCooldown}
                            amountOfHomes={amountOfHomes}
                            coloredName={coloredName}
                            autoUpgrade={autoUpgrade}
                            skipQueue={skipQueue}
                            skinBox={skinBox}
                            setPrice={setPrice}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}