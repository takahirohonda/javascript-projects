# Using statly to visualise state machine

https://stately.ai/registry/new

```js
createMachine({
  id: "Player Machine",
  initial: "loading",
  states: {
    loading: {
      on: {
        LOADED: "playing",
      },
    },
    playing: {
      on: {
        PAUSE: "paused",
      },
    },
    paused: {
      on: {
        PLAY: "playing",
      },
    },
  },
  predictableActionArguments: true,
  preserveActionOrder: true,
});
```
