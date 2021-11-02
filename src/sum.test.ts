import { sum } from './sum'

describe('sum', () => {
  it('sums 2 numbers together', () => {
    expect(sum(2, 5)).toBe(7)
  })
})
