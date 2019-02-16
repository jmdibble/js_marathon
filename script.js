// Variables and Types

// var firstName = "John";
// console.log(firstName);

// var lastName = "Smith";
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job)

// job = "Teacher";
// console.log(job);


// Variable Mutation and Type Coercion

// var firstName = "John";
// var age = 28;

// console.log(firstName + " " + age);

// // Type coercion
// var job, isMarried;
// job = "Teacher"
// isMarried = false;

// console.log(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

// // Variable mutation
// age = "twenty eight";
// job = "driver";

// alert(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

// var lastName = prompt("What is his last name?");
// console.log(firstName + " " + lastName);


// Basic operators

// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// // Math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn, yearMark);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// // Logical operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof "Hey");
// var x;
// console.log(typeof x);


// Operator Precedence
// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge; // true
// console.log(isFullAge);

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // More operators
// x = x * 2; // 52
// x *= 2; // 104
// console.log(x);
// x++;
// console.log(x); // 105


// CHALLENGE 1
// var johnMass, johnHeight, markMass, markHeight, johnBmi, markBmi;
// johnMass = 75;
// johnHeight = 1.82;
// markMass = 86;
// markHeight = 1.92;

// johnBmi = johnMass / (johnHeight * johnHeight);
// markBmi = markMass / (markHeight * markHeight);

// isItHigher = markBmi > johnBmi;

// console.log("Is Mark's BMI higher than John's BMI? " + isItHigher)

// megBMI = 57.6 / (1.66^2);
// console.log(megBMI);

// joshBMI = 74.4 / (1.78^2);
// console.log(joshBMI);


// If / Else Statements

// var firstName = "John";
// var civilStatus = "single";

// if (civilStatus === "married") {
//     console.log(firstName + " is married!");
// } else {
//     console.log(firstName + " will hopefully marry soon :)");
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + " is married!");
// } else {
//     console.log(firstName + " will hopefully marry soon :)");
// }

// Ternary operator and switch statements

// var firstName = "John";
// var age = 16;

// age >= 18 ? console.log(firstName + " drinks beer")
// : console.log(firstName + " drinks juice");

// var drink = age >= 18 ? "beer" : "juice";
// console.log(drink);

// CHALLENGE 2

// var johnAverage, mikeAverage, maryAverage
// johnAverage = ((89 +120 +103)/3);
// mikeAverage = ((116 + 94 + 123)/3);
// maryAverage = ((97 + 134 + 105)/3);

// if (johnAverage > mikeAverage >= maryAverage) {
//     console.log("John is the winner");
// } else if (mikeAverage > johnAverage >= maryAverage) {
//     console.log("Mike is the winner");
// } else if (maryAverage > johnAverage >= mikeAverage) {
//     console.log("Mary is the winner!");
// } else if (mikeAverage = johnAverage > maryAverage) {
//     console.log("Mike and John Draw!");
// } else if (maryAverage = johnAverage > mikeAverage) {
//     console.log("Mary and John Draw!");
// } else if (maryAverage = mikeAverage > johnAverage) {
//     console.log("Mary and Mike Draw!");
// } else {
//     console.log("They all Draw!");
// }


// FUNCTIONS

// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);

// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     console.log(firstName + " retires in " + retirement + " years.");
// }

// yearsUntilRetirement(1990, "John");


// ARRAYS

// var names = ["John", "Mark", "Jane"];
// var years = new Array(1990, 1969, 1948);

// console.log(names);
// console.log(names[0]);
// console.log(names.length);

// // Mutate array data
// names[1] = "Ben";
// names[5] = "Mary";
// names[names.length] = "Mary";
// console.log(names);

// names.push("Steve");
// names.unshift("Lucy");
// names.pop();
// console.log(names);

// console.log(names.indexOf("Ben"));

// var isReal = names.indexOf("Mary") === -1 ? "Mary is not real" : "Mary is real";
// console.log(isReal);


// CODING CHALLENGE 3

// function calcTip(bill) {
//     if (bill < 50) {
//         return bill * 0.2;
//     }
//     else if (50 <= bill && bill < 200) {
//         return bill * 0.15;
//     }
//     else {
//         return bill * 0.1;
//     }
// }

// // console.log(calcTip(124))

// var arrayTips = [];
// var arrayTotal = [];

// function calcArray(bill) {
//     var tip = calcTip(bill);
//     arrayTips.push(tip);
//     arrayTotal.push(tip+bill);
// }

// calcArray(124);
// calcArray(48);
// calcArray(268);

// console.log(arrayTips);
// console.log(arrayTotal);


// OBJECTS AND PROPERTIES

// Object literal
// var john = {
//     firstName: "John",
//     lastName: "Smith",
//     birthYear: 1990,
//     family: ["Jane", "Mark", "Bob", "Emily"],
//     job: "teacher",
//     isMarried: false
// };

// console.log(john.firstName);
// console.log(john["lastName"]);
// var x = "birthYear";
// console.log(john[x]);

// john.job = "designer";
// john["isMarried"] = true;
// console.log(john);

// // New object syntax
// var jane = new Object();
// jane.name = "Jane";
// jane.birthYear = 1969;
// jane["lastName"] = "Smith";
// console.log(jane);


//OBJECTS AND METHODS

// var john = {
//     firstName: "John",
//     lastName: "Smith",
//     birthYear: 1990,
//     family: ["Jane", "Mark", "Bob", "Emily"],
//     job: "teacher",
//     isMarried: false,
//     calcAge: function(birthYear) {
//         this.age = 2018 - this.birthYear;
//     }
// };

// john.calcAge();
// console.log(john);


// CHALLENGE 4

// var john = {
//     firstName: "John",
//     lastName: "Smith",
//     mass: 85,
//     height: 2.01,
//     bmi: function(mass, height) {
//         this.bmi = this.mass / (this.height*this.height);
//     }
// };

// var mark = {
//     firstName: "Mark",
//     lastName: "Head",
//     mass: 76,
//     height: 2.09,
//     bmi: function(mass, height) {
//         this.bmi = this.mass / (this.height*this.height);
//     }
// };

// john.bmi();
// console.log(john);

// mark.bmi();
// console.log(mark);

// if (mark.bmi < john.bmi) {
//     console.log("John is a fatty");
// } else {
//     console.log("Mark is a fatty");
// }


// LOOPS AND ITERATION

for (var i = 1; i <= 10; i+=2) {
    console.log(i);
}

var john = ["John", "Smith", 1990, "designer", false];
