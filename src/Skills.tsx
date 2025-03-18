import { useState } from "react";
import SkillCard from "./components/skills/SkillCard";
import SkillDetails from "./components/skills/SkillDetails";
import skillsData from "./data/skillsData";
import type { Skill } from "./data/skillsData";
interface SkillsProps {
	isNarrowScreen: boolean;
	isSidebarOpen: boolean;
}

function Skills({ isNarrowScreen, isSidebarOpen }: SkillsProps) {
	const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

	return (
		<div className="min-h-screen bg-slate-50 flex items-center">
			<div className="w-full max-w-7xl mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
					My Skills
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{skillsData.map((category) => (
						<SkillCard
							key={category.category}
							category={category.category}
							skills={category.skills}
							onSkillClick={setSelectedSkill}
						/>
					))}
				</div>
			</div>

			{selectedSkill && (
				<SkillDetails
					skill={selectedSkill}
					onClose={() => setSelectedSkill(null)}
					isNarrowScreen={isNarrowScreen}
					isSidebarOpen={isSidebarOpen}
				/>
			)}
		</div>
	);
}

export default Skills;
