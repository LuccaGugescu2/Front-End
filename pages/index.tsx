// @generated: @expo/next-adapter@2.1.52
import React, { Suspense, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import "../locales/index";
import { useDeviceContext } from 'twrnc';
import tw from "twrnc";
import LanguageProvider from '../hooks';
import LanguageSwitch from '@components/app/LanguageSwitch';
import { NativeBaseProvider } from "native-base";
import Title from '@components/Title';

const LoadingContainer: React.FC = () => {
    return (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
            <ActivityIndicator size={64} color="#e4007d" />
        </View>
    );
};

export default function App() {
    useDeviceContext(tw);
    return (

        <NativeBaseProvider>
            <Suspense fallback={<LoadingContainer />}>
                <LanguageProvider>
                    <View style={tw`bg-red-300`}>
                        <Title text="common:title" />
                        <LanguageSwitch />
                    </View>
                </LanguageProvider>
            </Suspense>
        </NativeBaseProvider>
    );
}
