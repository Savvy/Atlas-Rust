/* 
    Refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date for help on using the Date Object
    The vote id is used to store in the database, it must bne unique or else the voting will duplicate in the datanbase.
*/

const MAP_DATA = [
    {
        voteId: '1',
        startDate: new Date(2023, 11, 1),
        endDate: new Date(2023, 11, 6),
        region: 'eu',
        server: 'EU 2X Vanilla',
        image: '/images/servers/eu-main.png',
        mapOptions: [
            {
                size: 4223,
                seed: 893738010,
                staging: false,
                barren: false
            },
            /* {
                size: 3250,
                seed: 1468025456,
                staging: false,
                barren: false
            },
            {
                size: 3250,
                seed: 893738010,
                staging: false,
                barren: false
            },
            {
                size: 3250,
                seed: 89373423010,
                staging: false,
                barren: false
            },
            {
                size: 4223,
                seed: 893135010,
                staging: false,
                barren: false
            },
            {
                size: 4223,
                seed: 5467738010,
                staging: false,
                barren: false
            }, */
        ]
    }
]

export default MAP_DATA;