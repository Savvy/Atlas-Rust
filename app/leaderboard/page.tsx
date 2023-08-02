
import Leaderboard from "@/components/shared/Leaderboard";
import Map from "@/components/shared/AtlasMap";


export default function Servers() {
	return (
		<main className="w-full">
			<header className="relative bg-hero bg-primary bg-opacity-70 pt-28 bg-no-repeat bg-cover bg-center overflow-hidden font-rajdhani">
				<div className="container">
					<div className="relative z-10 flex items-center flex-col gap-4 text-center pt-24 pb-48">
						<h1 className="text-5xl font-bold">
							Atlas Rust&apos;s best players
							<br />
							are on the field
						</h1>
						<h5 className="text-xl font-normal">
							See the list of the best players.</h5>
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
				<Leaderboard />
			</section>
			<Map />
		</main>
	);
}
