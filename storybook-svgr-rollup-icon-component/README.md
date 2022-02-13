# Testing svgr + rollup to make icon component library

Template to build an icon component library for React with SVGR (https://github.com/gregberge/svgr) and Rollup.

SVGR imports svg files and create react components in the specified folder. `svgr -d src asset` will create react components in the `src` folder from the `asset` folder.

```bash
# the command below creates js files in svg folder
$ svgr -d src assets
assets/logos/zeller_logo_white.svg -> src/logos/ZellerLogoWhite.js
assets/svg/close.svg -> src/svg/Close.js
assets/svg/loader-small-light.svg -> src/svg/LoaderSmallLight.js
assets/svg/loader-small.svg -> src/svg/LoaderSmall.js
```

## 1. Installation

Apart from the initial setup (see Appendix), we are installing SVGR.

```yarn
yarn add @svgr/cli -D
```

# Appendix

This project is based on `../storybook-typescript-create-react-app`. It was created by `create-react-app`.

```bash
# Create typescript react project
yarn create react-app storybook-svgr-rollup-icon-component --template typescript
# Then, install storybook
cd storybook-svgr-rollup-icon-component
npx sb init
```

yarn create react-app test-fec-library-create-react-app --template typescript
