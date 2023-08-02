import { Button } from "@/components/ui/button";
import {
	mdiAccountOutline,
	mdiCartOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import Server from "@/components/shared/Server";

import Leaderboard from "@/components/shared/Leaderboard";
import Map from "@/components/shared/AtlasMap";

import servers from '@/data/servers.json';
import { getCurrentUser } from "@/lib/session";

export default async function Home() {
	const user = await getCurrentUser();
	return (
		<main className="w-full">
			<header className="relative bg-hero bg-primary bg-opacity-70 pt-28 bg-no-repeat bg-cover bg-center overflow-hidden font-rajdhani">
				<div className="container">
					<div className="relative z-10 flex flex-col gap-4 pt-24">
						<h1 className="text-5xl font-bold">
							Venture into great battles in
							<br />
							search of <span className="text-primary">your continent</span>.
						</h1>
						<h5 className="text-xl font-normal">
							Come play on Atlas Rust, the biggest Rust server
							<br />
							you&apos;ve ever seen.
						</h5>
						<div className="flex gap-4 font-poppins">
							{!!!user && <Button size={"default"} className="">
								<Icon
									path={mdiAccountOutline}
									size={0.8}
									color="white"
									className="mr-1"
								/>
								Login
							</Button>}
							<Button
								size={"default"}
								variant={"secondary"}
								className="font-poppins"
							>
								<Icon
									path={mdiCartOutline}
									size={0.8}
									color="white"
									className="mr-1"
								/>
								Discover our store
							</Button>
						</div>
					</div>
					<div className="relative z-10 pb-24 flex flex-col items-end gap-2">
						<span className="text-white uppercase font-poppins">
							Watch Trailer
						</span>
						<div className="w-72 h-40 relative rounded grow-c flex items-center justify-center bg-trailer bg-cover bg-no-repeat cursor-pointer">
							<img className="" src="/images/play-btn.png" alt="Play Button" />
						</div>
					</div>
					<div className="bg-grids bg-cover bg-center absolute left-0 top-28 h-full w-full z-[3]"></div>
				</div>
				<div
					style={{
						height: "100%",
						width: "100%",
						left: 0,
						top: 0,
						position: "absolute",
						opacity: 0.8,
						zIndex: 1,
						background:
							"radial-gradient(68.42% 68.38% at 68.40% 30.68%, rgba(2, 2, 3, 0) 0%, #020203 71%)",
					}}
				/>
			</header>
			<div className="bg-pattern py-24">
				<section className="container">
					<div className="flex justify-between mb-8">
						<h3 className="text-lg text-muted">Our main servers</h3>
						<Link href={"/servers"} className="text-primary">
							see more
						</Link>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{!!servers && servers.slice(0, 6).map((server) =>
							<Server key={server.serverid} serverId={server.serverid} region={server.region} shopUrl={server.shopUrl} />
						)}
					</div>
				</section>
			</div>
			<div className="bg-secondary">
				<section className="container py-24">
					<div className="flex justify-between mb-8">
						<h3 className="text-lg text-muted">Leaderboard</h3>
						<Link href={"/leaderboard"} className="text-primary">
							see more
						</Link>
					</div>
					<Leaderboard />
				</section>
			</div>
			<Map />
		</main>
	);
}
