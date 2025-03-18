import type React from "react";
import { AiOutlineStar } from "react-icons/ai";
import {
	FaDocker,
	FaGitAlt,
	FaHtml5,
	FaJs,
	FaLinux,
	FaNodeJs,
	FaPython,
	FaReact,
	FaStar,
	FaStarHalfAlt,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiC, SiMysql, SiTypescript } from "react-icons/si";

const skillsData = [
	{
		category: "Programming Languages",
		skills: [
			{ name: "C", level: 4.5, icon: SiC },
			{ name: "Go", level: 4, icon: FaGolang },
			{ name: "Python", level: 3.5, icon: FaPython },
			{ name: "JavaScript", level: 3.5, icon: FaJs },
		],
	},
	{
		category: "Web Technologies",
		skills: [
			{ name: "HTML/CSS", level: 4.5, icon: FaHtml5 },
			{ name: "React", level: 4, icon: FaReact },
			{ name: "Node.js", level: 3.5, icon: FaNodeJs },
			{ name: "TypeScript", level: 3.5, icon: SiTypescript },
		],
	},
	{
		category: "Other",
		skills: [
			{ name: "Linux", level: 4.5, icon: FaLinux },
			{ name: "Git", level: 4, icon: FaGitAlt },
			{ name: "Docker", level: 3.5, icon: FaDocker },
			{ name: "SQL", level: 3.5, icon: SiMysql },
		],
	},
];

function StarRating({ level }: { level: number }) {
	return (
		<div className="flex">
			{[1, 2, 3, 4, 5].map((star) => {
				if (star <= level) {
					return <FaStar key={star} className="w-4 h-4 text-amber-400" />;
				}
				if (star - 0.5 <= level) {
					return (
						<FaStarHalfAlt key={star} className="w-4 h-4 text-amber-400" />
					);
				}
				return <AiOutlineStar key={star} className="w-4 h-4 text-amber-400" />;
			})}
		</div>
	);
}

function SkillItem({
	name,
	level,
	IconComponent,
}: {
	name: string;
	level: number;
	IconComponent: React.ElementType;
}) {
	return (
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors duration-200">
<div className="flex items-center gap-3">
<IconComponent className="w-5 h-5 text-slate-600" />
<span className="text-sm font-medium text-slate-700">{name}</span>
			</div>
			<StarRating level={level} />
		</div>
	);
}

function SkillCard({
	category,
	skills,
}: {
	category: string;
	skills: { name: string; level: number; icon: React.ElementType }[];
}) {
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
					/>
				))}
			</div>
		</div>
	);
}

function Skills() {
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
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Skills;
