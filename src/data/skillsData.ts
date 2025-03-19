import type { IconType } from "react-icons";
import { FaDocker, FaGitAlt, FaJs, FaLinux, FaPython } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiC, SiMysql } from "react-icons/si";

export interface Skill {
	name: string;
	level: number;
	icon: IconType;
	description: string;
	experience: string;
	projects: string[];
	technologies?: string[];
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
				description: "システムプログラミングや42tokyoの課題で使用",
				experience: "3年",
				projects: [
					"シェルやコンパイラの実装",
					"標準関数の再実装",
					"データ構造とアルゴリズムの実装",
				],
				technologies: [],
			},
			{
				name: "Go",
				level: 4,
				icon: FaGolang,
				description: "Webバックエンド開発やその他広範な用途に使用",
				experience: "1年",
				projects: [
					"Webサーバーの構築",
					"データ構造とアルゴリズムの実装",
					"CLIツールの開発",
				],
				technologies: ["Echo", "Gin", "Gorm"],
			},
			{
				name: "Python",
				level: 3.5,
				icon: FaPython,
				description:
					"データ分析、自動化スクリプト、Webアプリケーション開発に使用",
				experience: "0.5年",
				projects: [
					"データ分析・機械学習",
					"DjangoやFlaskによるWebアプリケーション",
					"CLIツールの開発",
				],
				technologies: ["Django", "Flask", "scikit-learn"],
			},
			{
				name: "JavaScript",
				level: 4,
				icon: FaJs,
				description: "フロントエンド開発からモダンな技術スタックまで幅広く使用",
				experience: "2年",
				projects: ["Reactアプリケーションの開発", "Webサイトの実装"],
				technologies: ["TypeScript", "React", "Node.js"],
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
				description: "開発環境構築、サーバー運用",
				experience: "1.5年",
				projects: ["開発環境の構築", "デプロイ"],
			},
			{
				name: "Git",
				level: 4,
				icon: FaGitAlt,
				description: "バージョン管理とチーム開発のワークフロー管理",
				experience: "2年",
				projects: ["プロジェクトのバージョン管理", "CI/CDパイプラインの構築"],
			},
			{
				name: "Docker",
				level: 3.5,
				icon: FaDocker,
				description: "コンテナ化されたアプリケーションの開発と運用",
				experience: "0.5年",
				projects: ["サービスのコンテナ化", "開発環境の標準化"],
			},
			{
				name: "SQL",
				level: 3,
				icon: SiMysql,
				description: "データベース設計と最適化",
				experience: "3年",
				projects: ["データベースの設計", "Webアプリケーションの開発"],
			},
		],
	},
];

export default skillsData;
