import React from "react";
import MenuDropDown from "@components/MenuDropDown";
import { useAppLocale } from "@hooks/locale";
import Languages from "@public/lang";

const LanguageSwitch = () => {
    const { handleChangeLocale } = useAppLocale();

    return (
        <MenuDropDown handleChange={(locale: string) => handleChangeLocale(locale)} initMenuItems={Languages[0]} items={Languages} />
    );
};

export default LanguageSwitch;
