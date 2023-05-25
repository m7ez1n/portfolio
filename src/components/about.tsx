import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  const [texts, setTexts] = useState<{ title: string; description: string }>();

  useEffect(
    () =>
      setTexts({
        title: t("about.title"),
        description: t("about.description"),
      }),
    [t]
  );

  return (
    <div className="flex flex-col gap-2 text-center md:text-left w-96">
      <p className="text-3xl font-semibold leading-10 text-[#FF2B51]">
        {texts?.title}
      </p>
      <p className="text-xl font-normal leading-10 text-black dark:text-white">
        {texts?.description}
      </p>
    </div>
  );
};

export default AboutMe;
