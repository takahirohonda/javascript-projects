import { useEffect, useState } from 'react'
import { Animation } from 'utils/Animation/Animation'
import { slideDownAnimationVariants } from 'utils/Animation/animationVariants'

import {
  StyledAccordionButtonWrapper,
  StyledAccordionWrapper,
} from '../Accordion.styled'
import { AccordionButtonProps } from '../Accordion.types'

export const AccordionButtonBasic = ({
  onOpenChange,
  button,
  accordionContent,
  isOpen = false,
}: AccordionButtonProps) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(isOpen)

  const handleClick = () => {
    setIsAccordionOpen((prevState) => !prevState)
    onOpenChange?.()
  }

  useEffect(() => {
    setIsAccordionOpen(isOpen)
  }, [isOpen])

  return (
    <>
      <StyledAccordionButtonWrapper onClick={handleClick}>
        {button}
      </StyledAccordionButtonWrapper>
      <StyledAccordionWrapper>
        <Animation
          variants={slideDownAnimationVariants}
          shouldShow={isAccordionOpen}
        >
          {accordionContent}
        </Animation>
      </StyledAccordionWrapper>
    </>
  )
}
