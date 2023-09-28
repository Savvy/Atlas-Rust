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
    image: string
    price: number
    server: string
    editable: boolean
    misc: {
        cooldown: number
        tpCooldown: number
        homes: number
        coloredName: number
        autoUpgrade: boolean
        skipQueue: boolean
        skinBox: boolean
    },
    items: Item[]
}

type Item = {
    id: number,
    type: string,
    category: string,
    name: string,
    image: string,
    pricePerStep: number,
    min: number,
    max: number,
    step: number
    maxPerStack: number
}

/* type InvItem = {
    item: Item,
    amount: number
} */