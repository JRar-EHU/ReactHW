import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en-US/translations.json";
import translationRU from "./locales/ru-RU/translations.json";
import translationDE from "./locales/de-DE/translations.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      "en-US": {
        translation: translationEN,
      },
      "ru-RU": {
        translation: translationRU,
      },
      "de-DE": {
        translation: translationDE,
      },
    },
    lng: "en-US",
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: true,
    },
  })
  .catch(console.error);

export default i18n;
