import difference from '../difference'

describe('Difference function test with positive values ', () => {
    it('Work with positive numbers', () => {
        const result = difference([2, 1],[2, 3])
        expect(result).toStrictEqual([1])
        
    })
    
})

describe('Difference function with negative numbers ', () => {
    it('Work with negative numbers', () => {
        const result = difference([-2, -1],[-2, -3])
        expect(result).toStrictEqual([-1])
        
    })

    it('Works with negative numbers and arrays with different lengths', () => {
        const result = difference([-9999.00, -1, -3],[-9999.00, -3, 99999.00, 0])
        expect(result).toStrictEqual([-1])
        
    })
    
})

describe('Difference function test with undefined ', () => {
    it('Work with undefined values', () => {
        let undefined;
        const result = difference([undefined, 1],[1, 2])
        expect(result).toStrictEqual([undefined])
        
    })
    
})

describe('Difference function test with arrayLikeObject ', () => {
    it('Work with arrayLikeObject', () => {
        let obj = {
            0: 5,
            1: 4,
            2: 3
        };

        const result = difference(obj, [5,4,2],);
        expect(result).not.toBeNull
        
    })
    
})