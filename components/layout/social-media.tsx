"use client";

import type { ReactNode } from "react";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

import LanguageChanger from "./language-changer";

type LinksProps = {
  icon: ReactNode;
  link: string;
  name: string;
  ariaLabel: string;
};

const links: LinksProps[] = [
  {
    icon: <AiOutlineGithub className="text-[#FF2B51]" size={36} />,
    link: "https://github.com/m7ez1n",
    name: "Github",
    ariaLabel: "Github m7ez1n",
  },
  {
    icon: (
      <AiOutlineTwitter className="text-black/70 dark:text-white" size={36} />
    ),
    link: "https://twitter.com/m7ez1n",
    name: "Twitter",
    ariaLabel: "Twitter m7ez1n",
  },
  {
    icon: <AiFillLinkedin className="text-[#FF2B51]" size={36} />,
    link: "https://www.linkedin.com/in/m7ez1n",
    name: "Linkedin",
    ariaLabel: "Linkedin Mateus Mendes",
  },
];

const SocialMedia = () => (
  <div className="flex gap-4">
    {links.map(({ icon, link, name, ariaLabel }) => (
      <a
        key={`key-${name}`}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {icon}
      </a>
    ))}

    <LanguageChanger />
  </div>
);

export default SocialMedia;
