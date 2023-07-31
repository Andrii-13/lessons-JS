// const x = 3;
// const y = 8;

// console.log(x + y);

// console.log(y%x);

// let value = 8;
//  value += -2;

//  console.log(value);

//  const x = 5;
// const y = 10;
// const z = 5;
// // 
// console.log("x > y:", x > y)

// const valA = '5';
// console.log(typeof valA);
// console.log(Number (valA));
// console.log(typeof Number (valA));

// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN

// const validNumber = Number("51"); // 51
// console.log(Number(validNumber));
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number(invalidNumber));
// console.log(Number.isNaN(invalidNumber)); // true

// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004

// const q = 27.999;
// console.log("origin =", q );
// console.log("Math.ceil =" , Math.ceil(q)); //округлити в меншу сторону до цілого
// console.log("Math.floor =" , Math.floor(q)); //округлити в більшу сторону
// console.log("Math.round =" , Math.round(q)); // округлити по математичним законам

// Change code below this line
// function add(a, b, c) {
//     const result = a + b + c;
//     console.log(`Addition result equals ${result}`);
//     // Change code above this line
//   }
  
//   add(15, 27, 10);
//   add(10, 20, 30);
//   add(5, 10, 15);

// alert() позволяет выводить информацию во всплывающем окне;
// confirm () позволяет спрашивать соглашение во всплывающем окне;
// prompt() получает данные от пользователя во всплывающем окне.

// confirm('How are you');
// alert('what is it');


// const myNumber = prompt('enter your number');
// console.log(typeof Number(myNumber));
// console.log(Number(myNumber));

// let base = Number(prompt('enter base number'));
// let exent = Number(prompt('enter exent'));


// let conclusion = Math.pow(base, exent);
// // console.log(typeof base);
// console.log(base);

// console.log(typeof exent);
// console.log(exent);
// console.log('ступінь = ',conclusion);

// console.log(true + 1 - null)

// const x1 = 0;
// const x2 = 30;


// let number = prompt();


// console.log(number > x1 && number < x2);

// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     // Change code below this line
//     const isMatch = password && SAVED_PASSWORD;
  
//     // Change code above this line
//     return isMatch;
//   }

// console.log(!!"не пустий рядок" );

// console.log(!!null);

// alert( alert(1) || alert(3) || 2  );

// alert( alert(1) && alert(2) )



// let age = prompt('введи число');
// console.log(age);

// if (age >=14 && age <=90){
// console.log('In diapasone')
// }else
// console.log('without diapasone')

// (age >=14 && age <=90) ? (console.log('In diapasone')) : console.log('without diapasone');

// if (age >=14 || age >=90){
// console.log('In diapasone')
// }else
// console.log('without diapasone')

// let age = prompt('Enter you login');
// let password;

// if (age === null){
//     alert('Canceled');
// }else if(age !== "Admin"){
//     alert("I don't know you");
// }else{
// password = prompt('Enter your password');
// if (password === null){
//     alert('Canceled');
// }else if(password !== 'TheMaster'){
//     alert('Wrong password');
// }else {
//     alert('Welcome!');
// }
// }


// let counter=0;

// while (counter > 10){
//     console.log('counter = ', counter);
//     counter +=1;
// }

// let password;

// do{
//     password = prompt("ввдеди пароль більше 3 символів");

// }while ( password.length < 3)
// console.log(password);

// let start = 0;
// let quotity = 10;

// for (start = 0; start < quotity; start +=1){

    

// }console.log(start);


// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);
  
//     if (i === 3) {
//       console.log("Нашли число 3, прерываем выполнение цикла");
//       break;
//     }
//   }
  
//   console.log("Лог после цикла");

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) 
//   {
//         continue;
//   }

//   console.log("Нечетное i: ", i); 
// }

// let available = 130;
// let ordered = 100;

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//   if (ordered > available){
//     message = "Not enough goods in stock!"
//       }else
//     message = "Order is processed, our manager will contact you."
//     // Change code above this line
//     return message;
    
//   }
//   console.log(message);

// let quantityIteration = 30;

// for (i=5; i<quantityIteration; i+=1)
// {
//   if (i%2){
//     continue;
//   }
//   console.log( 'even', i);
// }
  

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//    console.log(result);
//   return result;
   
//  }
 
//  checkForName("Egor Kolbasov", "egor");
 

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   message = message.toLowerCase();
// result = message.includes('spam') || message.includes('sale');
// // console.log(result);
//   // Change code above this line
//   return result;
// }

// checkForSpam("Amazing SalE, only tonight!")


let arrow = [45,12,13,48,75,95,91,53,42];

// console.log(arrow[3]);
// console.log(arrow.length);
// const lastIndex = arrow.length-1;
// console.log(lastIndex);

// let total=0;
// let totalSum = 0;
// for (let i=0; i < arrow.length; i +=1){
//   totalSum += arrow[i];


//   if(arrow[i]%2 !== 0){
// total += arrow[i];
// console.log(arrow[i]);
// continue;
// }
// console.log( 'четное -', arrow[i])
// }
// console.log( "сума в кінці коду = ", total);
// console.log( "загальна сума = ", totalSum);

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
// let sum = 0;

// for (const number of numbers){
//   if (number < threshold){
//   continue
// }
// sum += number;
// console.log(number);

// }console.log('загальна сума: ', sum);


// const array = [];
// array.push(5);
// array.push("f");

// // console.log(array);

// // array.pop();
// console.log(array.pop());

// console.log(array);

// const colors = ["red", "green", "blue"];

// colors.splice(2, 0, "purple", "black");
// console.log(colors); // ["red", "green", "purple", "blue"]

// colors.splice()

// const languages = ["C", "C++", "Java", "JavaScript"];

// // Заменяем элемент с индексом 1 на новый
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заменяем один элемент (с индексом 2) на несколько
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length-1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
// fruits.splice(1,1,"peach");
// fruits.splice(3,1,'banana')
// console.log(fruits);

const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const lastElementIndex = fruits.length-1;
const lastElement = fruits[fruits.length-1];

console.log(lastElementIndex);
console.log(lastElement);