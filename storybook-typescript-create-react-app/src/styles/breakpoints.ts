enum BREAKPOINT_NAME {
  XS = 'XS',
  MD = 'MD',
  LG = 'LG',
  XL = 'XL',
  XXL = 'XXL',
}

type BreakpointProps = {
  [key in BREAKPOINT_NAME]: number
}

export const BREAKPOINT: BreakpointProps = {
  [BREAKPOINT_NAME.XS]: 767,
  [BREAKPOINT_NAME.MD]: 1023,
  [BREAKPOINT_NAME.LG]: 1279,
  [BREAKPOINT_NAME.XL]: 1439,
  [BREAKPOINT_NAME.XXL]: 1919,
}
