// Kata 3: Multiplication table using nested loops
// ** OBJECTIVE** Comment out your code. To better understand nested loops**
// Commit 1: "scaffold nested loops"
// Commit 2: "added multiplication logic"
// Commit 3: "refactored for readability and spacing"

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += (i * j) + "\t";
  }
  console.log(row);
}

// Stretch Goal: Guard clause example
function printNumber(num) {
  if (num <= 0) return console.log("Please enter a positive number.");
  console.log("Number:", num);
}

// Commit 1: scaffold nested loops

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += `[${i},${j}] `;
  }
  console.log(row);
}

// Commit 2: added multiplication logic

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += (i * j) + " ";
  }
  console.log(row);
}

// Commit 3: refactored for readability and spacing

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += (i * j).toString().padStart(3, " ");
  }
  console.log(row);
}

 // Guard clause: bail out early if invalid
  if (num <= 0) {
    console.log("Please enter a positive number.");
    return;
  }

  console.log("Number:", num);

// I will eventually understand all of this but for now im just trying to get the syntax down and understand the flow of the code. I know that nested loops can be tricky but I will keep practicing and eventually it will click. Overall, this was a good exercise to get more comfortable with loops and conditionals in JavaScript.