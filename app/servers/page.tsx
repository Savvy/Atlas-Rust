import Server from "@/components/shared/Server";

import Map from "@/components/shared/AtlasMap";

import servers from '@/data/servers';

export default function Servers() {
	return (
		<main className="w-full">
			<header className="relative bg-hero bg-primary bg-opacity-70 pt-28 bg-no-repeat bg-cover bg-center overflow-hidden font-rajdhani">
				<div className="container">
					<div className="relative z-10 flex items-center flex-col gap-4 text-center pt-24 pb-48">
						<h1 className="text-5xl font-bold">
							Venture into great battles
							<br />
							in search of your continent.
						</h1>
						<h5 className="text-xl font-normal">
							The list of the main servers can be found here.</h5>
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
			<section className="container md:-mt-24 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{!!servers && servers.map((server) =>
						<Server key={server.serverid} serverid={server.serverid} region={server.region} shopUrl={server.shopUrl} />
					)}
				</div>
			</section>
			<Map />
		</main>
	);
}
