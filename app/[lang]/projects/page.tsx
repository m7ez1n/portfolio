import { getDictionary } from "@/app/[lang]/dictionaries";
import CardProject from "@/components/card-project";

export default async function Projects({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  const mockProjects = [
    {
      name: "He4rt Landing",
      github: "https://github.com/he4rt/he4rt-landing-ssr",
      url: "https://heartdevs.com",
      description: dict.projects.landing,
      techs: ["remix", "reactjs", "tailwindcss", "typescript"],
    },
    {
      name: "He4rt Conf",
      github: "https://github.com/he4rt/he4rtconf-landing",
      url: "https://conf.heartdevs.com",
      description: dict.projects.conf,
      techs: ["nextjs", "reactjs", "styled-components", "typescript"],
    },
    {
      name: "He4rt Recap 2022",
      github: "https://github.com/kjkGustavo/he4rt-recap-2022",
      url: "https://2022.heartdevs.com",
      description: dict.projects.recap,
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
      description: dict.projects["4noobs"],
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
}
