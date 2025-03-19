export type TimelineEventType =
	| "education"
	| "work"
	| "achievement"
	| "certification"
	| "internship";

export interface TimelineEvent {
	id: string;
	year: string;
	month: string;
	endYear?: string;
	endMonth?: string;
	title: string;
	icon: string;
	description?: string;
	type: TimelineEventType;
}

export const timelineData: TimelineEvent[] = [
	{
		id: "high-school-graduation",
		year: "2022",
		month: "3月",
		title: "東京都立戸山高等学校 卒業",
		icon: "🎓",
		description:
			"高校時代はSSH（スーパーサイエンスハイスクール）指定クラスで生物コースに所属。",
		type: "education",
	},
	{
		id: "tokyo-tech-entry",
		year: "2022",
		month: "4月",
		title: "東京工業大学 工学院 入学",
		icon: "🎓",
		description:
			"工学全般に興味があり特定の学科を選びたくなかったため、2年進級時に学科を選ぶ東京工業大学に進学。大学低学年期はOSやコンパイラなどの低レイヤーに興味を持つ。",
		type: "education",
	},
	{
		id: "recruit-entry",
		year: "2022",
		month: "7月",
		endYear: "2025",
		endMonth: "3月",
		title: "株式会社リクルート 入社",
		icon: "💼",
		description:
			"リクルートで高校生の学習支援に携わる。進路指導から施策立案まで幅広く経験。",
		type: "work",
	},
	{
		id: "tokyo-tech-promotion",
		year: "2023",
		month: "4月",
		title: "東京工業大学 工学院 情報通信系 進級",
		icon: "🎓",
		description:
			"教養課程中に現代社会を構成する情報通信技術群に興味を持ち、情報通信系に進級。",
		type: "education",
	},
	{
		id: "42tokyo-entry",
		year: "2024",
		month: "4月",
		title: "42tokyo入学",
		icon: "🖥️",
		description: "低レイヤーに興味があり、新たな環境を求めて42tokyoに入学。",
		type: "education",
	},
	{
		id: "hackathon-award1",
		year: "2024",
		month: "6月",
		title: "Progateハッカソン powered by AWS エムスリー株式会社賞 受賞",
		icon: "🏆",
		description:
			"ES自動生成ツールを開発し受賞。初めてのweb開発でここからweb開発に興味を持つ。",
		type: "achievement",
	},
	{
		id: "basic-it-cert",
		year: "2024",
		month: "6月",
		title: "基本情報技術者",
		icon: "📜",
		description: "情報技術の全般的な知識を身につけたくなり取得。",
		type: "certification",
	},
	{
		id: "gmo-intern",
		year: "2024",
		month: "8月",
		title: "GMOインターネット株式会社 インターン参加",
		icon: "💼",
		description:
			"1weekのインターンシップ内のハッカソンにて、UI/UXを改善し初心者にもVPSを使いやすくするコンパネの改善案を提案・開発し、最優秀賞を受賞。",
		type: "internship",
	},
	{
		id: "hackathon-award2",
		year: "2024",
		month: "8月",
		title: "技育キャンプハッカソン vol.12 最優秀賞 受賞",
		icon: "🏆",
		description: "GithubのREADMEをGUI上で簡単に生成するツールを開発し受賞。",
		type: "achievement",
	},
	{
		id: "hackathon-award3",
		year: "2024",
		month: "8月",
		title: "技育キャンプハッカソン vol.13 努力賞 受賞",
		icon: "🏆",
		description: "GithubのREADMEにSNSのバッチを追加するツールを開発し受賞。",
		type: "achievement",
	},
	{
		id: "en-japan-intern",
		year: "2024",
		month: "9月",
		title: "エン・ジャパン株式会社 インターン参加",
		icon: "💼",
		description:
			"求人サイトをフルスタックで開発する1weekのインターンシップに参加。",
		type: "internship",
	},
	{
		id: "hackathon-award4",
		year: "2024",
		month: "12月",
		title: "Progateハッカソン powered by AWS AWS賞 受賞",
		icon: "🏆",
		description: "カレンダーの作成・共有を簡単に行えるツールを開発し受賞。",
		type: "achievement",
	},
];
