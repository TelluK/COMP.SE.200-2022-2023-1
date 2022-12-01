import toNumber from '../toNumber'

describe('toNumber function test 1', () => {
    it('add string "4.2", result should be 4.2', () => {
        const result = toNumber('4.2')
        console.log('toNumber("4.2"), result: ', result)
        expect(toNumber('4.2')).toBe(4.2)

    })

    it('add 4.2, result should be 4.2', () => {
        const result = toNumber(4.2)
        console.log('toNumber(4.2), result: ', result)
        expect(toNumber(4.2)).toBe(4.2)

    })

    it('add string "-4.2", result should be -4.2', () => {
        const result = toNumber('-4.2')
        console.log('toNumber("-4.2"), result: ', result)
        expect(toNumber('-4.2')).toBe(-4.2)

    })

    it('add undefined, result should be 0', () => {
        const result = toNumber('')
        console.log('toNumber(""), result: ', result)
        expect(toNumber('')).toBe(0)

    })

    it('add Infinity, result should be Infinity', () => {
        const result = toNumber(Infinity)
        console.log('toNumber(Infinity), result: ', result)
        expect(toNumber(Infinity)).toBe(Infinity)

    })

})

describe('toNumber function test 2 -MIN and MAX values', () => {
        it('add Number.MIN_VALUE, result should be 5e-324', () => {
            const result = toNumber(Number.MIN_VALUE)
            console.log('toNumber(Number.MIN_VALUE), result: ', result)
            expect(toNumber(Number.MIN_VALUE)).toBe(5e-324)
    
        })

        it('add Number.MAX_VALUE, result should be 1.7976931348623157e+308', () => {
            const result = toNumber(Number.MAX_VALUE)
            console.log('toNumber(Number.MIN_VALUE), result: ', result)
            expect(toNumber(Number.MAX_VALUE)).toBe(1.7976931348623157e+308)
    
        })
    
})

describe('toNumber function test 3 -Symbol, Object, Function', () => {
    it('add Symbol, result should be NaN', () => {
        const sym = Symbol('foo');
        const result = toNumber(sym)
        console.log('toNumber(sym), result: ', result)
        expect(toNumber(sym)).toBe(NaN)

    })
    it('add Object, result should be NaN', () => {
        const obj = Object('foo');
        const result = toNumber(obj)
        console.log('toNumber(obj), result: ', result)
        expect(toNumber(obj)).toBe(NaN)

    })

    it('add Object, result should be NaN', () => {
        const func = Function('foo');
        const result = toNumber(func)
        console.log('toNumber(func), result: ', result)
        expect(toNumber(func)).toBe(NaN)

    })

    it('add Object, result should be NaN', () => {
        const t = true;
        const result = toNumber(t)
        console.log('toNumber(t), result: ', result)
        expect(toNumber(t)).toBe(1)

    })

    it('add Object, result should be NaN', () => {
        const t = false;
        const result = toNumber(t)
        console.log('toNumber(t), result: ', result)
        expect(toNumber(t)).toBe(0)

    })

})