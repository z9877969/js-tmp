"use strict";

/*
 *  Контекст вызова this
 */

/*
 * this існує тільки всередині функцій.
 * На контекст не впливає те, де функція была //!ОГОЛОШЕНА.
 * На контекст впливає те - де функція //!ВИУЛИКАЄТЬСЯ.
 */

//TODO: Розглянемо як this поводить себе в методах
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log('this -----> ', this);
//   },

//   showName() {
//     console.log('name:', );
//   },
// };

// const anotherUser = ...

//TODO: Розглянемо як this поводить себе в звичайних функціях (строгий, не строгий режим)

//? Function expression
// const greeting = function () {
//   console.log('this ---->', this);
//   console.log('Hello');
// };

// greeting();

//? Function declaration
// function greeting() {
//   console.log('this ---->', this);
//   console.log('Hello');
// }

// greeting();

//? Arrow function
// const greeting = () => {
//   console.log('this ---->', this);
//   console.log('Hello');
// };

// greeting();

//TODO: Присвоєння функції як метода объекта

// const showThis = function () {
//   console.log(`this ----> `, this);
// };

// const showThisName = function () {
//   console.log(`this name is: ${this.name}`);
// };

// const user = {
//   name: 'Luis',
//   age: 30,
// };

//TODO: Виклик метода об'єкта без контекста
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log(`this ---->`, this);
//   },

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// showThis = user.showThis;
// showName = user.showName;

//TODO: This в callback функціях

// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log(`this ---->`, this);
//   },

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// const someFunction = function (callback) {
//   // callback = user.showName;

//   callback();
// };

// someFunction(user.showName);

//TODO: This в стрілочних функціях. Стрелочні функції не мають свого this, this в стрілках завжди посилається на батьківський this.
// const user = {
//   name: "Luis",
//   age: 30,

//   changeAge: (newAge) => {
//     console.log(`this ---->`, this);

//     this.age = newAge;
//   },

// // ПРИКЛАД! Предача контексту в стрілку
//   changeUserAge(newAge) {
//     const changeAge = () => {
//       console.log(`this ---->`, this);

//       this.age = newAge;
//     };

//     changeAge();
//   },
// };

// user.changeAge(40);
// console.log(user);

/*
? Яким буде результат виконання данного кода?
*/

// let user = {
//   name: 'Джон',

//   go() {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// const goFn = user.go;

// goFn();
// user.go();

/*
? Тут функція makeUser повертає об'ект.
? Яким буде результат при зверненні до властивості об'екта ref? Чому?
*/

// const makeUser = function () {
//   return {
//     name: 'Джон',
//     ref: this,
//   };
// };

// const user = makeUser();

// console.log(user);
// console.log(user.ref.name);

/*
? Яким буде результат console.log
*/

// function makeUser() {
//   return {
//     name: 'Джон',
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();

// console.log(user);
// console.log(user.ref().name);

/*
? Це ladder (сходи) – об'ект, який дозволяє підніматись вгору и спускатися:
*/

// const ladder = {
//   step: 0,

//   up() {
//     this.step += 1;
//   },

//   down() {
//     this.step -= 1;
//   },

//   showStep() {
//     console.log(this.step);
//   },
// };

// Тепер, якщо нам потрібно зробить декілька послідовних викликів, ми можемо виконати це так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

// Змініть код методів up, down и showStep таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад так:

// ladder.up().up().down().showStep();
