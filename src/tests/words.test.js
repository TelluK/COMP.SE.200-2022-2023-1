import words from '../words'

describe('Words function test 1', () => {
    it('Should split string of words to an array', () => {
        const result = words('fred, barney, & pebbles')
        const shouldBe = ['fred', 'barney', 'pebbles']
        console.log('words(fred, barney, & pebbles, result: ', result)
        expect(result).toStrictEqual(shouldBe)
        
    })
    
})