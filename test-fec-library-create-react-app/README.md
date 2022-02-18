# Testing frontend component library

This project is to test React libraries being developed locally.

## 1. yarn link

https://classic.yarnpkg.com/en/docs/cli/link

1. Run `yarn link` in the library repo and you get output like this:

```
yarn link v1.22.17
success Registered "@mdhnpm/cube-loading-spinner".
info You can now run `yarn link "@mdhnpm/cube-loading-spinner"` in the projects where you want to use this package and it will be used instead.
```

2. In this repo and run `yarn link "@mdhnpm/cube-loading-spinner"` (from the output above). This will create a linked folder in `node_module`. From here, we can just use the library.

3. We can unlink the dependencies. Just run `yarn unlink` in the lib repo. Alternatively, we can run `yarn unlink @mdhnpm/cube-loading-spinner` in this repo to unlink the package only from this repo (when multiple test repos are using the link to test the lib).

**Troubleshooting**

```
react.development.js:1476 Uncaught Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
```

This problem can also come up when you use npm link or an equivalent. In that case, your bundler might “see” two Reacts — one in application folder and one in your library folder. Assuming myapp and mylib are sibling folders, one possible fix is to run npm link ../myapp/node_modules/react from mylib. This should make the library use the application’s React copy.

From cube-loading-spinner
yarn link ../javascript-projects/test-fec-library-create-react-app/node_modules/react

---

## 2. Manually move the lib

It is possible... Not recommended, though

**Steps**

1. Build module

```bash
cd storybook-typescript-create-react-app
yarn build
```

2. Move dist folder from `storybook-typescript-create-react-app` to `afec` folder. Do not delete `package.json` file.

3. Install dependencies and copy & paste `afec` folder into `node_module`.

4. Go into `node_module/afec` and install module

```bash
cd node_module/afec
yarn install
```

5. Then start react app

```bash
yarn start
```

# Appendix

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```bash
yarn create react-app test-fec-library-create-react-app --template typescript
```

# in progress troubleshooting

yarn --registry https://npm.pkg.github.com

yarn add https://npm.pkg.github.com/npm/@mydatahack/mdh-design-system-storybook@1.4.0

taka@192-168-1-110 test-fec-library-create-react-app % npm i @mdhnpm/cube-loading-spinner --registry https://npm.pkg.github.com
npm ERR! code E401
npm ERR! Unable to authenticate, need: Basic realm="GitHub Package Registry"

git+ssh://git@github.com:estimateone/frontend-components.git#9.4.1

git+ssh://git@github.com:mydatahack/mdh-design-system-storybook#1.4.0

git+ssh://git@github.com:mdhnpm/cube-loading-spinner #1.4.0
