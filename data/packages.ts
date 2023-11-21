const storeItems = [
    {
        title: 'us-5x',
        packages: [
            {
                id: "eternal-rank",
                name: "Eternal | Rank",
                image: 'eternal.png',
                price: 0.0,
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
                        item: 1
                    },
                    {
                        amount: 1000,
                        item: 1
                    },
                    {
                        amount: 1000,
                        item: 1
                    },
                    {
                        amount: 5000,
                        item: 1
                    },
                    {
                        amount: 1000,
                        item: 2
                    },
                    {
                        amount: 5000,
                        item: 2
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