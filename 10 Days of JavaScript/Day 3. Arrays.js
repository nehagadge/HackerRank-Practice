//Question : https://www.hackerrank.com/challenges/js10-arrays/problem

//Solution

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    
    var first=nums[0];
    let second=-1;
    
    for (let i = 1; i < nums.length; i++) {
    if (nums[i] > first) {
        second = first;
        first = nums[i]
    }

    if (nums[i] > second && nums[i] < first) {
        second = nums[i];
    }
}


return second;
}
