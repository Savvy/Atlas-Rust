'use server';

import MAP_DATA from '@/data/server-maps';
import prisma from '@/lib/db';

export async function getMapOptions() {
    return await prisma.votes.findMany({});
}

export async function fetchMapInfo(id: string) {
    return fetch(`https://api.rustmaps.com/v4/maps/${id}`, {
        headers: {
            /* 'Authorization': 'Basic ' + base64.encode("APIKEY:X"), */
            "X-API-Key": process.env.RUST_API_KEY!,
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        if (!response.ok) {
            throw new Error('There was an issue fetching data')
        }
        return response.json()
    });
}

export async function submitVote(userId: string, voteId: string, index: number) {
    try {
        let val = await prisma.playerVotes.findFirst({
            where: {
                voteId: voteId,
                userId: userId
            }
        });
        if (!val) {
            val = await prisma.playerVotes.create({
                data: {
                    voteId: voteId,
                    userId: userId,
                    voteIndex: index,
                }
            })
            return;
        }
        val = await prisma.playerVotes.update({
            data: {
                voteId: voteId
            },
            where: {
                id: val.id
            }
        })
    } catch (error) {
        console.error(error);
    }
}

export default async function checkVotes() {
    MAP_DATA.forEach(async (vote) => {
        let data = await prisma.votes.findUnique({
            where: {
                voteId: vote.voteId
            }
        });
        if (data === null) {
            const mapData: any[] = [];

            vote.mapOptions.forEach(async (mapOption) => {
                const val = JSON.stringify(mapOption);
                try {
                    const response = await fetch("https://api.rustmaps.com/v4/maps", {
                        body: val,
                        headers: {
                            /* 'Authorization': 'Basic ' + base64.encode("APIKEY:X"), */
                            "X-API-Key": process.env.RUST_API_KEY!,
                            'Content-Type': 'application/json',
                        },
                        method: 'POST'
                    });
                    const result = await response.json();
                    mapData.push(result.data.mapId)
                    /* const newMapData = await response.json();
                    console.log(newMapData); */
                } catch (error) {
                    console.error(error);
                }
            })
            data = await prisma.votes.create({
                data: {
                    voteId: vote.voteId,
                    startDate: vote.startDate,
                    endDate: vote.endDate,
                    region: vote.region,
                    server: vote.server,
                    image: vote.image,
                    mapOptions: JSON.stringify(mapData),
                }
            });
            return;
        }
    })
}