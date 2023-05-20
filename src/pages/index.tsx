import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Circle from "@/components/circle";
import Layout from "@/components/layout";

import type { GetStaticProps } from "next";

export default function Home() {
  return (
    <Layout>
      <Circle />
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
