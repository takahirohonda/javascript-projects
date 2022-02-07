export enum EASING_FUNCTION {
  OUT,
  IN_OUT,
  LINEAR,
}

export enum DURATION {
  EXTRA_FAST,
  FAST,
  NORMAL,
  SLOW,
  EXTRA_SLOW,
}

const EASING_FUNCTION_VALUE: Record<EASING_FUNCTION, string> = {
  [EASING_FUNCTION.OUT]: 'cubic-bezier(0.5, 0.5, 0.25, 1)',
  [EASING_FUNCTION.IN_OUT]: 'cubic-bezier(0.66, 0, 0.34, 1)',
  [EASING_FUNCTION.LINEAR]: 'linear',
}

const DURATION_VALUE = {
  [DURATION.EXTRA_FAST]: '100ms',
  [DURATION.FAST]: '200ms',
  [DURATION.NORMAL]: '300ms',
  [DURATION.SLOW]: '400ms',
  [DURATION.EXTRA_SLOW]: '500ms',
}

export const getTransition = (
  duration: DURATION,
  easingFunction: EASING_FUNCTION
) => {
  return `${DURATION_VALUE[duration]} ${EASING_FUNCTION_VALUE[easingFunction]}`
}
