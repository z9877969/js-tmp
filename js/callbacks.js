"use strict";

/* 
    Колбеки, функції вищого порядку.
*/

// const foo = function (callback) {};
// const greeting = function () {};

/* 
    Запит на сервер
*/

// const fetchUser = async function (userUrl, callback) {
//   const response = await fetch(`https://api.github.com/users/${userUrl}`);
//   const result = response.json();
//   console.log("result :>> ", result);
// };

// const showInfoAboutUser = function (user) {
//   console.log(user);
// };

/* 
    Реєстрація подій на сторінці
*/
// const userEmail = document.querySelector(".input-email");

// const logValues = function () {
//   console.log("Hello");
// };

// userEmail.addEventListener("input", logValues);

/* 
    Напишіть ф-ю each(array, callback), яка першим параметром очікує об'єкт, а другим ф-ю, яка 
    застосується для кожного елемента масива.
    Ф-я each повинна повернути новий масив елементами якого будуть результати виклику
    ф-ї callback.
*/

// const multi = function (el) {
//   return el * 2;
// };

// const add = function (el) {
//   return el + 2;
// };

// const logElements = (el) => {
//   console.log(el);
// };

// const numbers = [1, 2, , 4, 5];

/* 
    Напишіть наступні ф-ї:
    - createProduct(product, callback) - приймає обЇект товара без id, а також колбек. Ф-я створює 
    обʼєкт товара, додаючи йому йому унікальний ідентифікатор в властивість id та викликає колбек,
    передаючи йому створений об'єкт.
    - logProduct(product) - колбек який приймає об'єкт продукта та виводить його в консоль
    - logTotalPrice(product) - колбек який приймає об'єкт продукта та виводить в консоль 
    загальну вартість товара
*/

// createProduct({name: "apple", price: 30, quantity: 15}, logProduct)
// createProduct({name: "apple", price: 30, quantity: 15}, lgoTotalPrice)
// createProduct({name: "lemon", price: 35, quantity: 10}, logProduct)
// createProduct({name: "lemon", price: 35, quantity: 10}, lgoTotalPrice)

/* 
    Додайте об'єкту account методи withdraw(amount, onSuccess, onError) та 
    deposit(amount, onSuccess, onError)
    метод withdraw викликає:
     - onError(`Кількість не повинна перевищувати ${TRANSACTION_LIMIT}`), 
     якщо amount більше ніж TRANSACTION_LIMIT;
     - onError(`Кількість не може перевищувати баланс: ${this.balance}`), 
     якщо amount більше ніж TRANSACTION_LIMIT;
     - інакше знімаем кошти з баланса та викликаєм onSuccess('Ваш баланс: ${this.balance}')

    метод deposite викликає:
     - onError(`Кількість не повинна перевищувати ${TRANSACTION_LIMIT}`), 
     якщо amount більше ніж TRANSACTION_LIMIT;
     - onError(`Кількість не може бути менше 0`), якщо amount менше або дорівнює нулю;
     - інакше додаєм кошти до баланса та викликаєм onSuccess('Ваш баланс: ${this.balance}')
*/
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   userName: "Bob",
//   balance: 400,
// };

// const handleSuccess = function (message) {
//   console.log("Success!! ", message);
// };

// const handleError = function (message) {
//   console.log("Error!! ", message);
// };

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);

// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
