import { render } from '@testing-library/react'
import { COLOR } from 'utils'

import { Subtitle, Title } from './Typography'

const checkElementColor = (id: string, color: string) => {
  const textElement = document.getElementById(id)
  const textStyle = window.getComputedStyle(textElement as HTMLElement)
  expect(textStyle.color).toContain(color)
}

describe('<Title />', () => {
  it('Should appear in the default color if no color is passed to the title', () => {
    render(<Title id="title" />)
    checkElementColor('title', COLOR.BLACK)
  })
  it('Should appear in the color that passed to the title', () => {
    render(<Title color={COLOR.BLUE_400} id="title" />)
    checkElementColor('title', COLOR.BLUE_400)
  })
})

describe('<Subtitle />', () => {
  it('Should appear in the default color if no color is passed to the sub title', () => {
    render(<Subtitle id="sub-title" />)
    checkElementColor('sub-title', COLOR.GREY_550)
  })
  it('Should appear in the color that passed to the sub title', () => {
    render(<Subtitle customColor={COLOR.BLUE_400} id="sub-title" />)
    checkElementColor('sub-title', COLOR.BLUE_400)
  })
})
