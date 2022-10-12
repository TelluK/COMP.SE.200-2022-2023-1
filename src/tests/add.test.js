import add from '../add.js'

describe('Add function test,', () => {

  it('add number 6 to 4, result should be 10', () => {
    const result = add(6,4)
    console.log('add(6,4) result:', result)
    expect(result).toBe(10)

    // shorter way to write test
    expect(add(6,4)).toBe(10)

  })

})
