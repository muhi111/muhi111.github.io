import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import type { Work } from "../../data/worksData";

interface WorkDetailsProps {
	work: Work;
	onClose: () => void;
	isNarrowScreen: boolean;
	isSidebarOpen: boolean;
}

function WorkDetails({
	work,
	onClose,
	isNarrowScreen,
	isSidebarOpen,
}: WorkDetailsProps) {
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
				className={`bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all fixed ${modalPosition} top-1/2 -translate-x-1/2 -translate-y-1/2`}
				onClick={(e) => e.stopPropagation()}
				onKeyDown={(e) => e.stopPropagation()}
			>
				<div className="p-6">
					<div className="flex justify-between items-center mb-4">
						<h3 className="text-2xl font-bold text-slate-900">{work.title}</h3>
						<button
							type="button"
							onClick={onClose}
							className="p-2 hover:bg-slate-100 rounded-full transition-colors"
						>
							<FaTimes className="w-5 h-5 text-slate-600" />
						</button>
					</div>

					<p className="text-slate-600 mb-6 whitespace-pre-line">
						{work.description}
					</p>

					{work.achievements.length > 0 && (
						<div className="mb-6 bg-blue-50 p-4 rounded-lg">
							{work.achievements.map((achievement) => (
								<p key={achievement} className="text-blue-900 font-medium">
									{achievement}
								</p>
							))}
						</div>
					)}

					<div className="flex flex-wrap gap-2 mb-6">
						{work.tags.map((tag) => (
							<span
								key={tag}
								className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm"
							>
								{tag}
							</span>
						))}
					</div>

					<div className="flex justify-between">
						<a
							href={work.githubLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center text-slate-700 hover:text-slate-900 transition-colors"
						>
							<FaGithub className="w-5 h-5 mr-2" />
							GitHub
						</a>
						{work.liveLink && (
							<a
								href={work.liveLink}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center text-slate-700 hover:text-slate-900 transition-colors"
							>
								<FaExternalLinkAlt className="w-5 h-5 mr-2" />
								External Link
							</a>
						)}
					</div>
				</div>
			</dialog>
		</div>
	);
}

export default WorkDetails;
