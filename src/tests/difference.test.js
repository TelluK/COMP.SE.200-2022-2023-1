import difference from '../difference'

describe('Difference function test 1 ', () => {
    it('Creates an array of "array" values not included in the other given arrays -work with positive numbers', () => {
        const result = [1]
        console.log('difference([2, 1], [2, 3]), result: ', result)
        expect(difference([2, 1],[2, 3])).toStrictEqual([1])
        
    })
    
})

describe('Difference function test 2 (negative numbers) ', () => {
    it('Creates an array of "array" values not included in the other given arrays -works with negative numbers', () => {
        const result = [-1]
        console.log('difference([-2, -1], [-2, -3]), result: ', result)
        expect(difference([-2, -1],[-2, -3])).toStrictEqual([-1])
        
    })

    it(' -works with negative numbers and arrays with different lengths', () => {
        const result = [-1]
        console.log('difference([-9999.00, -1, -3], [-9999.00, -3, 99999.00]), result: ', result)
        expect(difference([-9999.00, -1, -3],[-9999.00, -3, 99999.00, 0])).toStrictEqual([-1])
        
    })
    
})

describe('Difference function test 2 ', () => {
    it('-work with undefined numbers', () => {
        const result = [];
        let undefined;
        console.log('difference([undefined, 1], [1, 2]), result: ', result)
        expect(difference([undefined, 1],[1, 2])).toStrictEqual([undefined])
        
    })
    
})