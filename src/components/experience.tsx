import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import styles from "@/styles/timeline.module.css";

type ExperienceProps = {
  title: string;
  description: string;
};

const Experience = () => {
  const { t } = useTranslation();
  const [experiences, setMockExperiences] = useState<ExperienceProps[]>([]);

  useEffect(
    () =>
      setMockExperiences([
        {
          title: "Frontend Developer - RaroAcademy",
          description:
            "Durante meu estágio na LEB, participei da criação do projeto Maleta do Engenheiro, aprendi muito sobre várias tecnologias, sempre buscando me atualizar e acompanhar o que existia de novo",
        },
        {
          title: "Professor - RaroAcademy",
          description:
            "Durante meu estágio na LEB, participei da criação do projeto Maleta do Engenheiro, aprendi muito sobre várias tecnologias, sempre buscando me atualizar e acompanhar o que existia de novo",
        },
        {
          title: "Junior Frontend Developer - LEB",
          description:
            "Durante meu estágio na LEB, participei da criação do projeto Maleta do Engenheiro, aprendi muito sobre várias tecnologias, sempre buscando me atualizar e acompanhar o que existia de novo",
        },
        {
          title: "Junior Frontend Developer - KonoIT",
          description:
            "Durante meu estágio na LEB, participei da criação do projeto Maleta do Engenheiro, aprendi muito sobre várias tecnologias, sempre buscando me atualizar e acompanhar o que existia de novo",
        },
        {
          title: "Estágiario LEB",
          description:
            "Durante meu estágio na LEB, participei da criação do projeto Maleta do Engenheiro, aprendi muito sobre várias tecnologias, sempre buscando me atualizar e acompanhar o que existia de novo",
        },
      ]),
    [t]
  );

  return (
    <div className="sticky ml-0 md:ml-12 lg:w-2/3">
      <div className="container w-full h-full mx-auto">
        <div className="relative h-full p-10 overflow-hidden wrap">
          <div className="border-2-2 border-yellow-555 absolute h-full border-2 right-1/2 border-[#E40037] rounded-[1%]" />
          <div className="border-2-2 border-yellow-555 absolute h-full border-2 left-1/2 border-[#E40037] rounded-[1%]" />
          <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-1 py-4 text-right">
              <p className="mb-3 text-base text-[#FF2B51]">Julho, 2022</p>
              <h4 className="mb-3 text-lg font-bold md:text-2xl dark:text-white text-black/70">
                Senior Frontend Developer - RaroLabs
              </h4>
              <p className="text-sm leading-snug text-opacity-100 md:text-base text-black/70 dark:text-gray-50">
                Criei novas aplicações, aplicando bons padrões de projetos e
                tecnologias atuais do mercado. Demonstrando habilidade em lidar
                com projetos complexos, também atuei na refatoração de grandes
                sistemas, visando a melhoria da qualidade e eficiência dos
                mesmos.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full mb-8 right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-1 py-4 text-left">
              <p className="mb-3 text-base text-[#FF2B51]">Janeiro, 2022</p>
              <h4 className="mb-3 text-lg font-bold md:text-2xl dark:text-white text-black/70">
                Professor - Raro Academy
              </h4>
              <p className="text-sm leading-snug text-opacity-100 md:text-base text-black/70 dark:text-gray-50">
                Como instrutor na Raro Academy, tive a oportunidade de
                compartilhar minha especialização em programação, em React e
                Controle de Estados Globais, incluindo Context, Zustand e Redux.
                Além de corrigir exercícios, tive a responsabilidade de
                estruturar o curso para os alunos, utilizando minha experiência
                e conhecimento.
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-1 py-4 text-right">
              <p className="mb-3 text-base text-[#FF2B51]">Setembro, 2021</p>
              <h4 className="mb-3 text-lg font-bold md:text-2xl dark:text-white text-black/70">
                Frontend Developer - RaroLabs
              </h4>
              <p className="text-sm leading-snug text-opacity-100 md:text-base text-black/70 dark:text-gray-50">
                Tive a oportunidade de desenvolver minhas habilidades em
                desenvolvimento de software, onde tive o desafio de criar um
                novo sistema para uso interno da empresa afim de melhorar a
                experiências de times operacionais.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full mb-8 right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-1 py-4 text-left">
              <p className="mb-3 text-base text-[#FF2B51]">Abril, 2021</p>
              <h4 className="mb-3 text-lg font-bold md:text-2xl dark:text-white text-black/70">
                Junior Frontend Developer - LEB
              </h4>
              <p className="text-sm leading-snug text-opacity-100 md:text-base text-black/70 dark:text-gray-50">
                Na LEB, tive a oportunidade de atuar como desenvolvedor,
                assumindo projetos e tendo autonomia para implementar novas
                features e soluções inovadoras. Com habilidades técnicas sólidas
                e criatividade, trabalhei em equipe para desenvolver soluções
                que atenderam às demandas dos clientes.
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-1 py-4 text-right">
              <p className="mb-3 text-base text-[#FF2B51]">Fevereiro, 2020</p>
              <h4 className="mb-3 text-lg font-bold md:text-2xl dark:text-white text-black/70">
                Junior Frontend Developer - KonoIT
              </h4>
              <p className="text-sm leading-snug text-opacity-100 md:text-base text-black/70 dark:text-gray-50">
                Na DotKon, desenvolvi um sistema para a área da saúde,
                utilizando boas práticas e tecnologias atuais. Minha experiência
                na DotKon me preparou para novos desafios no mercado..
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between w-full mb-8 right-timeline">
            <div className="order-1 w-5/12"></div>

            <div className="order-1 w-5/12 px-1 py-4">
              <p className="mb-3 text-base text-[#FF2B51]">Outubro, 2019</p>
              <h4 className="mb-3 text-lg font-bold text-left md:text-2xl dark:text-white text-black/70">
                Estagiário - LEB
              </h4>
              <p className="text-sm leading-snug text-opacity-100 md:text-base text-black/70 dark:text-gray-50">
                Durante meu estágio na LEB, participei da criação do projeto
                Maleta do Engenheiro, aprendi muito sobre várias tecnologias,
                sempre buscando me atualizar e acompanhar o que existia de novo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
