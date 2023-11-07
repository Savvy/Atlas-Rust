const storeItems = [
    {
        title: 'us-5x',
        packages: [
            {
                id: "eternal-rank",
                name: "Eternal | Rank",
                image: 'eternal.png',
                price: 25.99,
                server: 'us-5x',
                editable: true,
                misc: {
                    cooldown: 2,
                    tpCooldown: 0,
                    homes: 0,
                    coloredName: 2,
                    autoUpgrade: true,
                    skipQueue: false,
                    skinBox: false,
                    customColor: '#0437b9'
                },
                items: [
                    {
                        amount: 1000,
                        item: {
                            id: 1,
                            category: "resources",
                            type: 'item',
                            name: "Wood",
                            image: "wood.png",
                            pricePerStep: 1.0,
                            min: 1000, // 1000,
                            max: 1000000, // 200000,
                            step: 1000, // 1000,
                            maxPerStack: 100000 // 50000
                        },
                    },
                    {
                        amount: 1000,
                        item: {
                            id: 1,
                            category: "resources",
                            type: 'item',
                            name: "Wood",
                            image: "wood.png",
                            pricePerStep: 1.0,
                            min: 1000, // 1000,
                            max: 1000000, // 200000,
                            step: 1000, // 1000,
                            maxPerStack: 100000 // 50000
                        },
                    },
                    {
                        amount: 1000,
                        item: {
                            id: 1,
                            category: "resources",
                            type: 'item',
                            name: "Wood",
                            image: "wood.png",
                            pricePerStep: 1.0,
                            min: 1000, // 1000,
                            max: 1000000, // 200000,
                            step: 1000, // 1000,
                            maxPerStack: 100000 // 50000
                        },
                    },
                    {
                        amount: 5000,
                        item: {
                            id: 1,
                            category: "resources",
                            type: 'item',
                            name: "Wood",
                            image: "wood.png",
                            pricePerStep: 1.0,
                            min: 1000, // 1000,
                            max: 1000000, // 200000,
                            step: 1000, // 1000,
                            maxPerStack: 100000 // 50000
                        },
                    },
                    {
                        amount: 1000,
                        item: {
                            id: 2,
                            category: "resources",
                            type: 'item',
                            name: "Stone",
                            image: "stone.png",
                            pricePerStep: 1.0,
                            min: 1000,
                            max: 1000000,
                            step: 1000,
                            maxPerStack: 100000
                        },
                    },
                    {
                        amount: 5000,
                        item: {
                            id: 2,
                            category: "resources",
                            type: 'item',
                            name: "Stone",
                            image: "stone.png",
                            pricePerStep: 1.0,
                            min: 1000,
                            max: 1000000,
                            step: 1000,
                            maxPerStack: 100000
                        },
                    },
                ],
                clothingItems: [],
            },
            {
                id: "immortal-rank",
                name: "Immortal | Rank",
                image: 'immortal.png',
                price: 31.99,
                server: 'us-5x',
                editable: true,
                misc: {
                    cooldown: 2,
                    tpCooldown: 0,
                    homes: 0,
                    coloredName: 2,
                    autoUpgrade: true,
                    skipQueue: false,
                    skinBox: false,
                    customColor: '#0437b9'
                },
                items: [],
                clothingItems: [],
                invAmount: {},
            },
            {
                id: "supreme-rank",
                name: "Supreme | Rank",
                image: 'supreme.png',
                price: 51.99,
                server: 'us-5x',
                editable: true,
                misc: {
                    cooldown: 2,
                    tpCooldown: 0,
                    homes: 0,
                    coloredName: 2,
                    autoUpgrade: true,
                    skipQueue: false,
                    skinBox: false,
                    customColor: '#0437b9'
                },
                items: [],
                clothingItems: [],
                invAmount: {},
            },
        ]
    }
]

export default storeItems;