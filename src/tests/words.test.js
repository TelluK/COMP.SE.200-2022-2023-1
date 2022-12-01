import words from '../words'
import asciiWords from '../words'


describe('Words function test 1', () => {
    it('Should split string of words to an array', () => {
        const result = words('carrot, potato, & milk')
        const shouldBe = ['carrot', 'potato', 'milk']
        console.log('words(carrot, potato, & milk, result: ', result)
        expect(result).toStrictEqual(shouldBe)
        .toBeArray()
        .not.toBeNull()
        
    })

    it('Should split string of words to an array', () => {
        const result = words('carrot, potato, & milk', /[^, ]+/g)
        const shouldBe = ['carrot', 'potato', '&', 'milk']
        console.log('words(carrot, potato, & milk, result: ', result)
        expect(result).toStrictEqual(shouldBe)
        .toBeArray()
        .not.toBeNull()
        
    })

    // it('Should split string of words to an array', () => {
    //     const reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g
    //     const result = asciiWords(reAsciiWord)
        
    //     let shouldBe;
    //     console.log('asciiWords(reAsciiWord), result: ', reAsciiWord)
    //     expect(result).toStrictEqual(shouldBe)
    //     .toBeArray()
    //     .not.toBeNull()

    // })

})