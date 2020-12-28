'use strict';

//Creating a constructor fuction
//constrctor first letter will be capital

const Person = function (firstName, birthYear) {
  console.log(this);
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991); //calling constructor we use new keyword
console.log(jonas);
//WHAT DOES NEW KEYWORD DO?
//1. NEW {} IS CREATED
//2. FUNCTION IS CALLED, "THIS" KEYWORD POINTS TO NEW {}
//3.{} LINKED TO PROTOTYPE
//4.FUNCTION AUTOMATICALLY RETURN {}

const matilda = new Person('Matilda', 2017);
const qandeel = new Person('Qandeel', 1995);

console.log(matilda instanceof Person); //true

//PROTOTYPES 👉🏽 consists of constructor funtions
console.log(Person.prototype); //Constructor function
Person.prototype.calcAge = function () {
  console.log(2020 - this.birthYear);
};

qandeel.calcAge();
console.log(qandeel.__proto__); //{calcAge: ƒ, constructor: ƒ}// calcAge: ƒ ()// constructor: ƒ (firstName, birthYear)
// __proto__: Object
console.log(qandeel.__proto__ === Person.prototype); //true

//Prototype inheritance on builtIn objects like Arrays

const arr = [3, 3, 5, 5, 9, 11, 9];
console.log(arr.__proto__); //It will gives us all the methods of an array

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
console.log(Array.prototype);
console.log(Array);

const h1 = document.querySelector('h1');
