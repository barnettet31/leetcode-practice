# Two Sum - Arrays

Given two parameters NUMS (array of numbers) and TARGET (number), find two elements in the array that add to the target. Return an array containing the indices of the two elements.

```ts
function twoSum(nums: number[], target: number): number[] {
  // implement code
}
```

## Brute Force

You can solve this problem with a brute force double loop. Iterate through each element of the array and add it to each other element of the array. Return when you've found the indexes of the elements that add to the target, else return an empty array.

```ts
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const sum = current + nums[j];
      if (target === sum) return [i, j];
    }
  }
  return [];
}
```

**Time Complexity**
O(n^2)
You have to iterate through the array potentially twice for the two values which makes it doubly dependent on the length (n) of the array

**Space Complexity**
O(1) - Easy very small based on the finite size of the parameters

**_GENERALLY_**, we can spare time in our algorithms by sacrificing space, which is a good practice to get into, especially with o(n^2) time complexity & O(1) space.

## Efficient Method

This involves keeping track of result of subtracting the current element in the loop from the target via a hash table, and looking up if that value exists in the hash table.

**Time Complexity**
O(n) Saves time by not recomputing already determined values and not making unneeded loops.

**Space Complexity**
O(n) Adds space because of the hash lookup 
