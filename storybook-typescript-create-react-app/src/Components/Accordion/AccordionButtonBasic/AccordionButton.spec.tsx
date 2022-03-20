import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ButtonBasic as Button } from 'Components/Button'
import { StyledComponentPlaceholder } from 'stories/components/ComponentPlaceholder'

import { AccordionButtonBasic } from './AccordionButtonBasic'

describe('AccordionButton', () => {
  const button = <Button>Button</Button>
  const customClickSpy = jest.fn()
  it('Should render with open accordion and trigger custom click', () => {
    render(
      <AccordionButtonBasic
        isOpen
        button={button}
        onOpenChange={customClickSpy}
        accordionContent={<StyledComponentPlaceholder data-testid="content" />}
      />
    )

    expect(screen.getByTestId('content')).toBeInTheDocument()
    userEvent.click(screen.getByText('Button'))
    expect(customClickSpy).toHaveBeenCalledTimes(1)
  })

  it('Should render and open accordion on btn click', () => {
    render(
      <AccordionButtonBasic
        button={button}
        accordionContent={<StyledComponentPlaceholder data-testid="content" />}
      />
    )
    userEvent.click(screen.getByText('Button'))
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })
})
