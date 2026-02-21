// Kata 1: Print the first 10 even numbers
// ** OBJECTIVE** Create your own loop using the following logic**
// Commit 1: "scaffold loop structure"
// Commit 2: "added even number condition"
// Commit 3: "refactored variable names for clarity"


// Print the first 10 even numbers (0 through 18)
for (let evenIndex = 0; evenIndex < 10; evenIndex++) {
  console.log(2 * evenIndex);
}


// Commit 1: scaffold loop structure

// Run a loop 10 times: i = 0, 1, 2, ..., 9
for (let i = 0; i < 10; i++)

// Commit 2: added even number condition 
for (let i = 0; i < 10; i++) {
  // Calculate the even number by multiplying the index by 2
  let evenNumber = 2 * i;
  console.log(evenNumber);
}
// Commit 3: refactored variable names for clarity
for (let evenIndex = 0; evenIndex < 10; evenIndex++) {
  let evenNumber = 2 * evenIndex;
  console.log(evenNumber);
}   
// I will keep practicing and eventually I will understand
//  how to use loops and conditionals effectively in JavaScript. 
// This exercise was a good way to get familiar with the syntax
//  and flow of code, and I look forward to understanding this all better
// in the future.