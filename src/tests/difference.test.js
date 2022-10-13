import difference from '../difference'

describe('Difference function test 1 ', () => {
    it('Creates an array of "array" values not included in the other given arrays', () => {
        const result = [1]
        console.log('difference([2, 1], [2, 3]), result: ', result)
        expect(difference([2, 1],[2, 3])).toStrictEqual([1])
        
    })
    
})