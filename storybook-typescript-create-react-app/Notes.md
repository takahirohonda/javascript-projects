In progress

`tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "esnext",
    "lib": ["dom", "dom.iterable", "esnext"],
    "baseUrl": "src",
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "noEmit": true,
    "noImplicitAny": true,
    "jsx": "react-jsx",
    "noFallthroughCasesInSwitch": true,
    "declaration": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

`rollup.config.js`

```js
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
      exclude: ["**/*.(test|spec).(ts|tsx)"],
      tsconfig: "./tsconfig.json",
    }),
    Boolean(process.env.ANALYZE) &&
      visualizer({
        filename: "stats.html",
        template: "treemap",
        open: true,
      }),
  ],
};
```
