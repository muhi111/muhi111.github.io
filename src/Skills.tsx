import React from "react";
import {
  FaPython,
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaStar,
  FaStarHalfAlt,
  FaLinux,
  FaJs,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiC, SiTypescript, SiMysql } from "react-icons/si";
import { AiOutlineStar } from "react-icons/ai";

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C", level: 4.5, icon: SiC },
      { name: "Go", level: 4, icon: FaGolang },
      { name: "Python", level: 3.5, icon: FaPython },
      { name: "JavaScript", level: 3.5, icon: FaJs },
    ],
  },
  {
    category: "Web Technologies",
    skills: [
      { name: "HTML/CSS", level: 4.5, icon: FaHtml5 },
      { name: "React", level: 4, icon: FaReact },
      { name: "Node.js", level: 3.5, icon: FaNodeJs },
      { name: "TypeScript", level: 3.5, icon: SiTypescript },
    ],
  },
  {
    category: "Other",
    skills: [
      { name: "Linux", level: 4.5, icon: FaLinux },
      { name: "Git", level: 4, icon: FaGitAlt },
      { name: "Docker", level: 3.5, icon: FaDocker },
      { name: "SQL", level: 3.5, icon: SiMysql },
    ],
  },
];

function StarRating({ level }: { level: number }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => {
        if (star <= level) {
          return <FaStar key={star} className="text-yellow-400" />;
        } else if (star - 0.5 <= level) {
          return <FaStarHalfAlt key={star} className="text-yellow-400" />;
        } else {
          return <AiOutlineStar key={star} className="text-yellow-400" />;
        }
      })}
    </div>
  );
}

function SkillItem({
  name,
  level,
  Icon,
}: {
  name: string;
  level: number;
  Icon: React.ElementType;
}) {
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center">
        <Icon className="w-5 h-5 mr-2 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">{name}</span>
      </div>
      <StarRating level={level} />
    </div>
  );
}

function SkillCard({
  category,
  skills,
}: {
  category: string;
  skills: { name: string; level: number; icon: React.ElementType }[];
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{category}</h3>
      {skills.map((skill, index) => (
        <SkillItem
          key={index}
          name={skill.name}
          level={skill.level}
          Icon={skill.icon}
        />
      ))}
    </div>
  );
}

function Skills({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  return (
    <div
      className={`flex items-center ${isSidebarOpen ? "justify-center" : "justify-center"} min-h-screen bg-gray-100 py-10`}
    >
      <div
        className={`w-full ${isSidebarOpen ? "max-w-5xl" : "max-w-6xl"} px-4`}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <SkillCard
              key={index}
              category={category.category}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
