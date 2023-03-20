function hasTargetSum(array, target) {
  // Write your algorithm here
  /* ME:
    The function needs to return true if any pair of numbers in the array adds up to the target number

  */

    let match = false;
    let i = 0;

    while(i <= array.length - 1 && match === false){
      let j = i + 1;

        // This part steps through every other element after the current element. By setting j equal to (i + 1)
        while(j <= array.length){
          let sum = array[i] + array[j]
          if(sum === target){
            match = true;
            return match;
          } else{
            j += 1;                           // increment j inside the inner-loop
          }          
        }
      i++                                   // increment i inside the outer-loop
    }
    return match;
}

/* 
  Write the Big O time complexity of your function here
ME:
  The outer-loop will iterate at most, n times. 
  but each loop includes an inner-loop which iterates (n - 1) times decreasing by 1, each time. How do I show this mathematically? (??)

  outer-loop + inner-loop
    = n * [(n - 1) + (n - 2) + (n - 3) + ... + (n - (n - 1))]

  outer loop = O(n)

  inner loop = O(n!) ???

  
 

  
*/

/* 
  Add your pseudocode here:
ME:

  while(i <= array.length - 1){
    let key = array[i];

      // This part steps through every other element after the current element. By setting j equal to (i + 1)
      while(j <= array.length){
        j = i + 1
        let sum = array[i] + array[j]
        j += 1;                           // increment j inside the inner-loop
      }
    i++                                   // increment i inside the outer-loop
  }
  

*/

/*
  Add written explanation of your solution here
ME:
  For each element in the array, I have to test the sum of it with every other element in the array.
  I will not have to step through the entire array for every element 
    because the previous elements will have already tested the sum with the current element on their iterations.

  If any sum equals the target, then the function returns true. 
  So the stop conditions are:
    when the function returns true
    when the the last element is reached and all sums have been tested; when i = (array.length - 1).
  
  The loop should continue while:
    The boolean value is still false and i < array.length - 1. 

    (I do not need to test array[i] when i = array.length - 1 
      because once it reaches the last element, the sums of the 
      last element and every other element will have already 
      been tested in previous iterations, hence, "i <" instead of "i<=")



  
  
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
