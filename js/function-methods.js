"use strict";

/*
 *  Методb функції call та apply
 */

//* Функції це об'єкты зі своїми властивостями та методами
// const greeting = function (userName) {
//   console.log(`Hello ${userName}`);
// };

//* call и apply

//? Викличте функцію showFullName в контексті об'єкта user (через присвоєння метода, call і apply)

// const showFullName = function (message, num) {
//   console.log(num);
//   console.log(`${message} ${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

//? Викличте функцію showFullName в контексті об'єкта anotherUser
// const anotherUser = {
//   firstName: 'Ray',
//   lastName: 'Fleming',
//   age: 40,
// };

// showFullName.call(anotherUser, 'Hello', 15);

//* Одалживание метода

// const createCurrentDate = function (...args) {
//   // v.1
//   // return args.join(".");
//   //
//   // v.2
//   // const data = Array.from(arguments)
//   // return data.join(".");
//   //
//   // v.3
//   // return [].join.call(arguments, ".")
// };

// console.log(createCurrentDate(20, 6, 22));

//* bind
// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// const showUserName = showFullName.bind(user);

// showUserName();

// const anotherUser = {
//   firstName: 'Rebecca',
//   lastName: 'Elliott',
//   age: 30,
// };

// const showAnotherUserName = showFullName.bind(anotherUser);

// showAnotherUserName();

//* Метод объекта в роли колбэка

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

// someFunction(user.showName.bind(user));

/*
? Що виведе данний код?
*/

// const f = function () {
//   console.log(this.name);
// };

// const user = {
//   name: 'Вася',
// };

// const anotherUser = {
//   name: 'Петя',
// };

// const copyFunc = f.bind(user).bind(anotherUser);

// copyFunc();

/*
? Виклик checkPassword() в наведеному нижче коді повинен перевірити пароль а потім викликати user.loginOk/loginFail в залежності від відповіді.
? Проте, його виклик призводить до помилки. Чому?
 */

// const checkPassword = function (ok, fail) {
//   // ok = user.loginOk
//   // fail = user.loginFail

//   const password = 'rockstar';

//   if (password === 'rockstar') {
//     ok();
//   } else {
//     fail();
//   }
// };

// const user = {
//   name: 'Вася',

//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// checkPassword(user.loginOk, user.loginFail);
