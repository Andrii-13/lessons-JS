// function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
//   }

// //   // Передаємо інлайн функцію greet у якості колбека
// //   registerGuest("Манго", function greet(name) {
// //     console.log(`Ласкаво просимо ${name}.`);
// //   });

//   // Передаємо інлайн функцію notify у якості колбека
//   registerGuest("Полі", function notify(name) {
//     console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
//   });

// function processCall(recipient) {
//     // Імітуємо доступність абонента випадковим числом
//     const isRecipientAvailable = Math.random() > 0.5;

//     if (!isRecipientAvailable) {
//       console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//       // Логіка активації автовідповідача
//     } else {
//       console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//       // Логіка прийняття дзвінка
//     }
//   }

//   processCall("Манго");

// function processCall(recipient, onAvailable, onNotAvailable) {
//     // Імітуємо доступність абонента випадковим числом
//     const isRecipientAvailable = Math.random() > 0.5;

//     if (!isRecipientAvailable) {
//       onNotAvailable(recipient);
//       return;
//     }

//     onAvailable(recipient);
//   }

//   function takeCall(name) {
//     console.log(`З'єднуємо з ${name}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }

//   function activateAnsweringMachine(name) {
//     console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   }

//   function leaveHoloMessage(name) {
//     console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//     // Логіка запису голограми
//   }

//   processCall("Манго", takeCall, activateAnsweringMachine);
//   processCall("Полі", takeCall, leaveHoloMessage);

// const numbers = [5, 10, 15, 20, 25];

// // // Класичний for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// // }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// const add = (...args) => {
//     console.log(args);
//   };

//   add(1, 2, 3,4); // [1, 2, 3]

// Колбек-функція
// function greet(name) {
//   console.log(name);
//   return name;
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//  callback(name);
// }

// registerGuest("Манго", greet);

// Task 2

// function deliverPizza(pizzaName) {

//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {

//   return callback(pizzaName);
//   // console.log(callback(pizzaName));;
// }

//  console.log(makeMessage("Royal Grand", makePizza));

// Task 4

// Необхідно написати логіку обробки замовлення піци.
// Виконай рефакторинг методу order таким чином,
//  щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName,
//  метод order повинен повертати результат виклику колбека onError,
//  передаючи йому аргументом рядок
//  "There is no pizza with a name <имя пиццы> in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName,
//  метод order повинен повертати результат виклику колбека onSuccess,
//  передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, makePizza, onOrderError) {
//     if (!this.pizzas.includes(pizzaName)){
//       // console.log( pizzaName);
//       return onOrderError(pizzaName);
//     }
//         return makePizza(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! There is no pizza with a name ${error} in the assortment.`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));;
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));;
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));;
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));;

//task 5
// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems
//  - масив чисел, і розраховує загальну суму його елементів, яка зберігається
//  у змінній totalPrice і повертається як результат роботи функції.

// Виконай рефакторинг функції таким чином, щоб замість циклу for,
// вона використовувала метод forEach.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(function (number, index){
//     totalPrice += number;

//   });

// for (let i = 0; i < orderedItems.length; i += 1) {
//   totalPrice += orderedItems[i];
// }

//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice([3,7,10,5]));

// const add = (...arguments) => {
//   console.log(arguments);
// }

// function sum(a,b, ...args){
//   const arr = Array.from(arguments);
// console.log(arr);
// console.log(a);
// console.log(b);
// console.log(args);
// }

// sum(1,2,4,5,6,7);

// console.log(add(1,2,3,4,5,6,7,8,9));
// console.log(sum(1,2,4));

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);

//Task 6
// Виконай рефакторинг функції таким чином, щоб замість циклу for,
// вона використовувала метод forEach.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

// numbers.forEach(number => {
//   if (number > value){
//     filteredNumbers.push(number)
//   }
// });

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > value) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// task 7

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(element => {
//   if (secondArray.includes(element))
//   commonElements.push(element);
// });

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

//task 11

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// переробив на звичайні функції!!!!!!!!!!!!!!!!!!

// const planets = ["Земля", "Марс", "Венера", "Юпітер"];
// const fruits = ["apple", "plums", "pear"]

// function upPlanet(planet) {
//       return planet.toUpperCase();
// }

// function sortArr(array, callback){
// const newArray = [];

// for (const element of array) {
//    newArray.push(callback(element));
// }
// return newArray;
// }
// console.log(sortArr(planets, upPlanet));
// console.log(sortArr(fruits, upPlanet));

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const studentsName = students.map(student => student.courses);

// console.log(studentsName);

// const studentsNam = students.flatMap(student => student.courses);

// console.log(studentsNam);

//task 13

// function changeEven(numbers, value) {
//   const newNumbers = numbers.map((number) => {
//     if (number % 2 === 0) {
//       return number + value;
//     }
//     return number;
//   });

//   return newNumbers;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

//task 17

// Доповни функцію getUserNames(users) таким чином,
//  щоб вона повертала масив імен користувачів (властивість name)
//  з масиву об'єктів в параметрі users.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserNames = users => {
//   const userName = users.map(user => user.email);
//  return userName;
// };

// console.log(getUserNames(users));

//task 20

// Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг
// (властивість genres) з масиву books, а у змінній uniqueGenres -
// масив унікальних жанрів, без повторень.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genres, index, arr) => arr.indexOf(genres) === index);

// console.log(allGenres);
// console.log(uniqueGenres);

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const bbbb = colorPickerOptions.find(({label}) => label === 'blue');

// console.log(bbbb);

// const vvv = colorPickerOptions.filter(({label}) => label === 'blue');

// console.log(vvv);

// Task-1
// Напишіть функцію, яка використовує метод map, щоб створити новий масив об'єктів,
// в якому буде інформація про середній бал кожного студента.

// const students = [
//   { name: "John", grades: [80, 85, 90] },
//   { name: "Alice", grades: [90, 95, 92] },
//   { name: "Bob", grades: [70, 80, 75] },
//   { name: "Emily", grades: [95, 92, 88] },
//   { name: "David", grades: [85, 88, 90] },
// ];

// function getAverage (array){
//   const result = array.map(({name, grades})=>{
//     const averageGrade = grades.reduce(((grade, item)=>{
//       return grade+item;
//       // console.log(grade);
//     }),0);

//     return {
//         name,
//         grades: averageGrade,
//     };
//   })

//   return result;
// }

// console.log(getAverage(students));

// function getAverage(arr) {
//     const result = arr.map(({ name, grades }) => {
//         const total = grades.reduce((acc, item) => acc + item, 0)
//         const obj = {
//             name,
//             average: Math.round(total / grades.length)
//         }
//         return obj
//     });

//     return result;
// }
// console.log(getAverage(students));

// Task-2
// Напишіть функцію, яка використовує метод filter, щоб створити новий масив,
//  в якому будуть тільки студенти які старше 20 років

// const students = [
//     { name: 'John', age: 20, gpa: 3.8 },
//     { name: 'Alice', age: 21, gpa: 3.2 },
//     { name: 'Bob', age: 19, gpa: 3.5 },
//     { name: 'Emily', age: 22, gpa: 3.9 },
//     { name: 'David', age: 20, gpa: 3.7 }
// ];

// function getAdult (array){
//   const adult = array.filter(({age}) => {

//     return age <= 20;
//   });

//   return adult;
// }

// console.log(getAdult(students));

// Task-3
// Напишіть функцію, яка використовує метод find, щоб знайти книжку
// за її назвою (title)

// const books = [
//     { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
//     { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', year: 2008 },
//     { title: 'The Pragmatic Programmer: Your Journey to Mastery', author: 'Andrew Hunt, David Thomas', year: 1999 },
//     { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', year: 1994 },
//     { title: 'Refactoring: Improving the Design of Existing Code', author: 'Martin Fowler', year: 1999 }
// ];

// function findBook (arr, title){
//   return arr.find(({title : bookTitle}) => bookTitle === title) || 'Not found'

// }

// console.log(findBook(books, 'The Pragmatic Programmer: Your Journey to Mastery'));
// console.log(findBook(books, 'qwerty'));

// Task-4
// Напишіть функцію, яка використовує метод reduce, щоб обчислити загальну
// вартість всіх товарів у масиві, яка розраховується як добуток ціни товару на
// його кількість, а потім сумується з іншими товарами. Результат повинен бути
// загальною вартістю всіх товарів.

// const products = [
//     { id: 1, name: 'T-shirt', price: 20, quantity: 3 },
//     { id: 2, name: 'Jeans', price: 50, quantity: 2 },
//     { id: 3, name: 'Sneakers', price: 80, quantity: 1 },
//     { id: 4, name: 'Hat', price: 15, quantity: 4 },
//     { id: 5, name: 'Socks', price: 5, quantity: 6 }
// ];

// function getTotalPrice(arr){
//   const tolalPrice = arr.reduce((acc, {name, price, quantity}) => {
//       console.log(`price ${name} =`, price * quantity) ;
//    return price * quantity + acc;

//   }, 0);

//   return `tolalPrice is ${tolalPrice}` ;
// }
// console.log(getTotalPrice(products));

// Task-5
// Напишіть функцію, яка використовує метод sort, щоб відсортувати книжки
//  за роком видання у спадаючому порядку. Результат повинен бути відсортованим
//   масивом книжок за роком видання.

// const books = [
//     { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
//     { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', year: 2008 },
//     { title: 'The Pragmatic Programmer: Your Journey to Mastery', author: 'Andrew Hunt, David Thomas', year: 1999 },
//     { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', year: 1994 },
//     { title: 'Refactoring: Improving the Design of Existing Code', author: 'Martin Fowler', year: 1999 }
// ];

// function getSortBooks(arr){
// return [...arr].sort((a,b) => b.year - a.year).
// map(({title, year})=>{
// return {title, year }
// });

// }

// console.log(getSortBooks(books));

// Task-6
// Напишіть функцію, яка використовує перебираючі методи масиву map та filter,
//  щоб отримати масив назв продуктів, ціна яких менше 2 доларів та відсортуй їх
//   за алфавітним порядком.

// const products = [
//   { id: 2, name: "Banana", price: 0.99 },
//   { id: 1, name: "Apple", price: 1.99 },
//   { id: 3, name: "Orange", price: 2.49 },
//   { id: 4, name: "Grapes", price: 3.99 },
// ];

// const limit = 2;

// function getProduct(arr, number) {
//   const sortProducts =  [...arr].filter(({price})=> price < number )
//   .sort((a,b) =>a.name.localeCompare(b.name)).map(({name})=> name);

//   return sortProducts;
// }

// console.log(getProduct(products, limit));

// Task-7 HARD 😈

// Є рядок в якому довільна кількість літер, гарантовано в рядку немає
// пробілів та розділових знаків, потрібно повернути об'єкт де кожна літера
//  буде ключем, а кількість разів яку вона дублюється буде значенням ключа
// Результат на який очікуємо
// const obj = {
//     a: 3,
//     b: 4,
//     s: 3,
//     // ...
// }

// const str = "absdabsrgbadgtdswwbetflg";

// const letterObj = str.split("").reduce((acc, item) => {
//   if (acc.hasOwnProperty(item)) {
//     acc[item] += 1;
//   } else {
//     acc[item] = 1;
//   }
//   return acc;
// }, {});

// console.log(letterObj);

//task 20
// Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг
//  (властивість genres) з масиву books, а у змінній uniqueGenres -
//  масив унікальних жанрів, без повторень.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(({ genres }) => genres);
// const uniqueGenres = allGenres.filter((genres, index,  array) => array.indexOf(genres) === index);

// console.log(allGenres);
// console.log(uniqueGenres);

//task 21

// Використовуючи метод filter(), доповни код таким чином, щоб:

// У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating)
// більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором
// з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(({rating})=> rating >= MIN_RATING);
// const booksByAuthor = books.filter(({author})=> author === AUTHOR);

// console.log(booksByAuthor);

//task 22
// Доповни функцію getUsersWithEyeColor(users, color) таким чином,
//  щоб вона повертала масив користувачів, у яких колір очей (властивість eyeColor)
//   збігається зі значенням параметра color.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// const color = "brown";

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(({ eyeColor }) => eyeColor === color);

// };

// console.log(getUsersWithEyeColor(users, color));






// task 34

// Ігровому сервісу необхідний функціонал підрахунку середнього часу, 
// проведеного в іграх. Доповни код таким чином, щоб у змінній totalPlayTime 
// вийшло загальний ігровий час з масиву playtimes.


// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((acc, playtime)=> acc + playtime,0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime);

// task 35
// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі 
// для кожного гравця, і отримати загальну суму цих значень часу.


// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];


 
// const totalAveragePlaytimePerGame = players.reduce((acc, {playtime, gamesPlayed}) => 
//   acc + playtime/gamesPlayed,0);
// console.log(totalAveragePlaytimePerGame);


//task37

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]


// const getTotalFriendCount = users =>
//   users.reduce((acc, user) => 
//     acc + user.friends.length
//     , 0);



// console.log(getTotalFriendCount(users));



//task 38

// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву
//  releaseDates, відсортована за зростанням, а у змінній alphabeticalAuthors
//   - копія масиву імен авторів authors, відсортована за алфавітом.


// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];


// const ascendingReleaseDates = [...releaseDates].sort((a,b) => a-b);


// const alphabeticalAuthors = [...authors].sort((a,b) => a.localeCompare(b))

// console.log(alphabeticalAuthors);
// console.log(authors);


// task 39

// Онлайн бібіліотеці необхідно відображати книги, відсортовані за датою видання,
//  за її зростанням або спаданням. Доповни код таким чином, щоб у змінній
//   ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за 
//   зростанням, а у змінній descendingReleaseDates - копія, відсортована 
//   за спаданням.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a,b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a,b) => b - a);
// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

//task 40

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

//task 41

// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг, відсортований за 
// ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований 
// за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований 
// за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований 
// за спаданням рейтингу.


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];


// const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));
// const sortedByReversedAuthorName = [...sortedByAuthorName].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));
// const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);
// const sortedByDescentingRating = [...sortedByAscendingRating].sort((firstBook, secondBook) =>secondBook.rating - firstBook.rating);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);


// task 45
// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів
//  в алфавітному порядку, рейтинг книг яких більший за значення змінної
//   MIN_BOOK_RATING.


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books.filter(({rating}) => rating > MIN_BOOK_RATING)
// .map(book=> book.author)
// .sort((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor));


// console.log(names);



//task 47

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getSortedFriends = users => {
//   return users.flatMap(user => user.friends)
//   .filter((userName, idx, arr) => arr.indexOf(userName) === idx)
//   .sort((firstFriend, secondFriend) => firstFriend.localeCompare(secondFriend)); 
// };

// console.log(getSortedFriends(users));