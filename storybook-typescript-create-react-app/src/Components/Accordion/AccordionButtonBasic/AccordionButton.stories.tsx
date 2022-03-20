import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ButtonBasic as Button } from 'Components/Button'
import { StyledComponentPlaceholder } from 'stories/components/ComponentPlaceholder'

import { AccordionButtonProps } from '../Accordion.types'
import { AccordionButtonBasic as AccordionButtonBasicComponent } from './AccordionButtonBasic'

export default {
  title: 'Components/Accordion',
  component: AccordionButtonBasicComponent,
  args: {
    button: <Button>Button</Button>,
    accordionContent: <StyledComponentPlaceholder />,
    isOpen: false,
  },
} as ComponentMeta<React.FC<any>>

export const AccordionButtonBasic: ComponentStory<
  React.FC<AccordionButtonProps>
> = ({ accordionContent, button, isOpen }) => {
  return (
    <AccordionButtonBasicComponent
      button={button}
      accordionContent={accordionContent}
      isOpen={isOpen}
    />
  )
}
