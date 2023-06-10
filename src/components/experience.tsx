import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useState } from "react";

type ExperienceProps = {
  timestamp: string;
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
          timestamp: t("experience.trainee.timestamp"),
          title: t("experience.trainee.title"),
          description: t("experience.trainee.description"),
        },
        {
          timestamp: t("experience.juniorKonoIT.timestamp"),
          title: t("experience.juniorKonoIT.title"),
          description: t("experience.juniorKonoIT.description"),
        },
        {
          timestamp: t("experience.juniorLeb.timestamp"),
          title: t("experience.juniorLeb.title"),
          description: t("experience.juniorLeb.description"),
        },
        {
          timestamp: t("experience.rarolabs.timestamp"),
          title: t("experience.rarolabs.title"),
          description: t("experience.rarolabs.description"),
        },
        {
          timestamp: t("experience.raroacademy.timestamp"),
          title: t("experience.raroacademy.title"),
          description: t("experience.raroacademy.description"),
        },
        {
          timestamp: t("experience.seniorRarolabs.timestamp"),
          title: t("experience.seniorRarolabs.title"),
          description: t("experience.seniorRarolabs.description"),
        },
      ]),
    [t]
  );

  return (
    <div className="sticky ml-0 md:ml-12 lg:w-2/3">
      <div className="container w-full h-full mx-auto">
        <div className="relative h-full p-10 overflow-hidden wrap">
          <div className="md:border-2-2 md:absolute md:h-4/5 md:border-2 md:right-1/2 md:border-[#E40037] md:rounded-[1%]" />
          <div className="md:border-2-2 md:absolute md:h-4/5 md:border-2 md:left-1/2 md:border-[#E40037] md:rounded-[1%]" />
          {experiences
            .map((item) => (
              <div
                className="flex flex-col items-center justify-between w-full mb-8 md:odd:flex-row-reverse md:even:flex-row "
                key={`key-experience-${item.title}`}
              >
                <div className="order-1 md:w-5/12"></div>
                <div className="order-1 px-1 py-4 md:w-5/12 odd:text-right even:text-left">
                  <p className="mb-3 text-base text-[#FF2B51]">
                    {item.timestamp}
                  </p>
                  <h4 className="mb-3 text-lg font-bold md:text-2xl dark:text-white text-black/70">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-snug text-opacity-100 md:text-base text-black/70 dark:text-gray-50">
                    {item.description}
                  </p>
                </div>
              </div>
            ))
            .reverse()}
          <Image
            src="/astronaut.svg"
            alt="Astronaut with computer and rocket"
            className="hidden mx-auto md:block md:mt-28"
            priority
            width={350}
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
