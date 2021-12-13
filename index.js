  // optimized and cleaned
function hasTargetSum(array, target) {
  const seenNumbers = {}
  for (let number of array) {
    const complement = target - number
    if (complement in seenNumbers) {
      return true
    }
    seenNumbers[number] = true
  }
  return false
}


/* 
  Write the Big O time complexity of your function here

  runtime: O(n)
  space: O(n)
*/


/* 
  Add your pseudocode here

  create an object to keep track of numbers we've already seen

  iterate through each number in the array
    for the current number identify what number adds up to the target
    check if any numbers in the object are the compliment
      if so, return true
      otherwise add number to the object
  if I get to the end of the array and haven't found my numbers, return false
*/


/*
  Add written explanation of your solution here

  make a function called hasTargetSum that checks if 2 numbers from the array add up to some target.
  for each number check if there's a number that adds up to the target
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


  // original
// function hasTargetSum(array, target) {
//   for (i = 0; i < array.length; i++) {
//     const complement = target - array[i]
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] === complement) {
//         return true
//       }
//     }
//   }
//   return false
// }


  // optimized
// function hasTargetSum(array, target) {
//   const seenNumbers = {}
//   for (let i = 0; i < array.length; i++) {
//     const complement = target - array[i]
//     if (seenNumbers[complement]) {
//       return true
//     }
//     seenNumbers[array[i]] = true
//   }
//   return false
// }