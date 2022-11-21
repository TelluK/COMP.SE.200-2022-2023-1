import defaultTo from '../defaultTo.js'

describe('DefaultTo function test,', () => {
  const defaultString = "returns default value"

  it('value to check is undefined, should return default value', () => {
    const result = defaultTo(undefined, defaultString)
    expect(result)
      .toBe(defaultString)
      .toBeString()
      .toHaveLength(defaultString.length)
  })

  it('both values are undefined, should return undefined', () => {
    const result = defaultTo(undefined, undefined)
    expect(result).toBe(undefined)
  })

  it('value to check is correct string, should return that string', () => {
    const correctString = 'correct value'
    const result = defaultTo(correctString, defaultString)
    expect(result)
      .toBe(correctString)
      .toBeString()
      .toHaveLength(correctString.length)
      .not.toBeEmpty()
      .not.toBe(defaultString)
  })

})