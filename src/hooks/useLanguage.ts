import { LanguageContext } from "@contexts/Langunage/Language";
import { useContext } from "react";

interface LanguageProps {
    lang: "en" | "ne";
    setLang: (lang: "en" | "ne") => void;
}
const useLang = () => useContext<LanguageProps>(LanguageContext);

export default useLang;
