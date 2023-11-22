function twoSum(nums, target) {
    // Create a Map to store the complement of each number and its index
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;

        // Check if the complement exists in the Map
        if (numMap.has(complement)) {
            // If found, return the indices of the two numbers
            return [numMap.get(complement), i];
        }

        // Otherwise, add the current number and its index to the Map
        numMap.set(num, i);
    }

    // If no solution is found, return an empty array
    return [];
}

// Example usage:
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1));  // Output: [0, 1]

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2));  // Output: [1, 2]

const nums3 = [3, 3];
const target3 = 6;
console.log(twoSum(nums3, target3));  // Output: [0, 1]
