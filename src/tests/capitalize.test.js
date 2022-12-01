import capitalize from '../capitalize.js'


describe('Capitalize function test 1,', () => {

  const WORD_1 = "POTATO";
  it(`${WORD_1} should be Potato`, () => {
    const result = capitalize(WORD_1)
    const length = WORD_1.length;
    console.log(`capitalize(${WORD_1}), result: `, result)
    expect(result)
    .toBe('Potato')
    .toHaveLength(length)
    .not.toBeEmpty()
    .not.toBeNull()

  })

  const WORD_2 = "cArRoT";
  it(`${WORD_2} should be Carrot`, () => {
    const result = capitalize(WORD_2)
    const length = WORD_2.length;
    console.log(`capitalize(${WORD_2}), result: `, result)
    expect(result)
    .toBe('Carrot')
    .toHaveLength(length)
    .not.toBeEmpty()
    .not.toBeNull()

  })
  const WORD_3 = "onions and cucumbers";
  it(`${WORD_3} should be Onions and cucumbers`, () => {
    const result = capitalize(WORD_3)
    const length = WORD_3.length;
    console.log(`capitalize(${WORD_3}), result: `, result)
    expect(result)
    .toBe('Onions and cucumbers')
    .toHaveLength(length)
    .not.toBeEmpty()
    .not.toBeNull()

  })
    const WORD_4 = "åS®¸∂¸¸®"
    it(`${WORD_4} should be Ås®¸∂¸¸®`, () => {
      const result = capitalize(WORD_4)
      const length = WORD_4.length;
      console.log(`capitalize(${WORD_4}), result: `, result)
      expect(result).toBe('Ås®¸∂¸¸®')
      .toHaveLength(length)
      .not.toBeEmpty()
      .not.toBeNull()
  
    })
  
  })

  // describe('Capitalize function undefined test,', () => {

  //   let WORD_1;
  //   it(`${WORD_1} should be (undefined)`, () => {
  //     const result = capitalize(WORD_1)
  //     console.log(`capitalize(${WORD_1}), result: `, result)
  //     expect(result)
  //     .toBe("")
  
  //   })

  // })

  // describe('Capitalize function null test,', () => {

  //   let WORD_1 = null;
  //   it(`${WORD_1} should be null`, () => {
  //     const result = capitalize(WORD_1)
  //     console.log(`capitalize(${WORD_1}), result: `, result)
  //     expect(result)

  //     .not.toBeString();
    
  //   })

  // })

  describe('Capitalize function integer test,', () => {

    const WORD_1 = 999;
    it(`${WORD_1} should be 999`, () => {
      const result = capitalize(WORD_1)
      console.log(`capitalize(${WORD_1}), result: `, result)
      expect(result)
      .toBe("999")
  
    })

  })

  describe('Capitalize function array test,', () => {

    const WORD_1 = ["potato", "Carrot", "milk"];
    it(`${WORD_1} should be Potato,carrot,milk`, () => {
      const result = capitalize(WORD_1)
      console.log(`capitalize(${WORD_1}), result: `, result)
      expect(result)
      .toBe("Potato,carrot,milk")
  
    })

    const WORD_2 = [];
    it(`${WORD_2} should be ""`, () => {
      const result = capitalize(WORD_2)
      console.log(`capitalize(${WORD_2}), result: `, result)
      expect(result)
      .toBeEmpty()
      .toHaveLength(0);
  
    })

  })

  