import Timeline from "../Timeline";
import HomeHero from "./HomeHero";
import HomeQuickFacts from "./HomeQuickFacts";

export default function HomeContent() {
	return (
		<div className="min-h-screen bg-slate-50 flex flex-col py-12">
			<div className="max-w-5xl mx-auto px-4 w-full">
				<div className="bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
					<div className="p-10">
						<HomeHero />
						<HomeQuickFacts />

						{/* Timeline Section */}
						<div className="mt-10">
							<h2 className="text-2xl font-semibold text-slate-800 mb-8">
								経歴
							</h2>
							<Timeline />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
