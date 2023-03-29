# Learning xstate with vanilla js

Based on Frontend Masters course (https://github.com/davidkpiano/frontend-masters-xstate-v2).

## Lesson 0 - State modelling

Specifying behaviour (given-when-then, etc)

- given is an state
- when is an event
- then is what happens given the current state and event.

**Examples** - including `event-first` vs `state-first` and `state machine` examples.

```js
// Given the status is idle, When Fetch occurs, Then, the status becomes loading
// Event-first approach
// State machine without xstate
// state: { data: null, error: null, status: 'loading', ... }
// event: { type: 'FETCH' }
const transitionEventFirst = (state, event) => {
  switch (event.type) {
    case "FETCH":
      if (state.status === "idle") console.log("starting to fetch data");
      return { status: "loading" };
    default:
      break;
  }
};

// State first
const transitionStateFirst = (state, event) => {
  switch (state.status) {
    case "idle":
      if (event.type === "FETCH") console.log("starting to fetch data");
      return { status: "loading" };
    default:
      break;
  }
};

window.transitionEventFirst = transitionEventFirst;
window.transitionStateFirst = transitionStateFirst;

// With State machine
const machine = {
  initial: "idle",
  states: {
    idle: {
      on: {
        FETCH: "loading",
      },
    },
    loading: {},
  },
};
const transitionStateMachine = (state, event) => {
  const nextState =
    machine.states[state.status].on?.[event.type] ?? state.status;

  return {
    state: nextStatus,
  };
};

window.transitionStateMachine = transitionStateMachine;
```

## Lesson 1 - Use xstate

This start up guide is a good one (https://xstate.js.org/docs/guides/start.html#running-our-machine).

`interpret` function is the mechanism to persist states in the application.

```js
import { createMachine, interpret } from "xstate";

const machine = createMachine({});

const service = interpret(machine).onTransition((state) => console.log(state));

// Start the service
service.start();

// send event
service.send({ type: "RESOLVE" });
```

## Lesson 2 - actions

`Actions` can define side-effect of the event.

https://xstate.js.org/docs/guides/actions.html#api

## Lesson 3 - context

State machine can store context and manipulate the value.

https://stately.ai/docs/xstate/actions/context

## Lesson 4 - Guarded Transition

https://stately.ai/docs/xstate/transitions-and-choices/guards

`Eventless transition` (specified by always): if the condition is met, regardless of the event, the state transition is going to be taken.

## Lesson 5 - compount states

We can create child states to group the related states together. This is an organisational mechanism to simplify state machine.

## Lesson 6 - Parallel States

We can use `type: "parallel"` to create parallel states. Just like the compound states, parallel states are the organisational mechanism to reduce the transitions and complexity of the state machine.

```js
const machine = createMachine({
  type: "parallel",
  states: {
    state1: {
      initial: "state1-initial",
      states: {},
    },
    state2: {
      initial: "state2-initial",
      states: {},
    },
  },
});
```

## Lesson 7 - Final State

We can add `type: done` in any state.

```js
{
  states: {
    loading: {
      on: {
        SUCCESS: {
          target: 'loaded'
        }
      }
    },
    loaded: {
      type: 'final',
    }
  }
}
```

## Lesson 8 - History States

Useful for remembering what the state was in previously and go back to it.

https://stately.ai/docs/states/history-states

## Lesson 9 - Actor Model

https://stately.ai/docs/xstate/actors/intro

with vanilla js

```js
function countBehavior(sate, event) {
  if (event.type === "INC") {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  return state;
}
function createActor(behaviour, initialState) {
  let currentState = behaviour(initialState);
  const listeners = new Set();
  return {
    send: (event) => {
      currentState = behaviour(currentState, event);
      listeners.forEach((listener) => {
        listener(currentState);
      });
    },
    subscribe: (listener) => {
      listeners.add(listener);
      listener(currentState);
    },
  };
}

const actor = createActor(countBehaviour, 0);

windows.actor = actor;
```

with xstate

use `invoke` attribute on a state to invoke an actor in the machine.

```js
const machine = createMachine({
  invoke: {
    src: (ctx, e) =>
      new Promise((res) => {
        setTimeout(() => {
          res(42);
        }, 1000);
      }),
  },
});
```
