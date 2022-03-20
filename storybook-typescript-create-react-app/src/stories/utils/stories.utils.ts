import { COLOR } from 'utils'

export const colorArgType = {
  options: Object.keys(COLOR),
  mapping: COLOR,
  control: { type: 'select' },
}
