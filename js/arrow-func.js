"use strict";

/* 
    Стрілки, явне, не явне повернення, arguments, повернення об'екта
*/

// Два та більше парметрів

// Один параметр

// Без парметрів

// arguments

// Повернення об'єкта

/* 
    Виконайте рефакторинг коду використовуючи стрілочні функції
    */

// const createProduct = function (partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// };

// const logProduct = function (product) {
//   console.log(product);
// };

// const logTotalPrice = function (product) {
//   console.log(product.price * product.quantity);
// };

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/* 
    Виконайте рефакторинг коду для завдання зі зміною баланса використовуючи стрілочні функції
*/

// const each = function (array, callback) {
//   const newArr = [];

//   for (const el of array) {
//     newArr.push(callback(el));
//   }

//   return newArr;
// };

// const mult = function (value) {
//   return value * 2;
// };
// const add = function (value) {
//   return value + 10;
// };
// const toCeil = function (value) {
//   return Math.ceil(value);
// };

// console.log(each([64, 49, 36, 25, 16], mult));
// console.log(each([64, 49, 36, 25, 16], add));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], toCeil));
