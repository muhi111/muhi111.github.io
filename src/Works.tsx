import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const worksData = [
  {
    title: "es writer",
    description: `経歴を入力するとESを自動で書いてくれるツール。
                  フロントエンドの大部分とバックエンドの一部を担当。
                  Progateハッカソン powered by AWS エムスリー株式会社賞`,
    image: "https://via.placeholder.com/300x200",
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
    liveLink: "",
  },
  {
    title: "ConoHa Control Panel",
    description: `ConoHaのAPIを使ってConoHaのサーバー作成をよりシンプルにより簡単にするツール。
                  フロントエンドの一部とデプロイを担当。
                  GMOインターネットグループ株式会社 2024年5daysインターン&ハッカソン 最優秀賞`,
    image: "https://via.placeholder.com/300x200",
    tags: ["React", "TypeScript", "Vite", "ConoHa VPS"],
    githubLink: "https://github.com/baba-jun/ConoHA",
    liveLink: "",
  },
  {
    title: "readme generator",
    description: `githubのアカウントのreadmeを簡単に作成出来るツール。
                  フロントエンドを担当。
                  技育キャンプハッカソン vol.12 最優秀賞`,
    image: "https://via.placeholder.com/300x200",
    tags: ["React", "TypeScript", "TailwindCSS", "Vite", "AWS Amplify"],
    githubLink: "https://github.com/Teamsasa/readme-generator",
    liveLink: "https://readmes.studio/",
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
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-64 object-cover mb-4 rounded"
          />
          <p className="text-gray-600 mb-4">{work.description}</p>
          <div className="flex flex-wrap mb-4">
            {work.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
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
      <img
        src={work.image}
        alt={work.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {work.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {truncateDescription(work.description)}
        </p>
        <div className="flex flex-wrap mb-4">
          {work.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
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
          My Works - images are preparing
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
