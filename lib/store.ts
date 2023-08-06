import { create } from 'zustand';

type AtlasState = {
    servers: Servers
    setServers: (servers: Servers) => void
}

export type Servers = { [key: string]: Server }

export type Server = {
    serverid: string
    region: 'NA' | 'EU' | 'AU'
    shopUrl: string
    data?: any
}

const useAtlasStore = create<AtlasState>()((set) => ({
    servers: {},
    setServers: (servers) => set((state) => ({
        servers: servers
    })),
}))

export default useAtlasStore;