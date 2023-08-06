import { create } from 'zustand';

type AtlasState = {
    servers: Servers
    onlinePlayers: number
    setServers: (servers: Servers) => void
    setOnlinePlayers: (amount: number) => void
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
    onlinePlayers: 0,
    setServers: (servers) => set(() => ({
        servers: servers
    })),
    setOnlinePlayers: (amount: number) => set((state) => ({
        onlinePlayers: state.onlinePlayers + amount
    })),
}))

export default useAtlasStore;