import { useQuery } from "@tanstack/react-query";

async function fetchData() {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/servers`).then((response) => {
        if (!response.ok) {
            throw new Error('There was an issue fetching data')
        }
        return response.json()
    });
}

export default function useServersQuery() {
    return useQuery({
        queryKey: ['servers-data'],
        queryFn: fetchData
    });
}