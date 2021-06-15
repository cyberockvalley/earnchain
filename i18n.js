
module.exports = {
  loadLocaleFrom: (lang, ns) =>
  // You can use a dynamic import, fetch, whatever. You should
  // return a Promise with the JSON file.
  import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default),
  locales: ['en', 'ru', 'de', 'es', 'fr', 'it', 'az', 'ar', 'he'],
  localesMap: {
      en: {
        countryCode: "US"
      },
      ru: {
        countryCode: "ru"
      },
      de: {
        countryCode: "de"
      },
      es: {
        countryCode: "es"
      },
      fr: {
        countryCode: "fr"
      },
      it: {
        countryCode: "it"
      },
      az: {
        countryCode: "az"
      },
      ar: {
        countryCode: "ar",
        isRTL: true
      },
      he: {
        countryCode: "he"
      },
  },

  defaultLocale: 'en',
  pages: {
    "*": ["common", "header", "footer"],
    "/": ["home"],
    "/n/[ref]": ["home"],
    "/airdrop": ["airdrop"],
    "/projects/": ["matrix"],
    "/projects/index": ["matrix"],
    "/projects/matrix": ["matrix"],
    "/login": ["login"],
    "/register": ["reg"],
    "/dashboard": ["dash"],
    "/slots/": ["dash", "slot"],
    "/404": ["error"],
  }
}