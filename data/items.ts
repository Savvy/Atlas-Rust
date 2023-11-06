
export const categories = [
    'Resources',
    'Components',
    'Weapons',
    'Clothing',
    'Others',
];

export const items = [
    {
        id: 1,
        category: "resources",
        type: 'item',
        name: "Wood",
        image: "wood.png",
        pricePerStep: 0.35,
        min: 5, // 1000,
        max: 40, // 200000,
        step: 5, // 1000,
        maxPerStack: 10 // 50000
    },
    {
        id: 2,
        category: "resources",
        type: 'item',
        name: "Stone",
        image: "stone.png",
        pricePerStep: 0.35,
        min: 5,
        max: 40,
        step: 5,
        maxPerStack: 10
    },
    {
        id: 3,
        category: "resources",
        type: 'item',
        name: "Metal Fragments",
        image: "metalfrags.png",
        pricePerStep: 0.35,
        min: 5,
        max: 40,
        step: 5,
        maxPerStack: 10
    },

    {
        id: 4,
        category: "components",
        type: 'item',
        name: "Assimov | AK",
        image: "assimov-ak.png",
        pricePerStep: 0.35,
        min: 1,
        max: 10,
        step: 1,
        maxPerStack: 1
    },

    {
        id: 5,
        category: "weapons",
        type: 'item',
        name: "AVS | AK",
        image: "avs-ak.png",
        pricePerStep: 0.35,
        min: 1,
        max: 10,
        step: 1,
        maxPerStack: 1
    },
    {
        id: 6,
        category: "weapons",
        type: 'item',
        name: "Rage | AK",
        image: "rage-ak.png",
        pricePerStep: 0.35,
        min: 1,
        max: 10,
        step: 1,
        maxPerStack: 1
    },
    {
        id: 7,
        category: "weapons",
        type: 'item',
        name: "Assimov | AK",
        image: "assimov-ak.png",
        pricePerStep: 0.35,
        min: 1,
        max: 10,
        step: 1,
        maxPerStack: 1
    },
    {
        id: 8,
        category: "weapons",
        type: 'item',
        name: "Eternal | AK",
        image: "eternal-ak.png",
        pricePerStep: 0.35,
        min: 1,
        max: 10,
        step: 1,
        maxPerStack: 1
    },
    {
        id: 9,
        category: "clothing",
        type: 'clothing-body1',
        name: "Blue Jumpsuit",
        image: "jumpsuit.suit.blue.png",
        pricePerStep: 2.35,
        min: 1,
        max: 1,
        step: 1,
        maxPerStack: 1
    },
]

export const misc = {
    kitCooldown: [
        {
            label: '12h',
            price: 3.00,
        },
        {
            label: '10h',
            price: 6.00,
        },
        {
            label: '8h',
            price: 9.00,
        },
        {
            label: '6h',
            price: 12.00,
        },
        {
            label: '4h',
            price: 15.00,
        },
    ],
    tpCooldown: [
        {
            label: '25s',
            price: 2.00,
        },
        {
            label: '20s',
            price: 4.00,
        },
        {
            label: '15s',
            price: 6.00,
        },
        {
            label: '10s',
            price: 8.50,
        },
        {
            label: '5s',
            price: 12.00,
        },
    ],
    amountOfHomes: [
        {
            label: '3',
            price: 2.00,
        },
        {
            label: '5',
            price: 4.00,
        },
        {
            label: '10',
            price: 8.00,
        },
        {
            label: '15',
            price: 10.50,
        },
        {
            label: '20',
            price: 12.00,
        },
    ],
    coloredName: [
        {
            label: 'Blue',
            price: 2.00,
        },
        {
            label: 'Red',
            price: 2.00,
        },
        {
            label: 'Yellow',
            price: 2.00,
        },
        {
            label: 'Pink',
            price: 2.00,
        },
        {
            label: 'Custom',
            price: 5.00,
        },
    ],
    autoUpgrade: 2.50,
    skipQueue: 2.50,
    skinBox: 2.50,
}

export const editPackage = {
    minInventoryItems: 3,
    maxInventorySlots: 30,
    maxBeltSlots: 6,
    clothingSlots: [
        'clothing-backpack',
        'clothing-head1',
        'clothing-head2',
        'clothing-body1',
        'clothing-body2',
        'clothing-legs',
        'clothing-hands',
        'clothing-feet',
    ],
}