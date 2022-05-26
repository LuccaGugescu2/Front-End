import React from "react";
import { useTranslation } from "react-i18next";
import { Text } from "react-native";

function Title({ text }) {
    const { t } = useTranslation();
    return (
        <Text>
            {t(text)}
        </Text>
    )
}
export default Title;