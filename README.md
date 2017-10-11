# pumpup-lite

A simple pumpup demo app built with react native and redux. The project is based on [react-native-starter-app](https://github.com/mcnamee/react-native-starter-app)

## Getting Started

1. Clone this project `git clone https://github.com/Xuefeng-Zhu/pumpup-lite.git`
1. Run `yarn/npm install` from root directory
1. Start the app in `npm run ios/android`

---

## Understanding the File Structure

- `/android` - The native Android stuff
- `/ios` - The native iOS stuff
- `/src` - Contains the full React Native App codebase
  - `/components` - 'Dumb-components' / presentational. [Read More &rarr;](/src/components/README.md)
  - `/constants` - App-wide variables and config
  - `/containers` - 'Smart-components' / the business logic. [Read More &rarr;](/src/containers/README.md)
  - `/images` - Self explanatory right?
  - `/lib` - Utils, custom libraries, functions
  - `/navigation`- Routes - wire up the router with any & all screens. [Read More &rarr;](/src/navigation/README.md)
  - `/redux` - Redux Reducers & Actions grouped by type. [Read More &rarr;](/src/redux/README.md)
  - `/theme` - Theme specific styles and variables
