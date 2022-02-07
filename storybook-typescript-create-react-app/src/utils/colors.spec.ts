import * as Colors from './colors'

describe('createFill', () => {
  it('should return fill with rgba formatted color when color is not in rgba, hsla or # color format', () => {
    const color = '232, 242, 251'
    const expected = `fill: rgba(${color}, 1)`
    const result = Colors.createFill(color)
    expect(result).toEqual(expected)
  })
})
