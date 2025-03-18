import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

const worksData = [
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
		githubLink: "https://github.com/yamamoto99/es-writer",
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
		liveLink: "https://readmes.studio/",
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
		livelink: "",
	},
];

interface WorkDetailsProps {
	work: (typeof worksData)[0];
	onClose: () => void;
}

function WorkDetails({ work, onClose }: WorkDetailsProps) {
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Escape") onClose();
	};

	return (
		<div
			className="fixed inset-0 z-[20] flex items-center justify-center p-4 bg-black/50"
			onClick={(e) => e.target === e.currentTarget && onClose()}
			onKeyDown={handleKeyDown}
			role="presentation"
		>
			<dialog
				open
				className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
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

function WorkCard({
	work,
	onClick,
}: {
	work: (typeof worksData)[0];
	onClick: () => void;
}) {
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			onClick();
		}
	};

	return (
		<button
			type="button"
			className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 
                 transform hover:-translate-y-1 cursor-pointer overflow-hidden w-full text-left"
			onClick={onClick}
			onKeyDown={handleKeyDown}
		>
			<div className="p-6">
<h3 className="text-xl font-bold text-slate-900 mb-3">{work.title}</h3>
<p className="text-slate-600 mb-4 line-clamp-3">{work.description}</p>

				{work.achievements.length > 0 && (
					<div className="mb-4 bg-blue-50 p-3 rounded-lg">
						<p className="text-blue-900 font-medium text-sm">
							{work.achievements[0]}
						</p>
					</div>
				)}

				<div className="flex flex-wrap gap-2">
					{work.tags.slice(0, 3).map((tag) => (
						<span
							key={tag}
							className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm"
						>
							{tag}
						</span>
					))}
					{work.tags.length > 3 && (
						<span className="text-slate-500 text-sm self-center">
							+{work.tags.length - 3} more
						</span>
					)}
				</div>
			</div>
		</button>
	);
}

function Works() {
	const [selectedWork, setSelectedWork] = useState<
		(typeof worksData)[0] | null
	>(null);

	return (
		<div className="min-h-screen bg-slate-50 py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
					My Works
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{worksData.map((work) => (
						<WorkCard
							key={work.title}
							work={work}
							onClick={() => setSelectedWork(work)}
						/>
					))}
				</div>
			</div>
			{selectedWork && (
				<WorkDetails
					work={selectedWork}
					onClose={() => setSelectedWork(null)}
				/>
			)}
		</div>
	);
}

export default Works;
