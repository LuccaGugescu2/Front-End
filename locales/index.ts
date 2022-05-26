import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en";
import it from "./it";

const resources = {
    "it": it,
    "en": en
};

const languageDetector = {
    type: "languageDetector",
    async: true,
    detect: async (callback) => {
        const storedLanguage = await AsyncStorage.getItem("@AppIntl:language");
        if (storedLanguage) {
            return callback(storedLanguage);
        }

        let phoneLanguage = Localization.locale;

        phoneLanguage = phoneLanguage.replace("_", "-");

        return callback(phoneLanguage);
    },
    init: () => { },
    cacheUserLanguage: (language) => {
        // Essa função sera chamada assim que o callback
        // da função 'detect' for executado. Aqui podemos
        // salvar o idioma do usuário no AsyncStorage para
        // persistirmos sua escolha nas próximas execuções do app
        AsyncStorage.setItem("@AppIntl:language", language);
    },
};

i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        resources,
        fallbackLng: "en-US",
        // debug: true,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
