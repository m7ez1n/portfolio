import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Content from "@/components/about";
import Layout from "@/components/layout";

import type { GetStaticProps } from "next";

export default function About() {
  return (
    <Layout>
      <Content />
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
