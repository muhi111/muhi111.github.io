import type { TimelineEvent, TimelineEventType } from "../../data/timelineData";

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
		<div className="flex flex-col md:flex-row items-start">
			{/* モバイルでの年月表示（上部） */}
			<div className="w-full mb-2 md:hidden">
				<div className="font-semibold text-gray-600 bg-white px-2 py-1 rounded-lg">
					{endYear && endMonth ? (
						<div className="flex items-center justify-between">
							<span>
								{year}年{month}
							</span>
							<span className="text-sm text-gray-500">
								～ {endYear}年{endMonth}
							</span>
						</div>
					) : (
						<div>
							{year}年{month}
						</div>
					)}
				</div>
			</div>

			{/* デスクトップでの年月表示（左側） */}
			<div className="hidden md:block flex-shrink-0 w-48 text-right pr-8">
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
			<div className="w-full pl-4 md:pl-0 md:ml-4">
				<div className="bg-white p-2 md:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-auto md:h-[160px]">
					<div className="flex items-center mb-2">
						<span className="text-xl md:text-2xl mr-2 md:mr-3">{icon}</span>
						<h3 className="text-base md:text-lg font-semibold text-gray-800">
							{title}
						</h3>
					</div>
					{description && (
						<div className="text-sm md:text-base text-gray-600 max-h-[80px] md:h-[100px] overflow-y-auto pr-2">
							{description}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
