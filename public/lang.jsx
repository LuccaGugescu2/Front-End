import React from "react";
import { Image } from 'react-native';
import tw from "twrnc";

const En = () => <Image style={tw`w-8 h-8`} source={require("./assets/united-kingdom.png")} />
const It = () => <Image style={tw`w-8 h-8`} source={require("./assets/italy.png")} />

const Languages = [
    {
        Icon: It,
        label: "it",
        id: 0,

    },
    {
        Icon: En,
        label: "en",
        id: 1,
    },
];

export default Languages;
