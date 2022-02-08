import { create } from '@storybook/theming/create'

export default create({
  base: 'dark',
  appBg: '#212322',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  fontBase: '"InterZeller", Arial, Helvetica, sans-serif',
  fontCode: 'monospace',
  textColor: 'white',

  barTextColor: 'gray',
  barSelectedColor: '#212322',
  barBg: 'white',

  inputBg: 'white',
  inputBorder: 'white',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Example Design System',
  brandUrl: 'https://www.mydatahack.com/',
  brandImage: 'logos/zeller_logo_white.svg',
})
