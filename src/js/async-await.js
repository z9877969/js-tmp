'use strict';

/*
 * async/await
 * асинхронна(async) функція ЗАВЖДИ повератє проміс.
 * await заставляє функцію чекати виконання проміса.
 * await не можна використати поза асинхронними функціями.
 * try/catch для відлова помилок
 */

// const fn = async username => {
//   return `Hello ${username}`;
// };

// fn('Bob').then(data => {
//   console.log(data);
// });

// const BASE_URL = 'https://jsonplaceholder.typicode.com';

// const fetchPosts = () => {
// };

// fetchPosts();

//? TASK 01
// Перепеши на async/await

// const loadPosts = url => {
// return fetch(url).then(response => {
//   if (!response.ok) {
//     throw new Error(response.status);
//   }
//   return response.json();
// });
// };

// loadPosts('https://jsonplaceholder.typicode.com/posts');
// .then(data => {
//   console.log(data);
// })
// .catch(err => {
//   console.log(err);
// });

//? TASK 02
// Є «звичайна» функція. Як можна всередині неї отримати результат виконання async–функції?
// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   // ...що тут написать?
//   // щоб викликать wait() и дочекатись результат "10" від async–функції
//   // не забувайте, що тут не можна використовувати "await"
// }

// f();
