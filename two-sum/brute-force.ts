export function twoSum(nums:number[], target:number):number[]{
    for(let i =0 ; i< nums.length; i++){
        const current = nums[i];
        for(let j = i+1; j<nums.length; j++){
           const sum = current + nums[j];
           if(sum === target) return [i, j];
        }
    }
    return [];
}