import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ButtonBasic } from './ButtonBasic'

describe('ButtonBasic', () => {
  it('Should render the component correctly', () => {
    const { getByRole, getByTestId } = render(<ButtonBasic>Save</ButtonBasic>)

    expect(getByRole('button')).toBeInTheDocument()
    expect(getByTestId('button-default')).toBeInTheDocument()
  })

  it('Should invoke click handler on click', () => {
    const handleClick = jest.fn()

    const { getByRole } = render(
      <ButtonBasic onClick={handleClick}>Save</ButtonBasic>
    )

    userEvent.click(getByRole('button'))

    expect(handleClick).toBeCalledTimes(1)
  })

  it('Should render loader when loading.', () => {
    render(<ButtonBasic isLoading />)

    expect(screen.getByTestId('button-loader')).toHaveStyle('display: flex')
  })
})
