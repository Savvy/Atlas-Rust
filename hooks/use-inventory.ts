import { editPackage, misc } from "@/data/items";
import { InvItem, Item, Package } from "@/types";
import { useCallback, useEffect, useMemo, useState } from "react";

type InventoryProps = {
    defaultItems: InvItem[],
    packageContent: Package
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
                let amountToAdd = amount;
                for (let index = 0; index < newArray.length; index++) {
                    const invItem = newArray[index];
                    if (!invItem || !invItem.item || item.id !== invItem.item.id) continue;
                    amountToAdd -= invItem.amount;
                }
                for (let index = 0; index < newArray.length; index++) {
                    const invItem = newArray[index];
                    if (!invItem || !invItem.item || item.id !== invItem.item.id) continue;
                    if (invItem.amount === item.maxPerStack) continue;
                    let amountCanAdd = (item.maxPerStack - invItem.amount);
                    if (amountCanAdd > amountToAdd) {
                        amountCanAdd = amountToAdd;
                    }
                    invItem.amount = invItem.amount + amountCanAdd;
                    amountToAdd -= amountCanAdd;
                }
                const slotsToAdd = itemsShouldHave - itemsInInv;
                if (slotsAvailable > 0) {
                    for (let x = 0; x < (slotsAvailable > slotsToAdd ? slotsToAdd : slotsAvailable); x++) {
                        innerLoop:
                        for (let i = 0; i < INVENTORY_SLOTS; i++) {
                            if (newArray[i] === undefined) {
                                let am = 0;
                                if (amountToAdd > item.maxPerStack) {
                                    am = item.maxPerStack;
                                    amountToAdd -= item.maxPerStack;
                                } else {
                                    am = amountToAdd
                                    amountToAdd = 0;
                                }
                                newArray[i] = {
                                    amount: am,
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
                const amountShouldBe = amount;
                let adjustedAmount = currentAmount - amountShouldBe;
                for (let index = newArray.length - 1; index >= 0; index--) {
                    if (adjustedAmount === 0) break;
                    const invItem = newArray[index];
                    if (!invItem || invItem.item.id !== item.id) continue;
                    if (invItem.amount - adjustedAmount <= 0) {
                        adjustedAmount -= invItem.amount
                        newArray[index] = undefined!;
                        continue;
                    }
                    invItem.amount = invItem.amount - adjustedAmount;
                    adjustedAmount = 0;
                }
            }
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