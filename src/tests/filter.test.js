import filter from "../filter";

describe('Filter function test,', () => {

  const products = [
    { 'product': 'carrot', 'inSeason': true },
    { 'product': 'orange',  'inSeason': false }
  ]

  it('filter array products, should return correct array', () => {
    const result = filter(products, ({ inSeason }) => inSeason)
    const onlyInSeason = [ { 'product': 'carrot', 'inSeason': true } ]
    // console.log(onlyInSeason)
    expect(result)
      .toEqual(onlyInSeason)
      .toBeArray()
      .toBeArrayOfSize(1)

  })

  // it('filter empty array, should return empty array', () => {
  //   const emptyArray = []
  //   const result = filter( emptyArray , ({ inSeason }) => inSeason)
  //   console.log(result)
  //   expect(result)
  //     .toEqual(emptyArray)
  //     .toBeArray()
  //     .toBeArrayOfSize(0)
  // })

  // it('filter null value, should return empty array', () => {
  //   const result = filter( null , ({ inSeason }) => inSeason)
  //   console.log(result)
  //   expect(result)
  //     .toEqual(emptyArray)
  //     .toBeArray()
  //     .toBeArrayOfSize(0)
  // })

})