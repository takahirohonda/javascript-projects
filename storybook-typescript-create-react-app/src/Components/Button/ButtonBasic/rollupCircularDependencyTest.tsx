import { screen } from '@testing-library/react'

export const expectButtonLoader = () => {
  const button = screen.getByRole('button')
  expect(button).toBeInTheDocument()

  const loader = screen.getByTestId('button-loader')
  const buttonContent = screen.getByTestId('button-content')

  expect(loader).toHaveStyle('display: flex')
  expect(buttonContent).toHaveStyle('opacity: 0')
  expect(button.closest('button')).toBeDisabled()
}

export const testingRollupCircularDependencies = () => {
  console.log('hello')
}
