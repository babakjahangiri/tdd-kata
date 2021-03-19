import {convertNumber} from './numberToWords'

describe('the function should return the number words',()=>{

    it('should return one',()=>{
        const expected = 'one'
        const actual = convertNumber(1)
        expect(actual).toBe(expected)
    })

})