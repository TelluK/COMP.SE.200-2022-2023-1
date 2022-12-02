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
        const obj = {type: "food", value: Object};
        const result = toNumber(obj)
        console.log('toNumber(obj), result: ', result)
        expect(toNumber(obj)).toBe(NaN)

    })

    it('add function, result should be NaN', () => {
        const func = () => {
            return true;
        };
        const result = toNumber(func)
        console.log('toNumber(func), result: ', result)
        expect(toNumber(func)).toBe(NaN)

    })

    it('add Function, result should be NaN', () => {
        const func = Function;
        const result = toNumber(func)
        console.log('toNumber(func), result: ', result)
        expect(toNumber(func)).toBe(NaN)

    })

    it('add boolean, result should be NaN', () => {
        const t = true;
        const result = toNumber(t)
        console.log('toNumber(t), result: ', result)
        expect(toNumber(t)).toBe(1)

    })

    it('add Number, result should be NaN', () => {
        const num = Number;
        const result = toNumber(num)
        console.log('toNumber(num), result: ', result)
        expect(toNumber(num)).toBe(NaN)

    })

    it('add Array, result should be NaN', () => {
        const array = [1, 2, 3];
        const result = toNumber(array)
        console.log('toNumber(array), result: ', result)
        expect(toNumber(array)).toBe(NaN)

    })

    it('add null, result should be NaN', () => {
        const empty = null;
        const result = toNumber(empty)
        console.log('toNumber(empty), result: ', result)
        expect(toNumber(empty)).toBe(0)

    })

    it('add {}, result should be NaN', () => {
        const empty = {};
        const result = toNumber(empty)
        console.log('toNumber(empty), result: ', result)
        expect(toNumber(empty)).toBe(NaN)

    })

    it('add binary, result should be NaN', () => {
        const bin = Number(42).toString(2);
        const result = toNumber(bin)
        console.log('toNumber(bin), result: ', result)
        expect(toNumber(bin)).toBe(101010)

    })

    it('add binary, result should be NaN', () => {
        const bin = "101010";
        const result = toNumber(bin)
        console.log('toNumber(bin), result: ', result)
        expect(toNumber(bin)).toBe(101010)

    })

})

// * isObject({})
// * // => true
// *
// * isObject([1, 2, 3])
// * // => true
// *
// * isObject(Function)
// * // => true
// *
// * isObject(null)
// * // => false
// */