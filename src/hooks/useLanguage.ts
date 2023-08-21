import { LanguageContext, LanguageContextType } from "@contexts/Langunage/Language";
import { useContext } from "react";



const useLang = () => useContext<LanguageContextType>(LanguageContext);

export default useLang;
