// Kata 2: FizzBuzz from 1 to 20
// ** OBJECTIVE** Create your own loop using the following logic**
// Commit 1: "scaffold for loop"
// Commit 2: "added fizzbuzz logic"
// Commit 3: "refactored with clear variable and comments"

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Kata 2: FizzBuzz from 1 to 20
// Commit 1: "scaffold for loop"

// Loop from 1 through 20 (inclusive)
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// Kata 2: FizzBuzz from 1 to 20
// Commit 2: "added fizzbuzz logic"

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");     // divisible by 3 and 5
  } else if (i % 3 === 0) {
    console.log("Fizz");         // divisible by 3
  } else if (i % 5 === 0) {
    console.log("Buzz");         // divisible by 5
  } else {
    console.log(i);              // otherwise, print the number
  }
}

// Kata 2: FizzBuzz from 1 to 20
// Commit 3: "refactored with clear variable and comments"

// Loop through numbers 1 to 20
for (let i = 1; i <= 20; i++) {
  // Start with an empty label and append parts as rules match
  let label = "";

  // If divisible by 3, append "Fizz"
  if (i % 3 === 0) label += "Fizz";

  // If divisible by 5, append "Buzz"
  if (i % 5 === 0) label += "Buzz";

  // If no rules matched, use the number itself; otherwise print the label
  console.log(label || i);
}
