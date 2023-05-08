import { useRouter } from "next/router";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

import type { ChangeEvent, ReactNode } from "react";

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

const SocialMedia = () => {
  const router = useRouter();

  const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    router.push(router.route, router.asPath, {
      locale: value,
    });
  };

  return (
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

      <select
        onChange={handleLocaleChange}
        value={router.locale}
        className="bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="pt-BR">🇧🇷 Portugês</option>
        <option value="en-US">🇺🇸 English</option>
      </select>
    </div>
  );
};

export default SocialMedia;
