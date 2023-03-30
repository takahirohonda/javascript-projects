# Learning xstate with React

This is based on Frontned Masters course (https://github.com/davidkpiano/frontend-masters-react-workshop).

State Machine

- finite state
- event
- final state

# 1. useMachine

See https://github.com/statelyai/xstate/tree/main/packages/xstate-react

With React, we can use the hook called `useMachine`.

Instead of using `transition` that comes with `createMachine` and then`useReducer`, we can simplify it with `useMachine`.

```js
// instead of this...
const machine = {...}
const reducer = (state, event) => {
  const nextState = machine.transition(state, event);
  return nextState;
}
// inside react component
const [state, dispatch] = useReducer(reducer, machine.initialState)

// We can just do this with useMachine. We call send instead of dispatch with useReducer.
const [state, send] = useMachine(alarmMachine)
```

Example from github

```js
import { useMachine } from "@xstate/react";
import { createMachine } from "xstate";

const toggleMachine = createMachine({
  id: "toggle",
  initial: "inactive",
  states: {
    inactive: {
      on: { TOGGLE: "active" },
    },
    active: {
      on: { TOGGLE: "inactive" },
    },
  },
});

export const Toggler = () => {
  const [state, send] = useMachine(toggleMachine);

  return (
    <button onClick={() => send("TOGGLE")}>
      {state.value === "inactive"
        ? "Click to activate"
        : "Active! Click to deactivate"}
    </button>
  );
};
```

## 2. Eventless transition

For example, if we need to set initial state dynamically, we can set the initial state as `unknown` and set it with always.

```js
const machine = createMachine({
  initial: "unknown",
  states: {
    unknown: {
      always: [
        {
          cond: () => new Date().getHours() > 12,
          target: "morning",
        },
        { target: "day" },
      ],
    },
  },
});
```

# Reference

Drawing -> https://excalidraw.com/
