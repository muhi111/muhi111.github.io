import Timeline from "../timeline/Timeline";
import HomeHero from "./HomeHero";
import HomeQuickFacts from "./HomeQuickFacts";

interface HomeProps {
	isNarrowScreen: boolean;
}

export default function Home({ isNarrowScreen }: HomeProps) {
	return (
		<div className="min-h-screen bg-slate-50 flex flex-col py-2 md:py-12">
			<div className="max-w-5xl mx-auto px-1 md:px-4 w-full">
				<h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
					About Me
				</h2>
				<div className="bg-white rounded-lg md:rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
					<div className="p-2 md:p-10">
						<HomeHero />
						<HomeQuickFacts />

						{/* Timeline Section */}
						{isNarrowScreen && (
							<h3 className="text-2xl font-semibold text-slate-800 text-center mb-4 md:mb-8">
								経歴
							</h3>
						)}
						<div className="mt-4 md:mt-10">
							<Timeline />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
