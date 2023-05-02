import Circle from "@/components/circle";

export type ContentOptions = "default" | "about" | "projects";

type ContentProps = {
  current: ContentOptions;
};

const AboutMe = () => (
  <div className="flex flex-col gap-2 text-center md:text-left w-96">
    <p className="text-3xl font-semibold leading-10 text-[#FF2B51]">
      Um pouco sobre mim...
    </p>
    <p className="text-xl font-normal leading-10 text-white">
      Comecei minha jornada no mundo da programação quando tinha apenas 17 anos
      e fiquei completamente apaixonado por esse universo de resolver problemas
      e criar soluções através de códigos.
    </p>
  </div>
);

const Content = ({ current }: ContentProps) => {
  if (current === "projects") {
    return <h1>Projetos</h1>;
  }

  if (current === "about") {
    return <AboutMe />;
  }

  return <Circle />;
};

export default Content;
