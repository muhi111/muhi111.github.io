import Timeline from "../timeline/Timeline";
import HomeHero from "./HomeHero";
import HomeQuickFacts from "./HomeQuickFacts";

export default function Home() {
	return (
		<div className="min-h-screen bg-slate-50 flex flex-col py-12">
			<div className="max-w-5xl mx-auto px-4 w-full">
				<div className="bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
					<div className="p-10">
						<HomeHero />
						<HomeQuickFacts />

						{/* Timeline Section */}
						<div className="mt-10">
							<Timeline />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
