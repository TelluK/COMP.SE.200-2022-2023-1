import capitalize from '../capitalize.js'



describe('Capitalize function test 1,', () => {

  it('TESTSTRING should be Teststring', () => {
    const result = capitalize('TESTSTRING')
    console.log('capitalize(TESTSTRING) result: ', result)
    expect(result)
    .toHaveLength(10)
    .toBe('Teststring')
    .toEqual('Teststring')
    
    

  })

})

describe('Capitalize function test 2,', () => {

    it('tEST_sTRING should be Test_string', () => {
      const result = capitalize('tEST_sTRING')
      console.log('capitalize(tEST_sTRING) result: ', result)
      expect(result).toBe('Test_string')
  
    })
  
  })

  describe('Capitalize function test 3,', () => {

    it('Test_String should be Test_string', () => {
      const result = capitalize('Test_String')
      console.log('capitalize(Test_String) result: ', result)
      expect(result).toBe('Test_string')
  
    })
  
  })

  describe('Capitalize function test 4,', () => {

    it('åS®¸∂¸¸® should be Test_string', () => {
      const result = capitalize('åS®¸∂¸¸®')
      console.log('capitalize(åS®¸∂¸¸®) result:', result)
      expect(result).toBe('Ås®¸∂¸¸®')
  
    })
  
  })