import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/react'

import { ButtonBasic as ButtonBasicComponent } from './ButtonBasic'
import { BUTTON_SIZE, ButtonBasicProps } from './ButtonBasic.types'

export default {
  title: 'Components/Button',
  component: ButtonBasicComponent,
}

const ButtonBasicTemplate: Story<ButtonBasicProps> = (args) => (
  <ButtonBasicComponent {...args} />
)

export const ButtonBasic = ButtonBasicTemplate.bind({})

ButtonBasic.args = {
  dataTestId: 'button-default',
  children: 'Save',
  onClick: action('onClick'),
  size: BUTTON_SIZE.XSMALL,
}
