import ceil from '../ceil.js'

describe('Ceil function test 1', () => {
    it('add 4.004 with two decimals, should return 4.01', () => {
        const result = ceil(4.004, 2)
        console.log('ceil(4.004, 2), result: ', result);
        expect(result).toBe(4.01)
        
    })

    it('add -4.004 with two decimals, should return - 4.01', () => {
        const result = ceil(-4.004, 2)
        console.log('ceil(4.004, 2), result: ', result);
        expect(result).toBe(-4.00)
        
    })

    it('add 0.0000 with two decimals, should return 0.00', () => {
        const result = ceil(0.0000, 2)
        console.log('ceil(0.0000, 2), result: ', result);
        expect(result).toBe(0.00)
        
    })


    it('add 999.9990 with two decimals, should return 1000', () => {
        const result = ceil(999.9990, 2)
        console.log('ceil(999.9990, 2), result: ', result);
        expect(result).toBe(1000)
        
    })

    it('add null with two decimals, should return Nan', () => {
        const result = ceil(null, 2)
        console.log('ceil(null, 2), result: ', result);
        expect(result).toBeNaN()
        
    })

    it('add undefined with two decimals, should return Nan', () => {
        let undef;
        const result = ceil(undef, 2)
        console.log('ceil(undefined, 2), result: ', result);
        expect(result).toBeNaN()
        
    })
// no decimals
describe('Ceil function test 2 (with no decimals)', ()=> {

        
    it('add 4.006 with no decimals, should return 5', () => {
        const result = ceil(4.006)
        console.log('ceil(4.006), result: ', result);
        expect(result).toBe(5)
            
    })

    it('add -4.004 with no decimals, should return - 4.004', () => {
        const result = ceil(-4.004, 0)
        console.log('ceil(4.004, 0), result: ', result);
        expect(result).toBe(-4)
        
    })


    it('add 0.0000 with no decimals, should return 0.00', () => {
        const result = ceil(0.0000, 0)
        console.log('ceil(0.0000, 0), result: ', result);
        expect(result).toBe(0.00)
        
    })

    it('add 999.9990 with no decimals, should return 1000', () => {
        const result = ceil(999.9990)
        console.log('ceil(999.9990), result: ', result);
        expect(result).toBe(1000)
        
    })

    it('add Nan with no decimals, should return Nan', () => {
        const result = ceil(NaN)
        console.log('ceil(null), result: ', result);
        expect(result).toBeNaN()
        
    })

    it('add undefined with two decimals, should return Nan', () => {
        let undef;
        const result = ceil(undef)
        console.log('ceil(undefined), result: ', result);
        expect(result).toBeNaN()
        
    })

})
//minus decimals
describe('Ceil function test 3, with minus decimals', ()=> {
        
    it('add 6040 with minus two decimals, should return 6100', () => {
        const result = ceil(6040, -2)
        console.log('ceil(6040), result: ', result);
        expect(result).toBe(6100)
            
    })

    it('add -6040 with minus two decimals, should return - 6040', () => {
        const result = ceil(-6040, -2)
        console.log('ceil(-6040, -2), result: ', result);
        expect(result).toBe(-6000)
        
    })

    it('add 0.0000 with minus two decimals, should return 0.00', () => {
        const result = ceil(0.0000, -2)
        console.log('ceil(0.0000, -2), result: ', result);
        expect(result).toBe(0.00)
        
    })

    it('add 999.9990 with minus two decimals, should return 1000', () => {
        const result = ceil(999.9990,)
        console.log('ceil(999.9990), result: ', result);
        expect(result).toBe(1000)
        
    })

    it('add Nan with minus two decimals, should return Nan', () => {
        const result = ceil(NaN)
        console.log('ceil(Nan, -2), result: ', result);
        expect(result).toBeNaN()
        
    })

    it('add undefined with minus two decimals, should return Nan', () => {
        let undef;
        const result = ceil(undef,- 2)
        console.log('ceil(undefined, -2), result: ', result);
        expect(result).toBeNaN()
        
    })
})

})