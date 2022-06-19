'use strict'

/*
? Напишіть метод calcTotalPrice(stoneName), який приймає назву каменя та розраховує
? і повертає загальну вартість каменів з такою назвою, ціною та кількістю з властивості stones.
*/

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// console.log(chopShop.calcTotalPrice('Sdfd')); // Такого камня нет

/*
? Виконайте рефакторинг методів об'єкта phonebook щоб код запрацював.
*/

// const phonebook = {
//   contacts: [],

//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: generateId(),
//       createdAt: getDate(),
//     };

//     contacts.push(newContact);
//   },

//   generateId(){
//     return '_' + Math.random().toString(36).substring(2, 9);
//   },

//   getDate() {
//     return Date.now();
//   },

//   getContacts() {
//     return this.contacts;
//   },
// };

// phonebook.add({
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// });

// phonebook.add({
//   name: 'Poly',
//   email: 'poly@hotmail.com',
// });

// console.log(phonebook.getContacts());

/*
? Створіть об'єкт calculator з трьома методами:
?
? read(a, b)- принимает два значения и сохраняет их как свойства объекта.
? add() - возвращает сумму сохранённых значений.
? mult() - перемножает сохранённые значения и возвращает результат.
*/

// const calculator = {};
  
//   calculator.read(10, 20);
  
//   console.log(calculator.add());
//   console.log(calculator.mult());