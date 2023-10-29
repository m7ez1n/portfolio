import Image from "next/image";

import { getDictionary } from "@/app/[lang]/dictionaries";

type ExperienceProps = {
  timestamp: string;
  title: string;
  description: string;
};

export default async function Experiences({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  const experiences: ExperienceProps[] = [
    {
      timestamp: dict.experience.trainee.timestamp,
      title: dict.experience.trainee.title,
      description: dict.experience.trainee.description,
    },
    {
      timestamp: dict.experience.juniorKonoIT.timestamp,
      title: dict.experience.juniorKonoIT.title,
      description: dict.experience.juniorKonoIT.description,
    },
    {
      timestamp: dict.experience.juniorLeb.timestamp,
      title: dict.experience.juniorLeb.title,
      description: dict.experience.juniorLeb.description,
    },
    {
      timestamp: dict.experience.rarolabs.timestamp,
      title: dict.experience.rarolabs.title,
      description: dict.experience.rarolabs.description,
    },
    {
      timestamp: dict.experience.raroacademy.timestamp,
      title: dict.experience.raroacademy.title,
      description: dict.experience.raroacademy.description,
    },
    {
      timestamp: dict.experience.seniorRarolabs.timestamp,
      title: dict.experience.seniorRarolabs.title,
      description: dict.experience.seniorRarolabs.description,
    },
  ];

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
}
