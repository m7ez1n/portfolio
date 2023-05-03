import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
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
