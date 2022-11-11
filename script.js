//Data 1

let markMss = 78;
let johanMss = 92;
let markheight = 1.69;
let johanheight = 1.95;

let markBmiTotall = markMss / markheight ** 2;
let johanBmiTotall = johanMss / johanheight ** 2;

let markHigherBMI = markBmiTotall > johanBmiTotall;

if (markBmiTotall > johanBmiTotall) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}
console.log(
  `Mark's BMI ${markBmiTotall} is higher than John's ${johanBmiTotall}!`
);

// Data 2

let markMssData2 = 95;
let johanMssData2 = 85;
let markheightData2 = 1.88;
let johanheightData2 = 1.76;

let markBmiTotallData2 = markMssData2 / markheightData2 ** 2;
let johanBmiTotallData2 = johanMssData2 / johanheightData2 ** 2;

let markHigherBMIData2 = johanBmiTotallData2 > markBmiTotallData2;

if (markBmiTotallData2 > johanBmiTotallData2) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}
console.log(
  `Mark's BMI ${markBmiTotallData2} is higher than John's ${johanBmiTotallData2}!`
);

// Challenge - 1

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Your tasks:
//    1. Store Mark's and John's mass and height in variables
//    2. Calculate both their BMIs using the formula (you can even implement both
//    versions)
//    3. Create a Boolean variable 'markHigherBMI' containing information about
//    whether Mark has a higher BMI than John.
//    Test data:
//    § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
//    m tall.
//    § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
//    m tall.

// Challenge - 2

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.

// Your tasks:
//    1. Print a nice output to the console, saying who has the higher BMI. The message
//    is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
//    2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
//    BMI (28.3) is higher than John's (23.9)!"

//    Hint: Use an if/else statement 😉
