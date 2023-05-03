import type { Dispatch, SetStateAction } from "react";
import clsx from "clsx";

import type { ContentOptions } from "./contents";

type SidebarProps = {
  changeContent: Dispatch<SetStateAction<ContentOptions>>;
  currentContent: ContentOptions;
};

const textClassName =
  "dark:text-white text-black/70 text-2xl uppercase font-semibold leading-9 tracking-wider cursor-pointer";
const activeContent =
  "after:block after:w-14 after:h-[1px] after:bg-[#FF2B51] after:relative after:mt-1.5";

const Sidebar = ({ changeContent, currentContent }: SidebarProps) => {
  const changeToAboutMe = () => changeContent("about");
  const changeToProjects = () => changeContent("projects");

  const aboutIsCurrent = currentContent === "about";
  const projectsIsCurrent = currentContent === "projects";

  return (
    <div className="md:block md:rotate-90 md:absolute md:right-0 md:top-[50%] md:translate-x-[40%] md:w-[100vh] md:text-center md:z-10">
      <div className="flex gap-8 md:items-center md:justify-center md:gap-12">
        <p
          className={clsx(textClassName, aboutIsCurrent ? activeContent : null)}
          onClick={changeToAboutMe}
        >
          sobre
        </p>
        <p
          className={clsx(
            textClassName,
            projectsIsCurrent ? activeContent : null
          )}
          onClick={changeToProjects}
        >
          projetos
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
