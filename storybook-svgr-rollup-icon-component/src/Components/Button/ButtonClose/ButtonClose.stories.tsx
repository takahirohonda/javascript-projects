import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/react'

import { ButtonClose as ButtonCloseComponent } from './ButtonClose'
import { ButtonCloseProps } from './ButtonClose.types'

export default {
  title: 'Components/Button',
  component: ButtonCloseComponent,
}

/* eslint-disable react/function-component-definition */
const ButtonCloseTemplate: Story<ButtonCloseProps> = (args) => (
  <ButtonCloseComponent {...args} />
)

export const ButtonClose = ButtonCloseTemplate.bind({})

ButtonClose.args = {
  dataTestId: 'button-close',
  id: 'close-button',
  onClick: action('onClick'),
}
