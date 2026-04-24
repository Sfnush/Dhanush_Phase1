// Task 1: Variables (var, let, const)
let studentName = "Dhanush";
const college = "Don Bosco College";
let age = 20;

// Task 2: Data Types
let isLearningJS = true; // Boolean
let skills = ["HTML", "CSS", "JS"]; // Array

// Output to Console
console.log("Name:", studentName);
console.log("College:", college);
console.log("Age:", age);
console.log("Learning JS:", isLearningJS);
console.log("Skills:", skills);

// Task 2.1: Even/Odd Checker Function
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return number + " is Even";
    } else {
        return number + " is Odd";
    }
}

// Testing the function
console.log(checkEvenOrOdd(10)); // Output: 10 is Even
console.log(checkEvenOrOdd(7));  // Output: 7 is Odd

// Task 2.2: Arrays & Displaying Items
let myHobbyList = ["Music Production", "Photography", "Coding", "Biking"];

console.log("My Hobbies:");
myHobbyList.forEach(function(hobby) {
    console.log("- " + hobby);
});

