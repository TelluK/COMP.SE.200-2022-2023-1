import toNumber from '../toNumber'

describe('toNumber function test 1', () => {
    it('add string "4.2", result should be 4.2', () => {
        const result = toNumber('4.2')
        console.log('toNumber("4.2"), result: ', result)
        expect(toNumber('4.2')).toBe(4.2)

    })
    
})