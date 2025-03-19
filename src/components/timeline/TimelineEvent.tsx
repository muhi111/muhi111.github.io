import type { TimelineEvent, TimelineEventType } from "../../types/timeline";

type TimelineEventProps = Omit<TimelineEvent, "id">;

export default function TimelineEventComponent({
	year,
	month,
	endYear,
	endMonth,
	title,
	description,
	icon,
	type,
}: TimelineEventProps) {
	const getBorderColor = (type: TimelineEventType) => {
		switch (type) {
			case "education":
				return "border-blue-500";
			case "work":
				return "border-green-500";
			case "achievement":
				return "border-yellow-500";
			case "certification":
				return "border-purple-500";
			case "internship":
				return "border-pink-500";
			default:
				return "border-gray-500";
		}
	};

	return (
		<div className="flex items-start">
			{/* 年と丸いポイント */}
			<div className="flex-shrink-0 w-48 text-right pr-8">
				<div className="font-semibold text-gray-600">
					{endYear && endMonth ? (
						<>
							<div>
								{year}年{month}
							</div>
							<div className="text-sm text-gray-500">
								～ {endYear}年{endMonth}
							</div>
						</>
					) : (
						<div className="mt-2">
							{year}年{month}
						</div>
					)}
				</div>
				<div
					className={`absolute left-16 w-3 h-3 bg-white border-2 ${getBorderColor(type)} rounded-full transform -translate-x-1.5 mt-2`}
				/>
			</div>

			{/* イベントカード */}
			<div className="ml-4 w-full">
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
