import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function About({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col gap-2 text-center md:text-left w-96">
      <p className="text-3xl font-semibold leading-10 text-[#FF2B51]">
        {dict.about.title}
      </p>
      <p className="text-xl font-normal leading-10 text-black dark:text-white">
        {dict.about.description}
      </p>
    </div>
  );
}
