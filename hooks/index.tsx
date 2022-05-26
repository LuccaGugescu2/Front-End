import React from "react";
import { AppLocaleProvider } from "./locale";

const LanguageProvider: React.FC = ({ children }) => {
    return <AppLocaleProvider>{children}</AppLocaleProvider>;
};

export default LanguageProvider;
