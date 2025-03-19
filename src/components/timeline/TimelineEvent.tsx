interface TimelineEventProps {
	year: string;
	month: string;
	title: string;
	description?: string;
	icon: string;
	type: "education" | "work" | "achievement";
}

export default function TimelineEvent({
	year,
	month,
	title,
	description,
	icon,
	type,
}: TimelineEventProps) {
	const getBorderColor = (type: "education" | "work" | "achievement") => {
		switch (type) {
			case "education":
				return "border-blue-500";
			case "work":
				return "border-green-500";
			case "achievement":
				return "border-yellow-500";
			default:
				return "border-gray-500";
		}
	};

	return (
		<div className="flex items-start">
			{/* 年と丸いポイント */}
			<div className="flex-shrink-0 w-24 text-right">
				<div className="font-semibold text-gray-600">{year}</div>
				<div className="mt-1 text-sm text-gray-500">{month}</div>
				<div
					className={`absolute left-12 w-3 h-3 bg-white border-2 ${getBorderColor(type)} rounded-full transform -translate-x-1.5 mt-2`}
				/>
			</div>

			{/* イベントカード */}
			<div className="ml-8 w-full">
				<div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-[160px]">
					<div className="flex items-center mb-2">
						<span className="text-2xl mr-3">{icon}</span>
						<h3 className="text-lg font-semibold text-gray-800">{title}</h3>
					</div>
					{description && (
						<div className="text-gray-600 h-[100px] overflow-y-auto pr-2">
							{description}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
