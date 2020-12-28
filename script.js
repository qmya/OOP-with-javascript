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
