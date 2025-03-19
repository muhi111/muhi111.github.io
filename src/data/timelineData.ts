export interface TimelineEvent {
	id: string;
	year: string;
	month: string;
	title: string;
	icon: string;
	description?: string;
	type: "education" | "work" | "achievement";
}

export const timelineData: TimelineEvent[] = [
	{
		id: "tokyo42",
		year: "2024",
		month: "4月",
		title: "42 Tokyoでの活動",
		icon: "🖥️",
		description: "プログラミングの実践的なスキルを磨いています",
		type: "education",
	},
	{
		id: "hackathon",
		year: "2023",
		month: "秋季",
		title: "ハッカソン参加",
		icon: "🚀",
		description: "チームでの開発経験を積みました",
		type: "achievement",
	},
	{
		id: "internship",
		year: "2022",
		month: "春季",
		title: "インターンシップ経験",
		icon: "💼",
		description: "実際の開発現場での経験を積みました",
		type: "work",
	},
	{
		id: "contest",
		year: "2021",
		month: "夏季",
		title: "プログラミングコンテスト入賞",
		icon: "🏆",
		description: "技術力が認められ、入賞しました",
		type: "achievement",
	},
	{
		id: "university",
		year: "2020",
		month: "4月",
		title: "東京工業大学 入学",
		icon: "🎓",
		description: "情報通信工学を専攻",
		type: "education",
	},
];
