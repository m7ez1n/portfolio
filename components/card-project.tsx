import { AiOutlineGithub } from "react-icons/ai";

import { FiExternalLink } from "react-icons/fi";
import TechTag from "./tech-tag";

export type CardProjectProps = {
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

export default CardProject;
