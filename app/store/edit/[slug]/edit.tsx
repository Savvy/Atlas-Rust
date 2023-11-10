'use client';

import { cn } from "@/lib/utils";
import Miscellaneous from "./misc";
import ItemsList from "./items-list";

import { categories, editPackage, items as initialItems } from "@/data/items"

import { useMemo } from "react";
import { InvItem, Package } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import Subtotal from "./subtotal";
import ItemConfig from "./item-config";
import { useToast } from "@/components/ui/use-toast";
import DropCell from "./drop-cell";
import { useCartStore } from "@/store/useCartStore";
import useFromStore from "@/hooks/use-from-store";
import { useInventory } from "@/hooks/use-inventory";

type EditProps = {
    defaultItems: InvItem[],
    /* defaultInvAmount: any, */
    packageContent: Package
}
export default function Edit({ defaultItems, packageContent }: EditProps) {

    const { toast } = useToast()

    const currency = useFromStore(useCartStore, (state) => state.currency);

    const formatter = useMemo(() => {
        if (!currency) return undefined;
        return new Intl.NumberFormat
            (currency?.locale, { style: 'currency', currency: currency?.currency });
    }, [currency]);

    const inventory = useInventory({ defaultItems, packageContent });

    // Inventory items
    // const [invItems, setInvItems] = useState<InvItem[]>(defaultItems);
    // const [invAmount, setInvAmount] = useState<any>(defaultInvAmount);
    // const [clothingItems, setClothingItems] = useState<Item[]>(Array.from({ length: (editPackage.clothingSlots.length) }));

    // All items to be sold, when added to the invItems array,
    // they are removed from this one
    // const [items, setItems] = useState<Item[]>([...initialItems]);

    const items = useMemo(() => [...initialItems].filter((item) =>
        inventory.invItems.findIndex((invItem) =>
            item.id === invItem?.item.id) === -1), [inventory.invItems]);

    const configItems = useMemo(() => [...initialItems].filter((item) =>
        inventory.invItems.findIndex((invItem) =>
            item.id === invItem?.item.id) !== -1), [inventory.invItems]);

    const clothingConfigItems = useMemo(() => [...initialItems].filter((item) =>
        inventory.clothingItems.findIndex((invItem) =>
            item.id === invItem?.item.id) !== -1), [inventory.clothingItems]);

    /* Misc Values
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
    const [colorHex, setColorHex] = useState<string>('#0437b9'); */

    const addToCart = useCartStore((state) => state.addToCart);

    // this keeps the list of items up to date
    /* useEffect(() => {
        const newArray = [...initialItems];
        const concat = inventory.invItems;
        for (let index = 0; index < concat.length; index++) {
            const element = concat[index];
            if (element !== undefined) {
                const itIndex = newArray.findIndex((obj) => obj.id === element.item.id)
                if (itIndex !== -1)
                    newArray.splice(itIndex, 1)
            }
        }
        setItems(newArray)
    }, [inventory.invItems]); */

    /* Add Item To Clothing
    const addItemToClothing = (item: Item, index: number) => {
        setClothingItems((prev) => {
            const newArray = [...prev];
            newArray[index] = item
            return newArray
        });
    } */

    /*  const setItemAmount = (id: number, amount: number) => {
         const item = getItemById(id);
     
         if (!item) return;
     
         const currentAmount = invAmount[id].amount;
     
         // This is how many items are currently in the inventory
         const itemsInInv = invItems.reduce((val, item) =>
             (item && item?.id == id) ? val + 1 : val, 0);
     
         if (amount > currentAmount) {
             const newAmount = Math.ceil(amount / item.maxPerStack)
             if (newAmount > itemsInInv) {
     
                 const amountToAdd = newAmount - itemsInInv;
     
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
     } */

    const addPackageToCart = () => {
        /* if (Object.keys(invAmount).length < editPackage.minInventoryItems) {
            toast({
                title: "Uh oh! You can't do this yet.",
                description: "You need to add more items to your inventory.",
                className: 'border-primary',
            })
            return;
        } */
        addToCart({
            id: packageContent?.id ?? "custom",
            name: packageContent?.name ?? "Custom Package",

            price: inventory.totalPrice,
            server: packageContent?.server ?? "N/A",
            misc: {
                cooldown: inventory.kitCooldown,
                tpCooldown: inventory.teleportCooldown,
                homes: inventory.amountOfHomes,
                coloredName: inventory.coloredName,
                autoUpgrade: inventory.autoUpgrade,
                skipQueue: inventory.skipQueue,
                skinBox: inventory.skinBox,
            },

            items: inventory.invItems,
            clothingItems: inventory.clothingItems
        })
    }

    const getItemById = (id: number) => {
        return inventory.invItems.find((item: InvItem) => item?.item.id === id)
    }

    /* const removeItem = (item: Item, slot: number) => {
        // const amount = invAmount[item.id].amount;
        setInvItems((prev) => {
            const newArray = [...prev];
            newArray[slot] = undefined!;
            return newArray
        });
    } */

    /*  const removeItemFromClothing = (item: Item, slot: number) => {
         // const amount = invAmount[item.id].amount;
         setClothingItems((prev) => {
             const newArray = [...prev];
             newArray[slot] = undefined!;
             return newArray
         });
     } */

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
                        kitCooldown={inventory.kitCooldown}
                        setKitCooldown={inventory.setKitCooldown}
                        teleportCooldown={inventory.teleportCooldown}
                        setTeleportCooldown={inventory.setTeleportCooldown}
                        amountOfHomes={inventory.amountOfHomes}
                        setAmountOfHomes={inventory.setAmountOfHomes}
                        coloredName={inventory.coloredName}
                        setColoredName={inventory.setColoredName}
                        autoUpgrade={inventory.autoUpgrade}
                        setAutoUpgrade={inventory.setAutoUpgrade}
                        skipQueue={inventory.skipQueue}
                        setSkipQueue={inventory.setSkipQueue}
                        skinBox={inventory.skinBox}
                        setSkinBox={inventory.setSkinBox}
                        colorHex={inventory.colorHex}
                        setColorHex={inventory.setColorHex}
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
                                invItem={inventory.invItems[index]}
                                addItemToInv={inventory.addItemToInv}
                                removeItem={inventory.removeItem}
                                index={index}
                                mtTop={index >= (editPackage.maxInventorySlots - editPackage.maxBeltSlots)}
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
                                    invItem={inventory.clothingItems[index]}
                                    addItemToInv={inventory.addItemToClothing}
                                    removeItem={inventory.removeItemFromClothing}
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
                    <h3 className="text-xl font-semibold font-rajdhani">{packageContent?.server ?? "N/A"}</h3>
                    <hr className="border-muted my-5 opacity-50" />
                    <h5 className="font-semibold font-rajdhani uppercase">Kit</h5>
                    <h3 className="text-xl font-semibold font-rajdhani">{packageContent?.name ?? "Custom Package"}</h3>
                </div>

                <div className="bg-[#15171B] flex-grow flex flex-col rounded-md w-full">
                    <ScrollArea className="w-full h-[300px] flex-grow py-3 px-5">
                        {configItems.map((invItem, index) => {
                            return !!invItem ?
                                <ItemConfig
                                    key={index}
                                    invItems={inventory.invItems}
                                    invItem={invItem}
                                    setItemAmount={inventory.setItemAmount}
                                />
                                : null
                        })}
                        {clothingConfigItems.map((invItem, index) => {
                            return !!invItem ?
                                <ItemConfig
                                    key={index}
                                    invItems={inventory.clothingItems}
                                    invItem={invItem}
                                />
                                : null
                        })}
                    </ScrollArea>
                    <div className="p-5">
                        <Subtotal
                            addPackageToCart={addPackageToCart}
                            price={formatter?.format(inventory.totalPrice || 0) || '$0.00'}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}