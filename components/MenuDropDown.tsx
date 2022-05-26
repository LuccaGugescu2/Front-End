import { Box, Menu } from "native-base";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text } from "react-native";
import tw from "twrnc";
/**
 * @param initMenuItems icon + label to display as first dropdown item 
 */

const MenuDropDown = ({ initMenuItems, items, handleChange }) => {
    const { t } = useTranslation(["common"]);

    let [selected, setSelected] = useState(initMenuItems);
    return (
        <Box h="8" w="32" alignItems="flex-start">
            <Menu
                w="200"
                trigger={(triggerProps) => {
                    return (
                        <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                            <selected.Icon />
                        </Pressable>
                    );
                }}
            >
                {items.map((item) => {
                    return (
                        <Menu.Item
                            _hover={{ bg: '#86efac' }}

                            onPress={() => {
                                setSelected({ Icon: item.Icon, label: item.label });
                                handleChange(item.label);
                            }
                            }
                            style={tw`flex items-center flex-row justify-between`}
                            key={item.label}
                        >
                            <item.Icon />
                            <Text>
                                {t(`common:${item.label}`)}
                            </Text>
                        </Menu.Item>
                    );
                })}
            </Menu>
        </Box>
    );
};

export default MenuDropDown;
