import type { SkillCategory } from "../../data/skillsData";
import SkillItem from "./SkillItem";

interface SkillCardProps {
	category: string;
	skills: SkillCategory["skills"];
	onSkillClick: (skill: SkillCategory["skills"][0]) => void;
}

function SkillCard({ category, skills, onSkillClick }: SkillCardProps) {
	return (
		<div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
			<h3 className="text-xl font-bold text-slate-800 mb-4">{category}</h3>
			<div className="space-y-2">
				{skills.map((skill) => (
					<SkillItem
						key={skill.name}
						name={skill.name}
						level={skill.level}
						IconComponent={skill.icon}
						technologies={skill.technologies}
						onClick={() => onSkillClick(skill)}
					/>
				))}
			</div>
		</div>
	);
}

export default SkillCard;
