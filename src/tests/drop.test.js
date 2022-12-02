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

it('Drop from empty array [] and undefined length, should be [] ', () => {
 
    let array = []
    let undef;
    const result = drop(array, undef)
    console.log('drop([]), result: ', result);
    expect(drop(array)).toStrictEqual([])
    .toBeArray()

})

it('Drop from array [1, 2, 3] and undefined length, should be [2, 3] ', () => {
 
    let array = [1,2,3]
    let undef;
    const result = drop(array, undef)
    console.log('drop([]), result: ', result);
    expect(drop(array)).toStrictEqual([2, 3])
    .toBeArray()

})

it('Drop from array [1, 2, 3] and n = -1, should be [2, 3] ', () => {
 
    let array = [1,2,3]
    const n = -1
    const result = drop(array, n)
    console.log('drop([]), result: ', result);
    expect(drop(array, n)).toStrictEqual([1, 2, 3])
    .toBeArray()

})

it('Drop from empty array [] and undefined length, should be [] ', () => {
 
    let array = []
    const result = drop(array, 3)
    console.log('drop([]), result: ', result);
    expect(drop(array, 3)).toStrictEqual([])
    .toBeArray()

})

it('Drop from empty array [] and n = 0, should be [] ', () => {
 
    let array = null;
    const n = 0;
    const result = drop(array, n)
    console.log('drop([], 0), result: ', result);
    expect(drop(array, n)).toStrictEqual([])
    .toBeArray()

})

it('Drop from empty array [] and undefined length, should be [] ', () => {
 
    let array = [1,2]
    const result = drop(array, 3)
    console.log('drop([]), result: ', result);
    expect(drop(array, 3)).toStrictEqual([])
    .toBeArray()

})

it('Drop from empty array [] and undefined length, should be [] ', () => {
 
    let array = [1,2,3]
    let undef;
    const result = drop(array, undef)
    console.log('drop([]), result: ', result);
    expect(drop(array)).toStrictEqual([2, 3])
    .toBeArray()

})


it('Drop from empty array [] and undefined length, should be [] ', () => {
 
    let array = [1,2,3]
    let undef;
    const result = drop(array, undef)
    console.log('drop([]), result: ', result);
    expect(drop(array)).toStrictEqual([2, 3])
    .toBeArray()

})

it('Drop from empty arrays [], [1,2,3], should be [] ', () => {
 
    const result = drop([])
    console.log('drop([]), result: ', result);
    expect(drop([])).toStrictEqual([])
    .toBeArray()

})

