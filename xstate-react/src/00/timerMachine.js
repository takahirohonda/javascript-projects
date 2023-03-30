export const timerMachineConfig = {
  // ...
  initialState: 'idle',
  states: {
    idle: {
      on: {
        'TOGGLE': {
          target: 'running',
        }
      }
    },
    running: {
      on: {
        'TOGGLE': {
          target: 'paused'
        }
      }
    },
    paused: {
      on: {
        'TOGGLE': {
          target: 'running'
        },
        'RESET': {
          target: 'idle'
        }
      }
    }
  }

};

// state -> { status: 'idle' }

export const timerMachine = (state, event) => {
  // Add the logic that will read the timerMachineConfig
  // and return the next state, given the current state
  // and event received

  // ...
  const nextState = timerMachineConfig.states[state]?.on?.[event.type]?.target

  if (nextState) {
    return nextState;
  }
  return state;
};
