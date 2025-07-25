// // function bonjour(name="angel") {
// //     console.log(`Bonjour ${name}`);
// // }

// // let names=["Alice", "Bob", "Charlie"];

// // for (let i = 0; i < names.length; i++) {
// //     bonjour();
// // }


// // bonjour();
// //     let b = parseFloat(prompt("Enter a number:"));
// //     let c = parseFloat(prompt("Enter second number:"));

// // let sum=function (b,c) {
// //     return b+c;
// // }
// // console.log(sum(b,c))

// // function chris() {
// //     // Get user input
// //     let ageInput = prompt("Enter your age: ");
// //     let genderInput = prompt("What's your gender?");
    
// //     // Convert and validate age
// //     let age = parseInt(ageInput);
// //     if (isNaN(age) || age <= 0 || age > 120) {
// //         alert("Please enter a valid age between 1 and 120");
// //         return; // Exit the function if age is invalid
// //     }
    
// //     // Validate gender
// //     if (!genderInput || genderInput.trim() === "") {
// //         alert("Please enter your gender");
// //         return; // Exit the function if gender is empty
// //     }
    
// //     // Normalize gender input
// //     let gender = genderInput.trim().toLowerCase();
    
// //     // Display the information
// //     console.log(`You are a ${gender}, your age is ${age}`);
    
// //     // Return the values if needed elsewhere
// //     // return { age, gender };
// // }

// // // Call the function
// // // chris();
// // =================================================================================================


//  // Exercise 1: Print Even or Odd Numbers

// // function printEvenOrOdd(limit) {
// //   for (let i = 1; i <= limit; i++) {
// //     if (i % 2 === 0) {
// //       console.log(i + " is even");
// //     } else {
// //       console.log(i + " is odd");
// //     }
// //   }
// // }
// // printEvenOrOdd(10);

// // =======================================================================================
// // Exercise 2: FizzBuzz

// // function fizzBuzz(n) {
// //   for (let i = 1; i <= n; i++) {
// //     if (i % 3 === 0 && i % 5 === 0) {
// //       console.log("FizzBuzz");
// //     } else if (i % 3 === 0) {
// //       console.log("Fizz");
// //     } else if (i % 5 === 0) {
// //       console.log("Buzz");
// //     } else {
// //       console.log(i);
// //     }
// //   }
// // }
// // fizzBuzz(30);
// // =================================================================================================

// // Exercise 3: Count Vowels in a String

// function countVowels(str) {
//   let count = 0;
//   const vowels = "aieou";

//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }
// console.log(countVowels("Hello World")); 
// console.log(countVowels("JavaScript")); 

// // =================================================================================================
// // Exercise 4: Sum of Multiples of 3 or 6 Below a Given Number

// function sumMultiples(n) {
//   let sum = 0;

//   for (let i = 1; i < n; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }
// console.log(sumMultiples(6)); 

// // ===========================================================================================
// // Exercise 5: Reverse a String

// function reverseString(str) {
//   let reversed = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }

//   return reversed;
// }
// console.log(reverseString("Carmene"));
// console.log(reverseString("kaneza"));
// // ===========================================================================================
// // Exercise 6: Check if a Number is Prime

// function isPrime(n) {
//   if (n <= 1) {
//     return false; 
//   }

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false; 
//     }
//   }

//   return true; 
// }
// console.log(isPrime(7)); 
// console.log(isPrime(10));

// // ===========================================================================================
// // Exercise 7: Find the Largest Number in an Array

// function findLargest(arr) {
//   if (arr.length === 0) {
//     return null;
//   }
//   let largest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }
// console.log(findLargest([3, 5, 7, 2, 8]));
// console.log(findLargest([-1, -5, -3, -2]));


