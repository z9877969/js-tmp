'use strict';

// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js

/*
 * Завантаження скриптів
 */

//? Створіть функцію loadScript(url), яка буде створювать і вставлять скрипт на сторінку
// const loadScript = (url, onSuccess, onError) => {
//   const script = document.createElement('script');
//   script.src = url;

//   document.body.append(script);

//   script.addEventListener('load', () => {
//     onSuccess(url);
//   });

//   script.addEventListener('error', e => {
//     onError(url, e);
//   });
// };

// const handleSuccess = scriptUrl => {
//   console.log(`${scriptUrl} download success!`);
// };

// const handleError = scriptUrl => {
//   console.log(`${scriptUrl} download rejected!`);
// };

// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   handleSuccess,
//   handleError
// );
// loadScript(
//   'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
//   handleSuccess,
//   handleError
// );
// loadScript(
//   'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',
//   handleSuccess,
//   handleError
// );

// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   scriptUrl => {
//     console.log(`${scriptUrl} download success!`);

//     loadScript(
//       'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
//       scriptUrl => {
//         console.log(`${scriptUrl} download success!`);

//         loadScript(
//           'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.j',
//           scriptUrl => {
//             console.log(`${scriptUrl} download success!`);
//           },
//           scriptUrl => {
//             console.log(`${scriptUrl} download rejected!`);
//           }
//         );
//       },
//       scriptUrl => {
//         console.log(`${scriptUrl} download rejected!`);
//       }
//     );
//   },
//   scriptUrl => {
//     console.log(`${scriptUrl} download rejected!`);
//   }
// );

//? Передайте колбек, який буде викликатись після виконання завантаження скрипта

//? Обробка помилок

//? Загрузка декількох скриптів

//? АдскАя піраміда колбеків

//? Рішення через проміси
// const loadScript = url => {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement('script');
//     script.src = url;

//     document.body.append(script);

//     script.addEventListener('load', event => {
//       resolve(script.src);
//     });

//     script.addEventListener('error', event => {
//       reject(script.src);
//     });
//   });
// };

// loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')
//   .then(scriptUrl => {
//     console.log(`${scriptUrl} загружен успешно!`);

//     return loadScript(
//       'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'
//     );
//   })
//   .then(scriptUrl => {
//     console.log(`${scriptUrl} загружен успешно!`);

//     return loadScript(
//       'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js'
//     );
//   })
//   .then(scriptUrl => {
//     console.log(`${scriptUrl} загружен успешно!`);
//   })
//   .catch(scriptUrl => {
//     console.log(`${scriptUrl} не загрузился!`);
//   });
