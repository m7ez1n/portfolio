import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Experience from "@/components/experience";
import Layout from "@/components/layout";

import type { GetStaticProps } from "next";

export default function Experiences() {
  return (
    <Layout>
      <Experience />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "pt-BR", ["common", "home"])),
    },
  };
};
