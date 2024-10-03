import { twoSum } from "./brute-force"

describe('twoSum', ()=>{
    it('should find result of array that has two elements that add up to target', ()=>{
        const result = twoSum([1,3,0,-2,8,9], 10);
        expect(result).toEqual([0,5])
    });
    it('should return empty array when none meet the target sum', ()=>
    {
        const result = twoSum([0,0],1);
        expect(result).toEqual([])
    })
})