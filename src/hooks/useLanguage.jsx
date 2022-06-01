import lang from "../constans/lang";

function useLanguage() {
    function languageSelector() {
        const language = window.navigator.language.split("-")[0]
        for (let i = 0; i < lang.length; i++) {
            if (language === lang[i].lang) {
                return i
            }
        }
    }

    return lang[languageSelector()]
}

export default useLanguage;