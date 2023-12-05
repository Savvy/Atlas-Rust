import { fetchMapInfo } from "@/actions/maps";
import { useQuery } from "@tanstack/react-query";

async function fetchData(id: string) {
    return fetchMapInfo(id)
}

export default function useMapInfo(id: string) {
    return useQuery({
        queryKey: [`get-map-info-${id}`],
        queryFn: () => fetchData(id)
    });
}