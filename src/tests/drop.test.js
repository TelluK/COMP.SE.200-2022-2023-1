import drop from "../drop"

describe('Drop function test 1', () => {
    it('Drop from positive numbers [1, 2, 3], should be [2, 3] ', () => {
        const result = drop([1, 2, 3])
        console.log('drop([1, 2, 3]), result: ', result);
        expect(drop([1, 2, 3])).toStrictEqual([2, 3])
        .toBeArray()
        .not.toBeNull()
        
    })
    it('Drop two numbers from negative numbers [-1, -2, -3], should be [-3] ', () => {
        const result = drop([-1, -2, -3], 2)
        console.log('drop([-1, -2, -3], 2), result: ', result);
        expect(drop([-1, -2, -3], 2)).toStrictEqual([-3])
        .toBeArray()
        .not.toBeNull()
        
    })

})

it('Drop from undefined numbers [undefined, -2, -3], should be [-2, -3] ', () => {
    let undef;
    const result = drop([undef, -2, -3])
    console.log('drop([undefined, -2, -3]), result: ', result);
    expect(drop([undef, -2, -3])).toStrictEqual([-2, -3])
    .toBeArray()
    .not.toBeNull()
    
})

it('Drop from empty array [], should be [] ', () => {
 
    let array = []
    const result = drop(array)
    console.log('drop([]), result: ', result);
    expect(drop(array)).toStrictEqual([])
    .toBeArray()

})

it('Drop from empty arrays [], [1,2,3], should be [] ', () => {
 
    const result = drop([])
    console.log('drop([]), result: ', result);
    expect(drop([])).toStrictEqual([])
    .toBeArray()

})

