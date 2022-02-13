import { render, screen } from '@testing-library/react'

import { Animation } from './Animation'
import { slideDownAnimationVariants } from './animationVariants'

describe('Animations', () => {
  it('Should render component by default', () => {
    render(
      <Animation variants={slideDownAnimationVariants}>
        <p>test</p>
      </Animation>
    )

    expect(screen.getByText('test')).toBeInTheDocument()
  })

  it('Should not render component when passing flag', () => {
    render(
      <Animation variants={slideDownAnimationVariants} shouldShow={false}>
        <p>test</p>
      </Animation>
    )

    expect(screen.queryAllByText('test')).toHaveLength(0)
  })
})
