export interface SectionItem {
	id: string;
	year: string;
	month: string;
	endYear?: string;
	endMonth?: string;
	title: string;
	iconType:
		| "education"
		| "certification"
		| "achievement"
		| "work"
		| "internship"
		| "tech";
	description?: string;
	isCurrent?: boolean;
}

// 時系列順でソートする関数
const sortByDate = (items: SectionItem[]): SectionItem[] => {
	return [...items].sort((a, b) => {
		const aDate = new Date(parseInt(a.year), getMonthNumber(a.month) - 1);
		const bDate = new Date(parseInt(b.year), getMonthNumber(b.month) - 1);
		return aDate.getTime() - bDate.getTime();
	});
};

// 月の文字列を数値に変換する関数
const getMonthNumber = (month: string): number => {
	const monthMap: { [key: string]: number } = {
		"1月": 1,
		"2月": 2,
		"3月": 3,
		"4月": 4,
		"5月": 5,
		"6月": 6,
		"7月": 7,
		"8月": 8,
		"9月": 9,
		"10月": 10,
		"11月": 11,
		"12月": 12,
	};
	return monthMap[month] || 1;
};

// 学業セクション（時系列順）
const educationDataRaw: SectionItem[] = [
	{
		id: "high-school-graduation",
		year: "2022",
		month: "3月",
		title: "東京都立戸山高等学校 卒業",
		iconType: "education",
		description:
			"SSH（スーパーサイエンスハイスクール）指定クラスで生物コースに所属。",
	},
	{
		id: "tokyo-tech-entry",
		year: "2022",
		month: "4月",
		title: "東京工業大学 工学院",
		iconType: "education",
		description:
			"工学全般に興味があり特定の学科を選びたくなかったため、2年進級時に学科を選ぶ東京工業大学に進学。大学低学年期はOSやコンパイラなどの低レイヤーに興味を持つ。",
		isCurrent: true,
	},
	{
		id: "tokyo-tech-promotion",
		year: "2023",
		month: "4月",
		title: "東京工業大学 工学院 情報通信系 進級",
		iconType: "education",
		description:
			"教養課程中に現代社会を構成する情報通信技術群に興味を持ち、情報通信系に進級。",
	},
	{
		id: "42tokyo-entry",
		year: "2024",
		month: "4月",
		title: "42tokyo入学",
		iconType: "tech",
		description: "低レイヤーに興味があり、新たな環境を求めて42tokyoに入学。",
		isCurrent: true,
	},
];

export const educationData = sortByDate(educationDataRaw);

// 資格と入賞歴セクション（時系列順）
const certificationsAndAchievementsDataRaw: SectionItem[] = [
	{
		id: "basic-it-cert",
		year: "2024",
		month: "6月",
		title: "基本情報技術者",
		iconType: "certification",
		description: "情報技術の全般的な知識を身につけたくなり取得。",
	},
	{
		id: "hackathon-award1",
		year: "2024",
		month: "6月",
		title: "Progateハッカソン powered by AWS エムスリー株式会社賞 受賞",
		iconType: "achievement",
		description:
			"ES自動生成ツールを開発し受賞。初めてのweb開発でここからweb開発に興味を持つ。",
	},
	{
		id: "hackathon-award2",
		year: "2024",
		month: "8月",
		title: "技育キャンプハッカソン vol.12 最優秀賞 受賞",
		iconType: "achievement",
		description: "GithubのREADMEをGUI上で簡単に生成するツールを開発し受賞。",
	},
	{
		id: "hackathon-award3",
		year: "2024",
		month: "8月",
		title: "技育キャンプハッカソン vol.13 努力賞 受賞",
		iconType: "achievement",
		description: "GithubのREADMEにSNSのバッチを追加するツールを開発し受賞。",
	},
	{
		id: "hackathon-award4",
		year: "2024",
		month: "12月",
		title: "Progateハッカソン powered by AWS AWS賞 受賞",
		iconType: "achievement",
		description: "カレンダーの作成・共有を簡単に行えるツールを開発し受賞。",
	},
	{
		id: "applied-it-cert",
		year: "2025",
		month: "7月",
		title: "応用情報技術者",
		iconType: "certification",
		description: "情報技術の全般的な知識を身につけたくなり取得。",
	},
];

export const certificationsAndAchievementsData = sortByDate(
	certificationsAndAchievementsDataRaw,
);

// インターンシップセクション（時系列順）
const internshipsDataRaw: SectionItem[] = [
	{
		id: "recruit-entry",
		year: "2022",
		month: "7月",
		endYear: "2025",
		endMonth: "3月",
		title: "株式会社リクルート",
		iconType: "work",
		description:
			"リクルートで高校生の学習支援に携わる。進路指導から施策立案まで幅広く経験。",
	},
	{
		id: "gmo-intern",
		year: "2024",
		month: "8月",
		title: "GMOインターネット株式会社 インターン参加",
		iconType: "internship",
		description:
			"1weekのインターンシップ内のハッカソンにて、UI/UXを改善し初心者にもVPSを使いやすくするコンパネの改善案を提案・開発し、最優秀賞を受賞。",
	},
	{
		id: "en-japan-intern",
		year: "2024",
		month: "9月",
		title: "エン・ジャパン株式会社 インターン参加",
		iconType: "internship",
		description:
			"求人サイトをフルスタックで開発する1weekのインターンシップに参加。",
	},
	{
		id: "activecore-intern",
		year: "2025",
		month: "6月",
		endYear: "2025",
		endMonth: "12月",
		title: "株式会社アクティブコア インターン参加",
		iconType: "internship",
		description:
			"アプリケーションのバックエンド開発に携わる長期インターンシップに参加。",
		isCurrent: true,
	},
	{
		id: "hatena-intern",
		year: "2025",
		month: "8月",
		title: "株式会社はてな インターン参加",
		iconType: "internship",
		description:
			"3weekのインターンシップに参加。共通認証基盤の開発（特にパスキーの改善）に携わる。行ったタスクに対して社長賞を受賞。",
	},
	{
		id: "cookpad-intern",
		year: "2025",
		month: "9月",
		endYear: "2025",
		endMonth: "11月",
		title: "クックパッド株式会社 インターン参加",
		iconType: "internship",
		description:
			"SREとして開発・運用の改善や自動化に携わる。",
	},
];

export const internshipsData = sortByDate(internshipsDataRaw);
