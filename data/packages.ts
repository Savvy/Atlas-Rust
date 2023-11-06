const storeItems = [
    {
        title: 'us-5x',
        packages: [
            {
                id: "eternal-rank",
                name: "Eternal | Rank",
                image: 'eternal.png',
                price: 25.99,
                server: 'serverId',
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
                        amount: 10,
                        item: {
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
                    },
                    {
                        amount: 10,
                        item: {
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
                    },
                    {
                        amount: 10,
                        item: {
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
                    },
                    {
                        amount: 5,
                        item: {
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
                    },
                    {
                        amount: 10,
                        item: {
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
                    },
                    {
                        amount: 5,
                        item: {
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
                    },
                ],
                clothingItems: [],
            },
            {
                id: "immortal-rank",
                name: "Immortal | Rank",
                image: 'immortal.png',
                price: 31.99,
                server: 'serverId',
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
                server: 'serverId',
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