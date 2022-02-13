/* eslint-disable import/no-extraneous-dependencies */
import commonjs from '@rollup/plugin-commonjs'
import renameNodeModules from 'rollup-plugin-rename-node-modules'
import rename from 'rollup-plugin-rename'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
// import svg from 'rollup-plugin-svg-import'
// import replace from '@rollup/plugin-replace'
// import image from '@rollup/plugin-image'
// import svgr from '@svgr/rollup'
// import url from '@rollup/plugin-url'
// import { baseUrl } from 'rollup-plugin-base-url'
import { visualizer } from 'rollup-plugin-visualizer'

import pkg from './package.json'

/**
 * The build currently includes node_modules: https://github.com/rollup/rollup/issues/3684
 * isolateModules can't tell that node_modules is special, and postcss auto includes a module to inject styles
 * we include a vendor dir for this included module to ensure it gets included
 */

const nodeModulePlugins = [
  renameNodeModules('vendor'),
  rename({
    include: ['**/*.js'],
    map: (name) =>
      name
        .replace('node_modules', 'vendor')
        .replace('../../vendor', '../vendor'),
  }),
]

/**
 * TODO: Fix tree shaking
 * Unless you import via the explicit path, it imports all the styles in the library
 * So the compiled build for a react app goes up to 2.9M, when it could be 660kb
 */

export default {
  input: ['src/index.ts'],
  output: [
    {
      dir: 'dist',
      // file: "dist/index.esm.js",
      format: 'esm',
      sourcemap: false,
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [
    // baseUrl({
    //   url: "./src",
    //   staticImports: true,
    // }),

    typescript({
      sourceMap: false,
      exclude: ['**/*.(test|spec).(ts|tsx)'], // don't generate *.d.ts files
    }),
    // replace({
    //   include: ["./**/*.ts"],
    //   preventAssignment: true,
    //   // Replace ReactComponent to allow resolution of SVG files under Rollup
    //   ReactComponent: "default",
    // }),
    // image(),
    resolve(),
    commonjs(),
    // svgr({
    //   // process SVG to DOM Node or String. Default: false
    //   stringify: false,
    // }),
    // url(),
    ...nodeModulePlugins,
    Boolean(process.env.ANALYZE) &&
      visualizer({
        filename: 'stats.html',
        template: 'treemap',
        open: true,
      }),
  ],
}
