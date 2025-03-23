export interface Work {
	title: string;
	description: string;
	achievements: string[];
	tags: string[];
	githubLink: string;
	liveLink: string;
}

export const worksData: Work[] = [
	{
		title: "Es writer",
		description: `一度経歴を入力すると以降はそれをもとにワンクリックでESを書いてくれるツール。
                  UXを重視してブラウザ拡張機能として実装したところが推しポイント。
                  フロントエンドの大部分とバックエンドの一部を担当。`,
		achievements: ["Progateハッカソン powered by AWS エムスリー株式会社賞"],
		tags: [
			"React",
			"TypeScript",
			"TailwindCSS",
			"Vite",
			"Go",
			"PostgreSQL",
			"Docker",
			"Terraform",
			"Amazon Bedrock",
			"Amazon Cognito",
			"Amazon EC2",
			"Amazon RDS",
		],
		githubLink: "https://github.com/Teamsasa/es-writer-extension",
		liveLink:
			"https://chromewebstore.google.com/detail/es-writer-extension/jkencchebhkbaomammmgbhnpalgkchkm",
	},
	{
		title: "ConoHa Control Panel",
		description: `GMO インターネットグループ株式会社 5daysインターン内の「ConoHaのコンパネを改良する」というお題のハッカソンで作成したConoHaのコントロールパネル。
                  初心者にも優しいUI・UXをテーマにチャット機能と、分かりやすい料金比較機能、スマホ表示時のミニマムなデザインを実装。
                  ConoHaのAPIを使用してチャット画面での対話形式でのVPS契約まで行えるところが推しポイント。
                  フロントエンドの一部とデプロイを担当。`,
		achievements: [
			"GMOインターネットグループ株式会社 2024年5daysインターン&ハッカソン 最優秀賞",
		],
		tags: ["React", "TypeScript", "Vite", "Go", "Gin", "Docker", "ConoHa VPS"],
		githubLink: "https://github.com/muhi111/ConoHa",
		liveLink: "",
	},
	{
		title: "readme generator",
		description: `バッチや統計などのツールをプルダウンから選択すると、githubのプロフィールのREADMEを生成してくれるツール。
                  様々なOSSのコンテンツに対応していて、プレビュー機能も実装しているところが推しポイント。
                  メンバー全員で並行して実装。`,
		achievements: ["技育キャンプハッカソン vol.12 最優秀賞"],
		tags: ["React", "TypeScript", "TailwindCSS", "Vite", "AWS Amplify"],
		githubLink: "https://github.com/Teamsasa/readme-generator",
		liveLink: "https://teamsasa.github.io/readme-generator/",
	},
	{
		title: "github sns profile card",
		description: `githubのプロフィールのREADMEにSNSのバッチと簡単な情報を表示するツール。
                  フォロー・フォロワー数や記事数など、SNSに関する情報を簡単に表示できるところが推しポイント。
                  メンバー全員で並行して実装。`,
		achievements: ["技育キャンプハッカソン vol.13 努力賞"],
		tags: ["Go", "Docker", "GCP Cloud Run"],
		githubLink: "https://github.com/Teamsasa/github-sns-profile-card",
		liveLink: "https://github-sns-profile-card-e53bc5obaa-an.a.run.app",
	},
	{
		title: "splatoon API",
		description: `Splatoon 3の非公開APIを叩くためのパラメータを取得するためのプログラム。
                  ステージや戦績・使用ブキ等々、大体の情報をAPI経由で取得できる。
                  Nintendo Switch Onlineのアプリ内で叩いているものをリバースエンジニアリングして実装。`,
		achievements: [],
		tags: ["Python"],
		githubLink: "https://github.com/muhi111/splatoon_api",
		liveLink: "",
	},
	{
		title: "Bonded",
		description: `カレンダーの共有を容易にするためのwebアプリケーション。
                  カレンダーの作成や共有やイベントの作成はもちろん、カレンダーの公開・非公開も可能。
                  公開カレンダーはフォローすることができ、イベントを追うことも可能。
                  公開カレンダーはログインなしでも閲覧できるようにミドルウェアの認証を調整したのが推しポイント。
                  バックエンドの一部とフロントエンドの大部分を担当。`,
		achievements: ["Progateハッカソン powered by AWS AWS賞"],
		tags: [
			"React",
			"TypeScript",
			"TailwindCSS",
			"Vite",
			"Material UI",
			"Go",
			"AWS Lambda",
			"Amazon API Gateway",
			"Amazon DynamoDB",
			"Amazon Cognito",
		],
		githubLink: "https://github.com/Teamsasa/Bonded",
		liveLink: "",
	},
];
