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

//CHALLENGE 1:
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
//Solution 1:
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

//Solution 2:
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(
    `${this.make} ${this.speed} is getting lower by applying accelating`
  );
};

//Solution 3:
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} ${this.speed} is getting lower by applying brake`);
};
// console.log(new Car('BMW', 120));

const bmw = new Car('BMW', 120);
const Mercedes = new Car('mercedes', 95);

bmw.accelerate();
bmw.brake();
Mercedes.accelerate();
Mercedes.brake();

//ES6
//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet = function () {
    console.log(`Hi, ${this.fullName}`);
  };
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else {
      console.log(`${name} is not a full name`);
    }
  }
  get fullName() {
    return this._fullName;
  }
}
console.log(new PersonCl('Walter White', 1970));

const purdal = new PersonCl('Qandeel Mya', 1986);
console.log(purdal);
purdal.calcAge();

console.log(purdal.__proto__ === PersonCl.prototype); //true
purdal.greet();

//getter and setter in Javascript

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],
  get latest() {
    return account.movements.slice(-1).pop(); //slice will give us the element on -1 and pop will remove the last element
  },
  set latest(mov) {
    account.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50; //this latest is a property is assigning value to it
console.log(account.movements);
