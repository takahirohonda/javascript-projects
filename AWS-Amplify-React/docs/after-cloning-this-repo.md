# After cloning this repo

1. Make sure `@aws-amplify/cli` is installed globally.

2. Create a user with the amplify admin role with (see https://docs.amplify.aws/start/getting-started/installation/q/integration/react/)

3. Initialise amplify

```bash
# Not sure if we need this one? init may be sufficient
amplify configure

# Go to the root dir and init
amplify init
```

4. Push resources to the cloud

```bash
amplify push
```

5. Install dependencies and start the app ✨

```bash
yarn install
yarn start
```
