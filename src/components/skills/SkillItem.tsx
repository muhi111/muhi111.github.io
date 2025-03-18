import type { ElementType } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

interface SkillItemProps {
	name: string;
	level: number;
	IconComponent: ElementType;
	onClick: () => void;
}

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

function SkillItem({ name, level, IconComponent, onClick }: SkillItemProps) {
	return (
		<div
			className="group flex items-center justify-between p-2 rounded-lg hover:shadow-md transition-shadow duration-300 cursor-pointer"
			onClick={onClick}
			onKeyUp={(event) => {
				if (event.key === " ") {
					event.preventDefault();
				}
			}}
		>
			<div className="flex items-center gap-3">
				<IconComponent className="w-5 h-5 text-slate-600" />
				<span className="text-sm font-medium text-slate-700">{name}</span>
			</div>
			<div className="flex items-center gap-2">
				<StarRating level={level} />
				<MdKeyboardArrowRight className="w-5 h-5 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
			</div>
		</div>
	);
}

export default SkillItem;
