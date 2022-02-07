import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "esm",
      sourcemap: false,
      preserveModules: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      sourceMap: false,
      useTsconfigDeclarationDir: true,
      exclude: ["**/*.(test|spec).(ts|tsx)"],
    }),
    Boolean(process.env.ANALYZE) &&
      visualizer({
        filename: "stats.html",
        template: "treemap",
        open: true,
      }),
  ],
};
