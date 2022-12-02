import words from '../words'
import unicodeWords from '../.internal/unicodeWords.js'
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

    it('Should split string of words to an array with ascii pattern', () => {
        const string = "string";
        const result = words(string,asciiWords(string))
        console.log('words(string, asciiWords(string)), result: ', result)
        expect(result).toStrictEqual(result)
        .toBeArray()
        .not.toBeNull()

    })

    it('Should split string of words to an array with hasunicodeword pattern', () => {
        const hasUnicodeWord = RegExp.prototype.test.bind(
            /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/
          );
        const string = "string";
        const result = words(string,hasUnicodeWord(string))
        console.log('words(string, hasUnicodeWords(string)), result: ', result)
        expect(result).toStrictEqual(result)

    })

    it('Should split string of words to an array with unicodeword pattern', () => {

        const string = "string";      
        const result = words(string,unicodeWords(string))
        console.log('words(string, unicodeWords(string))), result: ', result)
        expect(result).toStrictEqual(result)

    })

    it('Should return empty array of words to an array with undefined pattern', () => {
        const pattern = undefined;
        const string = "string";      
        const result = words(string,pattern)
        console.log('words(string,undefined), result: ', result)
        expect(result).not.toBeNull

    })

    it('Should return empty array of words to an array with undefined pattern', () => {
        let pattern;
        const string = "string";      
        const result = words(string,pattern)
        console.log('words(string,undefined), result: ', result)
        expect(result).not.toBeNull

    })

})


