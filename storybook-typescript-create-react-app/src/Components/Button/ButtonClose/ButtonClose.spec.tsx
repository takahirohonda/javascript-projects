import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ButtonClose } from './ButtonClose'

describe('ButtonClose', () => {
  it('Should render the component correctly', () => {
    const { getByRole, getByTestId } = render(
      <ButtonClose onClick={jest.fn()} />
    )

    expect(getByRole('button')).toBeInTheDocument()
    expect(getByTestId('button-close')).toBeInTheDocument()
  })

  it('Should invoke click handler on click', () => {
    const handleClick = jest.fn()

    const { getByRole } = render(<ButtonClose onClick={handleClick} />)

    userEvent.click(getByRole('button'))

    expect(handleClick).toBeCalledTimes(1)
  })
})
