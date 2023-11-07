import { editPackage, misc } from "@/data/items";
import { InvItem, Item, Package } from "@/types";
import { useCallback, useEffect, useMemo, useState } from "react";

type InventoryProps = {
    defaultItems: InvItem[],
    packageContent: Package
    /* gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
    length: number;
    pageSize: number; */
}

const INVENTORY_SLOTS = editPackage.maxInventorySlots/*  + editPackage.maxBeltSlots */;

export const useInventory = ({ defaultItems, packageContent }: InventoryProps) => {
    const [invItems, setInvItems] = useState<InvItem[]>(defaultItems);
    const [clothingItems, setClothingItems] = useState<InvItem[]>(Array.from({ length: (editPackage.clothingSlots.length) }));

    // Slider misc values
    const [kitCooldown, setKitCooldown] = useState<number>(packageContent.misc.cooldown);
    const [teleportCooldown, setTeleportCooldown] = useState<number>(packageContent.misc.tpCooldown);
    const [amountOfHomes, setAmountOfHomes] = useState<number>(packageContent.misc.homes);
    const [coloredName, setColoredName] = useState<number>(packageContent.misc.coloredName);

    // Boolean misc values
    const [autoUpgrade, setAutoUpgrade] = useState<boolean>(packageContent.misc.autoUpgrade);
    const [skipQueue, setSkipQueue] = useState<boolean>(packageContent.misc.skipQueue);
    const [skinBox, setSkinBox] = useState<boolean>(packageContent.misc.skinBox);

    // Color hex misc value
    const [colorHex, setColorHex] = useState<string>(packageContent.misc.customColor || "#0437b9");

    /* const totalPages = useMemo<number>(() => {
        return Math.ceil(length / pageSize);
    }, [length, pageSize]); */

    // this ensures that the amount matches the inventory items
    /*  useEffect(() => {
         for (let index = 0; index < invItems.length; index++) {
             const item = invItems[index];
             if (item)
                 adjustAmount(item);
         }
     }, [invItems]) */

    /* const adjustAmount = useCallback((item: Item) => {
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
    }, [invItems]); */

    const addItemToInv = (item: Item, index: number, currentSlot: number | undefined) => {
        setInvItems((prev) => {
            const newArray = [...prev];
            if (currentSlot !== undefined) {
                const newItem = JSON.parse(JSON.stringify(prev[currentSlot]))
                newArray[index] = newItem
                if (prev[index] === undefined) {
                    newArray[currentSlot] = undefined!;
                } else {
                newArray[currentSlot] = JSON.parse(JSON.stringify(prev[index]));
                }
            } else {
                newArray[index] = { item, amount: item.min }
            }
            return newArray
        });

        if (currentSlot !== undefined) {
            return;
        }

        /* setInvAmount((prev: any) => {
            const newInvAmount = { ...prev };
            newInvAmount[item.id] = {
                amount: item.min
            };

            return newInvAmount
        }); */
    }

    const removeItem = (slot: number) => {
        setInvItems((prev) => {
            const newArray = [...prev];
            newArray[slot] = undefined!;
            return newArray
        });
    }

    const setItemAmount = (item: Item, amount: number) => {
        setInvItems((prev) => {
            const newArray = [...prev];

            const itemsInInv = newArray.reduce((val, invItem) =>
                (invItem && invItem.item.id === item.id) ? val + 1 : val, 0);
            const currentAmount = newArray.reduce((val, invItem) =>
                (invItem && invItem.item.id === item.id) ? val + invItem.amount : val, 0);
            const itemsShouldHave = Math.ceil(amount / item.maxPerStack);

            if (amount > currentAmount) { // Here we are adding items
                const amountToAdd = itemsShouldHave - itemsInInv;
                if (slotsAvailable > 0) {
                    for (let x = 0; x < (slotsAvailable > amountToAdd ? amountToAdd : slotsAvailable); x++) {
                        innerLoop:
                        for (let i = 0; i < INVENTORY_SLOTS; i++) {
                            if (newArray[i] === undefined) {
                                newArray[i] = {
                                    amount: amount,
                                    item: {
                                        ...item
                                    }
                                }
                                break innerLoop;
                            }
                        }
                    }
                }
            } else if (amount < currentAmount) { // We are removing items
                const itemsShouldHave = Math.ceil((amount < item.min ? item.min : amount) / item.maxPerStack);
                const amountToRemove = itemsInInv - itemsShouldHave;
                for (let x = 0; x < amountToRemove; x++) {
                    innerLoop:
                    for (let index = newArray.length - 1; index >= 0; index--) {
                        const element = newArray[index];
                        if (element && element.item.id === item.id) {
                            newArray[index] = undefined!;
                            break innerLoop;
                        }
                    }
                }
            }

            // This may not be necessary 
            // if (itemsShouldHave === itemsInInv) {
            let amountToAdd = amount;
            newArray.forEach((invItem: InvItem, index: number) => {
                if (invItem && invItem.item.id === item.id) {
                    invItem.amount = amountToAdd > item.maxPerStack ? item.maxPerStack : amountToAdd
                    amountToAdd -= invItem.amount
                }
            });
            return newArray
        })
    }

    const addItemToClothing = (item: Item, index: number) => {
        setClothingItems((prev) => {
            const newArray = [...prev];
            newArray[index] = { item, amount: item.min }
            return newArray
        });
    }

    const removeItemFromClothing = (slot: number) => {
        // const amount = invAmount[item.id].amount;
        setClothingItems((prev) => {
            const newArray = [...prev];
            newArray[slot] = undefined!;
            return newArray
        });
    }

    const slotsAvailable = useMemo(() => {
        return INVENTORY_SLOTS - invItems.reduce((val, item) => (item === undefined) ? val + 1 : val, 0);
    }, [invItems])

    const totalPrice = useMemo(() => {
        let amount = packageContent.price;
        amount += invItems.reduce((acc, invItem: InvItem) => {
            return !!invItem ? acc + (invItem.amount * invItem.item.pricePerStep) : acc
        }, 0);

        amount += clothingItems.reduce((acc, invItem: InvItem) => {
            return !!invItem ? acc + (invItem.amount * invItem.item.pricePerStep) : acc
        }, 0);

        if (autoUpgrade) {
            amount += misc.autoUpgrade
        }

        if (skipQueue) {
            amount += misc.skipQueue
        }

        if (skinBox) {
            amount += misc.skinBox
        }

        amount += misc.kitCooldown[kitCooldown].price
        amount += misc.tpCooldown[teleportCooldown].price
        amount += misc.amountOfHomes[amountOfHomes].price
        amount += misc.coloredName[coloredName].price
        return amount;
    }, [amountOfHomes, autoUpgrade, clothingItems, coloredName,
        invItems, kitCooldown, skinBox, skipQueue, teleportCooldown]);

    return {
        invItems,
        clothingItems,
        totalPrice,

        kitCooldown,
        teleportCooldown,
        amountOfHomes,
        coloredName,
        autoUpgrade,
        skipQueue,
        skinBox,
        colorHex,

        slotsAvailable,

        addItemToInv,
        removeItem,
        setItemAmount,

        removeItemFromClothing,
        addItemToClothing,

        setKitCooldown,
        setTeleportCooldown,
        setAmountOfHomes,
        setColoredName,
        setColorHex,
        setAutoUpgrade,
        setSkipQueue,
        setSkinBox
    };
};
