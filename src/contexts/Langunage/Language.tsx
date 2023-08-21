import { langungeType } from "@constants/multiLanguage";
import { createContext, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}
export interface LanguageContextType {
  lang: langungeType;
  setLang: React.Dispatch<React.SetStateAction<langungeType>>;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: "ne",
  setLang: () => {},
});

const LanguageProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState<langungeType>(
    JSON.parse(localStorage.getItem("lang") ?? "ne")
  );

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ lang: language, setLang: setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
