import { ReactNode } from 'react'

export interface AccordionButtonProps {
  button: ReactNode
  accordionContent: ReactNode
  isOpen?: boolean
  onOpenChange?: () => void
}
