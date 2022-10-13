import drop from "../drop"

describe('Drop function test 01', () => {
    it('Drop from [1, 2, 3], should be [2, 3] ', () => {
        const result = drop([1, 2, 3])
        console.log('drop([1, 2, 3]), result: ', result);
        expect(drop([1, 2, 3])).toStrictEqual([2, 3])
        
    })

})