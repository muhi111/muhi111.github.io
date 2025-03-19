import { FaTimes } from "react-icons/fa";
import type { Skill } from "../../data/skillsData";

interface SkillDetailsProps {
	skill: Skill;
	onClose: () => void;
	isNarrowScreen: boolean;
	isSidebarOpen: boolean;
}

function SkillDetails({
	skill,
	onClose,
	isNarrowScreen,
	isSidebarOpen,
}: SkillDetailsProps) {
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Escape") onClose();
	};

	const modalPosition =
		!isNarrowScreen && isSidebarOpen ? "left-[calc(50%+160px)]" : "left-1/2";

	return (
		<div
			className="fixed inset-0 z-[20] flex items-center justify-center p-4 bg-black/50"
			onClick={(e) => e.target === e.currentTarget && onClose()}
			onKeyDown={handleKeyDown}
			role="presentation"
		>
			<dialog
				open
				className={`bg-white rounded-xl shadow-xl max-w-2xl w-[calc(100%-2rem)] md:w-full max-h-[90vh] overflow-y-auto transform transition-all fixed ${modalPosition} top-1/2 -translate-x-1/2 -translate-y-1/2`}
				onClick={(e) => e.stopPropagation()}
				onKeyDown={(e) => e.stopPropagation()}
			>
				<div className="p-6">
					<div className="flex justify-between items-center mb-4">
						<h3 className="text-2xl font-bold text-slate-900">{skill.name}</h3>
						<button
							type="button"
							onClick={onClose}
							className="p-2 hover:bg-slate-100 rounded-full transition-colors"
						>
							<FaTimes className="w-5 h-5 text-slate-600" />
						</button>
					</div>

					<div className="space-y-6">
						<p className="text-slate-600 whitespace-pre-line">
							{skill.description}
						</p>

						<div>
							<h4 className="text-lg font-semibold text-slate-800 mb-2">
								経験年数
							</h4>
							<p className="text-slate-600">{skill.experience}</p>
						</div>

						{skill.technologies && skill.technologies.length > 0 && (
							<div>
								<h4 className="text-lg font-semibold text-slate-800 mb-2">
									使用技術
								</h4>
								<div className="flex flex-wrap gap-2">
									{skill.technologies.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						)}

						<div>
							<h4 className="text-lg font-semibold text-slate-800 mb-2">
								主なプロジェクト
							</h4>
							<ul className="list-disc list-inside space-y-1">
								{skill.projects.map((project) => (
									<li key={project} className="text-slate-600">
										{project}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</dialog>
		</div>
	);
}

export default SkillDetails;
