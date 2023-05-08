import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";

import type { AppProps } from "next/app";

import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo
        title="Mateus Pinheiro"
        description="Sou um jovem programador apaixonado por esse mundo e tentando ser um pouco melhor a cada dia."
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: "https://m7he4rt.vercel.app",
          siteName: "m7he4rt",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "/eu.png",
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
