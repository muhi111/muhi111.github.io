import { useState } from "react";
import WorkCard from "./components/works/WorkCard";
import WorkDetails from "./components/works/WorkDetails";
import { worksData } from "./data/worksData";

interface WorksProps {
	isNarrowScreen: boolean;
	isSidebarOpen: boolean;
}

function Works({ isNarrowScreen, isSidebarOpen }: WorksProps) {
	const [selectedWork, setSelectedWork] = useState<
		(typeof worksData)[0] | null
	>(null);

	const gridColumns =
		!isNarrowScreen && isSidebarOpen
			? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
			: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

	return (
		<div className="min-h-screen bg-slate-50 py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
					My Works
				</h2>
				<div className={`grid ${gridColumns} gap-6`}>
					{worksData.map((work) => (
						<WorkCard
							key={work.title}
							work={work}
							onClick={() => setSelectedWork(work)}
						/>
					))}
				</div>
			</div>
			{selectedWork && (
				<WorkDetails
					work={selectedWork}
					onClose={() => setSelectedWork(null)}
					isNarrowScreen={isNarrowScreen}
					isSidebarOpen={isSidebarOpen}
				/>
			)}
		</div>
	);
}

export default Works;
