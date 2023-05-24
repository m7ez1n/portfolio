/** @type import("next").I18NConfig */
const i18n= {
  defaultLocale: "pt-BR",
  locales: ["pt-BR", "en-US"],
}

/** @type import("next-i18next").UserConfig */
const next18nextConfig = {
	i18n,
	keySeparator: ".",
	nsSeparator: ":",
	localePath: "./locales",
	reloadOnPrerender: process.env.NODE_ENV === "development"
};

module.exports = next18nextConfig;