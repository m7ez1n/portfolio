import type { Dispatch, SetStateAction } from "react";
import type { ContentOptions } from "./contents";

type SidebarProps = {
  changeContent: Dispatch<SetStateAction<ContentOptions>>;
};

const textClassName =
  "text-white text-2xl uppercase font-semibold leading-9 tracking-wider cursor-pointer";

const Sidebar = ({ changeContent }: SidebarProps) => {
  const changeToAboutMe = () => changeContent("about");
  const changeToProjects = () => changeContent("projects");

  return (
    <div className="md:block md:rotate-90 md:absolute md:right-0 md:top-[50%] md:translate-x-[40%] md:w-[100vh] md:text-center md:z-10">
      <div className="flex gap-8 md:items-center md:justify-center md:gap-12">
        <p className={textClassName} onClick={changeToAboutMe}>
          about
        </p>
        <p className={textClassName} onClick={changeToProjects}>
          projects
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
