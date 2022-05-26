// @generated: @expo/next-adapter@2.1.52
// Learn more: https://docs.expo.dev/guides/using-nextjs/

module.exports = {
    presets: ['@expo/next-adapter/babel'], plugins: ['react-native-reanimated/plugin',
        [
            "module-resolver",
            {
                root: ["./"],
                extensions: [
                    '.ios.ts',
                    '.android.ts',
                    '.ts',
                    '.ios.tsx',
                    '.android.tsx',
                    '.tsx',
                    '.jsx',
                    '.js',
                    '.json',
                    ".web.js"
                ],
                alias: {
                    "@components": ["./components"],
                    "@hooks": ["./hooks"],
                    "@utils": ["./utils"],
                    "@public": ["./public"],
                    "@interfaces": ["./interfaces"],
                    "@navigation": ["./interfaces"],
                },
            },
        ],
    ],
};
