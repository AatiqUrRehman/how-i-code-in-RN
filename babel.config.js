module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
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
        ],
        alias: {
          "assets": "./src/assets",
          "components": "./src/components",
          "atoms": "./src/components/atoms",
          "molecules": "./src/components/molecules",
          "organisms": "./src/components/organisms",
          "navigations": "./src/navigations",
          "configs": "./src/configs",
          "screens": "./src/screens",
          "services": "./src/services",
          "styles": "./src/styles",
          "store": "./src/store",
          "utils": "./src/utils"
        }
      },
    ],
  ],
}