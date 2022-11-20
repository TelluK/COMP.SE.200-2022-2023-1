import isEmpty from "../isEmpty"

describe('IsEmpty function test,', () => {

  const vegetables = ['carrot', 'onion', 'beetroot', 'leek']
  const carrotString = 'carrot'
  const personObject = { 'name': 'Jenny' }

  const fullSet = new Set()
  fullSet.add(1)
  fullSet.add(3)

  it('check if null value is empty, should return true', () => {
    const result = isEmpty(null)
    expect(result)
      .toBe(true)
      .toEqual(true)
  })

  it('check if number 20 is empty, should return true', () => {
    const result = isEmpty(20)
    expect(result)
      .toBe(true)
      .toEqual(true)
  })

  it('check if string value is empty, should return false', () => {
    const result = isEmpty(carrotString)
    expect(result)
      .toBe(false)
      .toEqual(false)
  })


  it('check if vegetables array is empty, should return false', () => {
    const result = isEmpty(vegetables)
    expect(result)
      .toBe(false)
      .toEqual(false)
  })

  it('check if person object is empty, should return false', () => {
    const result = isEmpty(personObject)
    expect(result)
      .toBe(false)
      .toEqual(false)
  })

  it('check if set is empty, should return false', () => {
    const result = isEmpty(fullSet)
    expect(result)
      .toBe(false)
      .toEqual(false)
  })

})