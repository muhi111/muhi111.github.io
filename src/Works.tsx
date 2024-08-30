import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

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
    tags: ["React", "TypeScript", "Vite", "Go", "Docker", "ConoHa VPS"],
    githubLink: "https://github.com/baba-jun/ConoHA",
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
];

interface WorkDetailsProps {
  work: (typeof worksData)[0];
  onClose: () => void;
}

function WorkDetails({ work, onClose }: WorkDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              {work.title}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={24} />
            </button>
          </div>
          <p className="text-gray-600 mb-4 whitespace-pre-line">
            {work.description}
          </p>
          {work.achievements.length > 0 && (
            <div className="mb-4 bg-blue-50 p-3 rounded-lg">
              {work.achievements.map((achievement, index) => (
                <p key={index} className="text-blue-800 font-medium">
                  {achievement}
                </p>
              ))}
            </div>
          )}
          <div className="flex flex-wrap mb-4">
            {work.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
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
              className="text-gray-800 hover:text-gray-600"
            >
              <FaGithub className="inline mr-2" />
              GitHub
            </a>
            {work.liveLink && (
              <a
                href={work.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600"
              >
                <FaExternalLinkAlt className="inline mr-2" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
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
  const maxDescriptionLength = 100;

  const truncateDescription = (description: string) => {
    if (description.length <= maxDescriptionLength) {
      return description;
    }
    return description.slice(0, maxDescriptionLength) + "...";
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {work.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {truncateDescription(work.description)}
        </p>
        {work.achievements.length > 0 && (
          <div className="mb-4 bg-blue-50 p-2 rounded">
            <p className="text-blue-800 font-medium text-sm">
              {work.achievements[0]}
            </p>
          </div>
        )}
        <div className="flex flex-wrap mb-4">
          {work.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
          {work.tags.length > 3 && (
            <span className="text-gray-600 text-xs">
              +{work.tags.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function Works({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  const [selectedWork, setSelectedWork] = useState<
    (typeof worksData)[0] | null
  >(null);

  return (
    <div
      className={`flex items-center ${isSidebarOpen ? "justify-center" : "justify-center"} min-h-screen bg-gray-100 py-10`}
    >
      <div
        className={`w-full ${isSidebarOpen ? "max-w-5xl" : "max-w-6xl"} px-4`}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          My Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {worksData.map((work, index) => (
            <WorkCard
              key={index}
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
