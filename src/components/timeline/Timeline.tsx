import { timelineData } from "../../data/timelineData";
import TimelineEventComponent from "./TimelineEvent";

export default function Timeline() {
	return (
		<div className="relative">
			{/* 中央の垂直線（モバイルでは非表示） */}
			<div className="absolute left-16 top-4 h-full w-0.5 bg-gray-200 hidden md:block" />

			{/* タイムラインイベント */}
			<div className="space-y-6 md:space-y-12">
				{timelineData.map((event) => (
					<TimelineEventComponent
						key={event.id}
						year={event.year}
						month={event.month}
						endYear={event.endYear}
						endMonth={event.endMonth}
						title={event.title}
						description={event.description}
						icon={event.icon}
						type={event.type}
					/>
				))}
			</div>
		</div>
	);
}
