import Circle from "@/components/circle";
import AboutMe from "@/components/about";
import Projects from "@/components/projects";

export type ContentOptions = "default" | "about" | "projects";

type ContentProps = {
  current: ContentOptions;
};

const Content = ({ current }: ContentProps) => {
  if (current === "projects") {
    return <Projects />;
  }

  if (current === "about") {
    return <AboutMe />;
  }

  return <Circle />;
};

export default Content;
