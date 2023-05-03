import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

import type { ReactNode } from "react";

type LinksProps = {
  icon: ReactNode;
  link: string;
  name: string;
};

const links: LinksProps[] = [
  {
    icon: <AiOutlineGithub className="text-[#FF2B51]" size={36} />,
    link: "https://github.com/m7he4rt",
    name: "Github",
  },
  {
    icon: (
      <AiOutlineTwitter className="text-black/70 dark:text-white" size={36} />
    ),
    link: "https://twitter.com/m7ez1n",
    name: "Twitter",
  },
  {
    icon: <AiFillLinkedin className="text-[#FF2B51]" size={36} />,
    link: "https://www.linkedin.com/in/m7aei",
    name: "Linkedin",
  },
];

const SocialMedia = () => (
  <div className="flex gap-4">
    {links.map(({ icon, link, name }) => (
      <a
        key={`key-${name}`}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </a>
    ))}
  </div>
);

export default SocialMedia;
