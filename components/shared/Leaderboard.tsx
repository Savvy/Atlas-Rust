import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataTableDemo } from "./leaderboard/content"

const tabs = [
    {
        key: "pvp",
        keyTitle: "PVP",
        content: ""
    },
    {
        key: "pvp-plus",
        keyTitle: "PVP PLUS",
        content: ""
    },
    {
        key: "resources",
        keyTitle: "RESOURCES",
        content: ""
    },
    {
        key: "farming",
        keyTitle: "FARMING",
        content: ""
    },
    {
        key: "misc",
        keyTitle: "MISC",
        content: ""
    },
    {
        key: "loot",
        keyTitle: "LOOT",
        content: ""
    },
    {
        key: "pve",
        keyTitle: "PVE",
        content: ""
    },
    {
        key: "scrap",
        keyTitle: "SCRAP",
        content: ""
    },
    {
        key: "explosives",
        keyTitle: "EXPLOSIVES",
        content: ""
    },
]

export default function Leaderboard() {
    return (
        <Tabs defaultValue={tabs[0].key} className="w-full">
            <TabsList className="flex-wrap">
                {!!tabs && tabs.map((tab) => {
                    return <TabsTrigger value={tab.key} key={tab.key}>{tab.keyTitle}</TabsTrigger>
                })}
            </TabsList>
            {!!tabs && tabs.map((tab) => {
                return (
                    <TabsContent value={tab.key} key={tab.key}>
                        <DataTableDemo />
                    </TabsContent>
                )
            })}
        </Tabs>
    )
}