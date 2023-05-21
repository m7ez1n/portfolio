import { useTranslation } from "react-i18next";
import { AiOutlineGithub } from "react-icons/ai";

import TechTag from "@/components/tech-tag";
import { FiExternalLink } from "react-icons/fi";

type CardProjectProps = {
  name: string;
  github: string;
  url: string;
  description: string;
  techs: string[];
};

const CardProject = ({
  name,
  description,
  github,
  url,
  techs,
}: CardProjectProps) => (
  <div className="border-2 border-[#FF2B51] rounded-md p-4 max-w-lg">
    <div className="flex items-center justify-between mb-3">
      <a
        href={url}
        className="text-lg font-bold dark:text-white text-black/70 hover:text-[#FF2B51] hover:dark:text-[#FF2B51] transition duration-300 flex items-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
        <FiExternalLink />
      </a>

      <a
        href={github}
        className="cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineGithub
          size={28}
          className="dark:text-white text-black/70 hover:text-[#FF2B51] hover:dark:text-[#FF2B51] transition duration-300"
        />
      </a>
    </div>

    <p className="mb-4 font-light dark:text-white/80 text-black/70">
      {description}
    </p>

    <div className="flex flex-wrap w-full gap-2">
      {techs.map((tech) => (
        <TechTag key={tech}>{tech}</TechTag>
      ))}
    </div>
  </div>
);

const Projects = () => {
  const { t } = useTranslation();

  const mockProjects: CardProjectProps[] = [
    {
      name: "He4rt Landing",
      github: "https://github.com/he4rt/he4rt-landing-ssr",
      url: "https://heartdevs.com",
      description: t("projects.landing"),
      techs: ["remix", "reactjs", "tailwindcss", "typescript"],
    },
    {
      name: "He4rt Conf",
      github: "https://github.com/he4rt/he4rtconf-landing",
      url: "https://conf.heartdevs.com",
      description: t("projects.conf"),
      techs: ["nextjs", "reactjs", "styled-components", "typescript"],
    },
    {
      name: "He4rt Recap 2022",
      github: "https://github.com/kjkGustavo/he4rt-recap-2022",
      url: "https://2022.heartdevs.com",
      description: t("projects.recap"),
      techs: [
        "nextjs",
        "reactjs",
        "tailwindcss",
        "typescript",
        "framer-motion",
      ],
    },
    {
      name: "React 4noobs",
      github: "https://github.com/he4rt/react4noobs",
      url: "https://github.com/he4rt/react4noobs",
      description: t("projects.4noobs"),
      techs: ["reactjs", "markdown"],
    },
  ];

  return (
    <div className="grid grid-flow-col grid-rows-4 gap-4 md:grid-rows-2">
      {mockProjects.map((project) => (
        <CardProject key={`project-${project.name}`} {...project} />
      ))}
    </div>
  );
};

export default Projects;
