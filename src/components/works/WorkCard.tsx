import { FaCode } from "react-icons/fa";
import type { Work } from "../../data/worksData";

interface WorkCardProps {
	work: Work;
	onClick: () => void;
}

function WorkCard({ work, onClick }: WorkCardProps) {
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			onClick();
		}
	};

	return (
		<button
			type="button"
			className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 
                 transform hover:-translate-y-1 cursor-pointer overflow-hidden w-full text-left h-full"
			onClick={onClick}
			onKeyDown={handleKeyDown}
		>
			<div className="p-6 flex flex-col h-full">
				<div className="flex-1">
					<h3 className="text-xl font-bold text-slate-900 mb-3">
						{work.title}
					</h3>
					<p className="text-slate-600 mb-4 line-clamp-3">{work.description}</p>

					{work.achievements.length > 0 && (
						<div className="mb-4 bg-blue-50 p-3 rounded-lg">
							<p className="text-blue-900 font-medium text-sm">
								{work.achievements[0]}
							</p>
						</div>
					)}
				</div>

				<div>
					<div className="flex flex-wrap gap-2 mb-4">
						{work.tags.slice(0, 3).map((tag) => (
							<span
								key={tag}
								className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm"
							>
								{tag}
							</span>
						))}
						{work.tags.length > 3 && (
							<span className="text-slate-500 text-sm self-center">
								+{work.tags.length - 3} more
							</span>
						)}
					</div>

					<div className="flex justify-start">
						<span className="flex items-center text-slate-600 text-sm">
							<FaCode className="w-4 h-4 mr-2" />
							詳細を見る
						</span>
					</div>
				</div>
			</div>
		</button>
	);
}

export default WorkCard;
