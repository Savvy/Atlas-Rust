import { getMapOptions } from '@/actions/maps';
import { useQuery } from "@tanstack/react-query";

function fetchData() {
    return getMapOptions();
}

export default function useMapVotes() {
    return useQuery({
        queryKey: ['get-map-votes'],
        queryFn: fetchData
    });
}