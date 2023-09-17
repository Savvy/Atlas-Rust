
export const categories = [
    {
        id: 1,
        title: 'Resources',
    },
    {
        id: 2,
        title: 'Components',
    },
    {
        id: 3,
        title: 'Weapons',
    },
    {
        id: 4,
        title: 'Others',
    },
];

export const items = [
    {
        id: 1,
        categoryId: 1,
        name: "Wood",
        image: "wood.png",
        pricePerStep: 0.35,
        min: 1000,
        max: 10000,
        step: 1000
    },
    {
        id: 2,
        categoryId: 1,
        name: "Stone",
        image: "stone.png",
        pricePerStep: 0.35,
        min: 1000,
        max: 10000,
        step: 1000
    },
    {
        id: 3,
        categoryId: 1,
        name: "Metal Fragments",
        image: "metalfrags.png",
        pricePerStep: 0.35,
        min: 1000,
        max: 10000,
        step: 1000
    },

    {
        id: 4,
        categoryId: 2,
        name: "Assimov | AK",
        image: "assimov-ak.png",
        pricePerStep: 0.35,
        min: 1000,
        max: 10000,
        step: 1000
    },

    {
        id: 5,
        categoryId: 3,
        name: "AVS | AK",
        image: "avs-ak.png",
        pricePerStep: 0.35,
        min: 1000,
        max: 10000,
        step: 1000
    },
    {
        id: 6,
        categoryId: 3,
        name: "Rage | AK",
        image: "rage-ak.png",
        pricePerStep: 0.35,
        min: 1000,
        max: 10000,
        step: 1000
    },
    {
        id: 7,
        categoryId: 3,
        name: "Assimov | AK",
        image: "assimov-ak.png",
        pricePerStep: 0.35,
        min: 1000,
        max: 10000,
        step: 1000
    },
    {
        id: 8,
        categoryId: 3,
        name: "Eternal | AK",
        image: "eternal-ak.png",
        pricePerStep: 0.35,
        min: 1000,
        max: 10000,
        step: 1000
    },
]

export const editPackage = {
    minInventoryItems: 3,
}