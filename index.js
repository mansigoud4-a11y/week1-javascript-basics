
// 1. Array: Print all numbers
let numbers = [10, 20, 30, 40, 50];
numbers.forEach(num => console.log(num));

// 2. Find the largest number
let values = [12, 45, 67, 23, 89];
console.log("Largest:", Math.max(...values));

// 3. Filter even numbers
let nums = [1, 2, 3, 4, 5, 6];
let even = nums.filter(num => num % 2 === 0);
console.log("Even numbers:", even);

// 4. Reverse an array
let fruits = ["Apple", "Banana", "Mango"];
console.log("Reversed:", [...fruits].reverse());

// 5. Create an object
let student = {
    name: "Mansi",
    age: 21,
    course: "JavaScript"
};
console.log(student);

// 6. Access object properties
console.log("Student Name:", student.name);
console.log("Course:", student.course);

// 7. Create a function to add numbers
function add(a, b) {
    return a + b;
}
console.log("Addition:", add(10, 20));

// 8. Check even or odd
function checkNumber(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkNumber(15));

// 9. Find factorial
function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log("Factorial:", factorial(5));

// 10. DOM manipulation
// Add this code to a separate HTML-connected script
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("myButton");
    const heading = document.getElementById("heading");

    button.addEventListener("click", function () {
        heading.textContent = "Hello JavaScript!";
    });
});
