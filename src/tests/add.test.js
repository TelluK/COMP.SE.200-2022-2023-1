import add from '../add.js'

describe('Add function test,', () => {

  it('add number 6 to 4, result should be 10', () => {
    const result = add(6, 4)
    expect(result).toBe(10)
  })


  it('add number -6 to -40, result should be -46', () => {
    const result = add(-6, -40)
    expect(result).toBe(-46)
  })

  it('add number 6 to -40, result should be -34', () => {
    const result = add(6, -40)
    expect(result).toBe(-34)
  })

  it('add null to null, result should be 0', () => {
    const result = add(null, null)
    expect(result).toBe(0)
  })

  it('add undefined to undefined, result should be 0', () => {
    const result = add(undefined, undefined)
    expect(result).toBe(0)
  })

})
