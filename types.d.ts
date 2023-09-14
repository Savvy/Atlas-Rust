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
    id: number
    categoryId: number,
    name: string,
    image: string,
    min: number,
    max: number,
}