function hasTargetSum(array, target) {
  // Loop through the array and check if there exists a pair with the sum equal to the target
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  
  // If no such pair is found, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
  The time complexity is O(n^2) since we have nested loops going through the array.
*/

/* 
  Add your pseudocode here
  - Loop through the array with a first pointer (i)
  - Inside the first loop, have a second pointer (j) starting from i + 1
  - Check if array[i] + array[j] === target
  - If true, return true
  - If the loop finishes without finding the pair, return false
*/

/*
  Add written explanation of your solution here
  The function `hasTargetSum` takes an array and a target as input and checks if there exists a pair of elements in the array whose sum is equal to the target. It uses a nested loop to compare each element with all the subsequent elements in the array. If it finds a pair that satisfies the condition, it returns true; otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
