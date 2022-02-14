# Testing svgr + rollup to make icon component library

Template to build an icon component library for React with SVGR (https://github.com/gregberge/svgr) and Rollup.

SVGR imports svg files and create react components in the specified folder. `svgr -d src asset` will create react components in the `src` folder from the `asset` folder.

This solution is not appropriate for this setup.

```bash
# the command below creates js files in svg folder
$ svgr -d src assets
assets/logos/zeller_logo_white.svg -> src/logos/ZellerLogoWhite.js
assets/svg/close.svg -> src/svg/Close.js
assets/svg/loader-small-light.svg -> src/svg/LoaderSmallLight.js
assets/svg/loader-small.svg -> src/svg/LoaderSmall.js
```

**Installation**

Apart from the initial setup (see Appendix), we are installing SVGR.

```yarn
yarn add @svgr/cli -D
```
