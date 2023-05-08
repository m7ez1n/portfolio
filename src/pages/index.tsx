import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Content from "@/components/contents";
import SocialMedia from "@/components/social-media";
import ToggleTheme from "@/components/toggle-theme";
import Sidebar from "@/components/sidebar";

import type { ContentOptions } from "@/components/contents";
import { GetStaticProps } from "next";

export default function Home() {
  const [currentContent, setCurrentContent] =
    useState<ContentOptions>("default");

  return (
    <main className="flex flex-col justify-between min-h-screen p-8 select-none min-w-screen dark:bg-black md:p-14">
      <div className="w-full md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-4 mb-12">
          <ToggleTheme />
          <Sidebar
            changeContent={setCurrentContent}
            currentContent={currentContent}
          />
        </div>
        <div className="flex flex-col gap-2 mb-8 md:mb-0">
          <h1 className="font-light text-4xl text-[#FF2B51] tracking-wider text-center md:text-right leading-10 uppercase">
            Mateus
          </h1>
          <h1 className="font-semibold text-4xl text-[#FF2B51] tracking-wider text-center md:text-right leading-10 uppercase">
            Pinheiro
          </h1>
        </div>
      </div>
      <div className="flex md:justify-center">
        <Content current={currentContent} />
      </div>
      <div className="flex flex-col items-center justify-between w-full gap-8 md:gap-0 md:flex-row">
        <div>
          <p className="text-2xl font-semibold leading-10 text-black/70 dark:text-white">
            Web Developer
          </p>
          <p className="text-[#C0C0C0] text-xl leading-10 text-center md:text-left">
            <span className="text-[#FF2B51]">at</span> @
            <a
              target="_blank"
              className="underline"
              href="https://rarolabs.com.br"
            >
              Raro Labs
            </a>
          </p>
        </div>
        <SocialMedia />
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "pt-BR", ["common", "home"])),
    },
  };
};
