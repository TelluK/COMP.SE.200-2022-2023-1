import ceil from '../ceil.js'

describe('Ceil function test 1', () => {
    it('add 4.004 with two decimals, should return 4.01', () => {
        const result = ceil(4.004, 2)
        console.log('ceil(4.004, 2), result: ', result);
        expect(result).toBe(4.01)
        
    })

})