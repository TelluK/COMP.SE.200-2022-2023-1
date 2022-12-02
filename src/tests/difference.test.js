import difference from '../difference'
import baseDifference from '../.internal/baseDifference.js'

import isArrayLikeObject from '../isArrayLikeObject.js'
import baseFlatten from '../.internal/baseFlatten.js'

describe('Difference function test 1 ', () => {
    it('Creates an array of "array" values not included in the other given arrays -work with positive numbers', () => {
        const result = [1]
        console.log('difference([2, 1], [2, 3]), result: ', result)
        expect(difference([2, 1],[2, 3])).toStrictEqual([1])
        
    })
    
})

describe('Difference function test 2 (negative numbers) ', () => {
    it('Works with negative numbers', () => {
        const result = [-1]
        console.log('difference([-2, -1], [-2, -3]), result: ', result)
        expect(difference([-2, -1],[-2, -3])).toStrictEqual([-1])
        
    })

    it('Works with negative numbers and arrays with different lengths', () => {
        const result = [-1]
        console.log('difference([-9999.00, -1, -3], [-9999.00, -3, 99999.00]), result: ', result)
        expect(difference([-9999.00, -1, -3],[-9999.00, -3, 99999.00, 0])).toStrictEqual([-1])
        
    })
    
})

describe('Difference function test 2 ', () => {
    it('Work with undefined numbers', () => {
        const result = [];
        let undefined;
        console.log('difference([undefined, 1], [1, 2]), result: ', result)
        expect(difference([undefined, 1],[1, 2])).toStrictEqual([undefined])
        
    })
    
})

describe('Difference function test 3 ', () => {
    it('Work with arrayLikeObject', () => {
        let obj = {
            0: 5,
            1: 4,
            2: 3
        };

        const result = difference(obj, [5,4,2],);
        console.log('difference([obj, [5, 4, 3]), result: ', result)
        expect(difference(obj, [5, 4, 2])).not.toBeNull
        
    })
    
})