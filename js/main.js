"use strict";

/*
  Масиви, літерал масива, індексація, довжина
  !!Масив - структура данних, яка може в собі зберігати обнотипні індексовані елементи
*/

/*
  Створіть масив genres з елементами "Jazz" та "Blues"
  Додайте "Рок н ролл" в кінець (через індекс та методи масива).
  Виведіть в консоль перший елемент массива
  Виведіть в консоль останній елемент масива. Код повинен працювати для масива довільної довжини.
  Видаліть перший елемент масиву та виведіть його в консоль.
  Вставте "Country" та "Reggy" на початок масива.
*/

/*
  Передача за посиланням та по значенню
*/

/*
  Створіть змінну а = 10
  Створіть змінну b та просвойте їй значення а
  Виведіть в консоль обидві ці змінні
  Змініть значення а та виведіть обидві змінні в консоль
*/

/*
  Створіть масив аrrA = [1, 2, 3]
  Створіть масив arrB та просвойте значення масиву arrA
  Виведіть в консоль обидва цих масива
  Добавте елемент в масив arrA та виведіть обидва ці масиви в консоль
*/

/*
  Перебор масива циклами for, for..of
*/

/*
  Напиши скрипт для перебору масива fruits циклом for.
  Для кожного елемента виведи в консоль строку в форматі номер_елемента: значення_елемента.
  Нумерація елементів повинна починатися з 1.
*/
// const fruits = [
//   "Apple",
//   "Lemon",
//   "Pear",
//   "Cherry",
//   "Strawberries",
// ];

/*
  Напишіть скрипт пошука самого маленького числа в масиві.
  Код повинен працювати для любого масива чисел.
  Використайте цикл для вирішення задачі
*/
// const numbers = [10, 94, 6, -1, 13, 25, -37];

/*
  У нас є масив з зарплатами працівників з різних відділів, потрібно порахувати загальну суму зарплат.
*/
// const salaries = [200, 400, 550, 320, 100];

/*
  У нас є декілька масивів з зарплатами працівників з різних відділів. 
  Потрібно порахувати загальну суму зарплат.
  1варіант - два цикли
  2варіант - один цикл об"єднавши в один масив -> concat
*/
// const managerSalaries = [200, 400, 550, 320, 100]
// const developerSalaries = [800, 1500, 4000];

/*
  Вирішити дві попередні задачі за допомогою for..of
*/

/*
  Базові методи split, join, indexOf, includes, push, slice, splice, concat
*/

/*
  Напиши скрипт для обчислення площі трикутника зі сторонами
  значення яких ззберігається в змінній values вигляді строки.
  Значення гарантовано розділені пробілом.
*/

/*
  Напиши скрипт який виводить в консоль ім"я та телефонний номеркористувача.
  В змінних names та phones зберігаються строки імен та телефонних номерів розділених комами.
  Порядковий номер в імен та телефонів вказує на віідповідність
  Кількість імен та телефонів гарантовано однакова
*/
// const names = "Bart, Bob, Rosie, Jacob";
// const phone = "89001234567,89001232167,89004534567,89001987567";

/*
  Напиши скрипт який "розгортає" строку (зворотний порядок букв) 
  та виводить його в консоль 
  1варіант: for зі строкою в зворотому порядку
  2варіант: push в зворотому порядку
  3варіант: reverse()
*/
// const str = "Welcome to the future"

/*
  У нас є масив працівників.
  Відсортуйте його, щоб працівники не повторювались.
*/
// Рішення розібрати по ітераціям
// const employes = ["Dennis", "Show", "Jack", "Morris", "Show", "Jack"];
// const filterdEmploys = [];

// Працівник Show звільнився, видаліть його з масиву. Використайте splice
// Додайте нового працівника Morgan перед Jack
