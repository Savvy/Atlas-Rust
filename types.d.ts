export interface CartItem extends Package {
    quantity: number
}

export interface StoreLocale {
    locale: string,
    currency: string,
    symbol: string
}

type Category = {
    title: string,
    packages: Package[]
}

type Package = {
    id: string
    name: string
    image?: string
    price: number
    server: string
    editable?: boolean
    misc: {
        cooldown: number
        tpCooldown: number
        homes: number
        coloredName: number
        autoUpgrade: boolean
        skipQueue: boolean
        skinBox: boolean
        customColor?: string
    },
    items: InvItem[]
    clothingItems: InvItem[] 
}

type Item = {
    id: number,
    type: string,
    category: string,
    name: string,
    image: string,
    /* pricePerStep: number, */
    pricing: ServerPricing
    defaultPricing: number
    min: number,
    max: number,
    step: number
    maxPerStack: number
}

type ServerPricing = {
    [key:string]: ItemPricing[]
}

type ItemPricing = {
    min: number,
    max: number,
    price: number,
}

type InvItem = {
    item: number,
    amount: number
}