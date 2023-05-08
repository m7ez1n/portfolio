import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2 text-center md:text-left w-96">
      <p className="text-3xl font-semibold leading-10 text-[#FF2B51]">
        {t("about.title")}
      </p>
      <p className="text-xl font-normal leading-10 text-black dark:text-white">
        {t("about.description")}
      </p>
    </div>
  );
};

export default AboutMe;
