import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

import { getDictionary } from "@/app/[lang]/dictionaries";
import Layout from "@/components/layout";

import Providers from "@/providers";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://m7ez1n.vercel.app"),
  title: "Mateus Pinheiro",
  description:
    "Sou um jovem programador apaixonado por esse mundo e tentando ser um pouco melhor a cada dia.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://m7ez1n.vercel.app",
    siteName: "m7ez1n",
  },
  twitter: {
    images: "/eu.png",
    site: "@site",
    card: "summary",
  },
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pt" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dict = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body>
        <Providers>
          <Layout sidebarDictionary={dict.sidebar}>{children}</Layout>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
