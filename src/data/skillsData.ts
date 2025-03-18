import type { IconType } from "react-icons";
import {
	FaDocker,
	FaGitAlt,
	FaHtml5,
	FaJs,
	FaLinux,
	FaNodeJs,
	FaPython,
	FaReact,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiC, SiMysql, SiTypescript } from "react-icons/si";

export interface Skill {
	name: string;
	level: number;
	icon: IconType;
	description: string;
	experience: string;
	projects: string[];
}

export interface SkillCategory {
	category: string;
	skills: Skill[];
}

const skillsData: SkillCategory[] = [
	{
		category: "Programming Languages",
		skills: [
			{
				name: "C",
				level: 4.5,
				icon: SiC,
				description:
					"システムプログラミングとパフォーマンス重視のアプリケーション開発に使用",
				experience: "5年以上",
				projects: [
					"組み込みシステムの開発",
					"システムドライバーの実装",
					"高性能計算アプリケーションの開発",
				],
			},
			{
				name: "Go",
				level: 4,
				icon: FaGolang,
				description: "バックエンドサービスとマイクロサービスの開発に使用",
				experience: "3年",
				projects: [
					"RESTful APIの設計と実装",
					"クラウドネイティブアプリケーションの開発",
					"高性能Webサーバーの構築",
				],
			},
			{
				name: "Python",
				level: 3.5,
				icon: FaPython,
				description:
					"データ分析、自動化スクリプト、Webアプリケーション開発に使用",
				experience: "3年",
				projects: [
					"データ分析パイプラインの構築",
					"バッチ処理の自動化",
					"Django Webアプリケーション",
				],
			},
			{
				name: "JavaScript",
				level: 3.5,
				icon: FaJs,
				description: "フロントエンド開発とNode.jsバックエンド開発に使用",
				experience: "3年",
				projects: [
					"シングルページアプリケーション開発",
					"インタラクティブなUI/UXの実装",
					"RESTful APIの開発",
				],
			},
		],
	},
	{
		category: "Web Technologies",
		skills: [
			{
				name: "HTML/CSS",
				level: 4.5,
				icon: FaHtml5,
				description: "モダンなWebサイトとアプリケーションのフロントエンド開発",
				experience: "4年",
				projects: [
					"レスポンシブWebデザインの実装",
					"アクセシビリティに配慮したUI設計",
					"アニメーションとインタラクションの実装",
				],
			},
			{
				name: "React",
				level: 4,
				icon: FaReact,
				description: "モダンなユーザーインターフェースとSPAの開発",
				experience: "3年",
				projects: [
					"大規模Webアプリケーションの開発",
					"コンポーネントライブラリの設計",
					"パフォーマンス最適化",
				],
			},
			{
				name: "Node.js",
				level: 3.5,
				icon: FaNodeJs,
				description: "スケーラブルなバックエンドサービスの開発",
				experience: "2年",
				projects: [
					"RESTful APIの開発",
					"リアルタイムアプリケーション",
					"マイクロサービスの実装",
				],
			},
			{
				name: "TypeScript",
				level: 3.5,
				icon: SiTypescript,
				description: "型安全なJavaScriptアプリケーションの開発",
				experience: "2年",
				projects: [
					"大規模フロントエンドアプリケーション",
					"共有ライブラリの開発",
					"APIクライアントの実装",
				],
			},
		],
	},
	{
		category: "Other",
		skills: [
			{
				name: "Linux",
				level: 4.5,
				icon: FaLinux,
				description: "システム管理、開発環境構築、サーバー運用",
				experience: "5年以上",
				projects: [
					"サーバーインフラの構築と運用",
					"自動化スクリプトの開発",
					"システムパフォーマンスの最適化",
				],
			},
			{
				name: "Git",
				level: 4,
				icon: FaGitAlt,
				description: "バージョン管理とチーム開発のワークフロー管理",
				experience: "4年",
				projects: [
					"大規模プロジェクトのバージョン管理",
					"CI/CDパイプラインの構築",
					"チーム開発ワークフローの最適化",
				],
			},
			{
				name: "Docker",
				level: 3.5,
				icon: FaDocker,
				description: "コンテナ化されたアプリケーションの開発と運用",
				experience: "2年",
				projects: [
					"マイクロサービスのコンテナ化",
					"開発環境の標準化",
					"本番環境のコンテナオーケストレーション",
				],
			},
			{
				name: "SQL",
				level: 3.5,
				icon: SiMysql,
				description: "データベース設計と最適化",
				experience: "3年",
				projects: [
					"大規模データベースの設計",
					"クエリパフォーマンスの最適化",
					"データ移行プロジェクト",
				],
			},
		],
	},
];

export default skillsData;
