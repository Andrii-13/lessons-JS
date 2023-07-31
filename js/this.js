

// Тестувальники знайшли баги в коді сервісу зберігання історії замовлень їжі.
//  Тобі необхідно виправити їх, правильно розставивши this в методах об'єкта 
//  historyService, щоб методи почали працювати правильно.


// class Car {
//   constructor(brand, model, price){
//     this.brand = brand;
//       this.model = model;
//       this.price = price;
//   }
    
//   }
  
// let bmw = new Car();

// let bmw = new Car('mercedes', 'w3' //price: 1000,
// );

// console.log(bmw);

// bmw = {
//   brand: 'mercedes',
//   model: 'w3',
//   // price: 1000,
// }

// console.log(bmw);

// bmw.model ='j7';
// // bmw.price = 2000;

// bmw = {
//   model: 'k8',

// }

// console.log(bmw);
// const animal = {
//   legs: 4,
// }

// const dog = Object.create(animal);

// console.log(dog);

// dog.name= 'Bob';

// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.hasOwnProperty('legs'));


// class User {

//   constructor(name, email){

//   this.name = name;
//   this.email = email; 
// }
// };

// const doly = new User('doly', 'doly@mail.ua')

// doly.password = 'wwwww'

// console.log(doly);



//task 10
// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів.
//  Клас очікує тільки один аргумент - початковий масив товарів, який записується у властивість items об'єкта,
//   що створюється.

// Оголоси наступні методи класу:

// getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає цей метод.
// addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості items об'єкта,
//  який викликає цей метод.
// removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у властивості items об'єкта,
//  який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, 
// в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// class Storage {
//   constructor(items){
//     this.items = items;

//   }
//   getItems(){
//     return this.items;
//   }
//   addItem(newItem){
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove){
//     const idx = this.items.indexOf(itemToRemove);
//     return this.items.splice(idx, 1);
      
    
//   }

// }


// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]




//task 11
// Напиши клас StringBuilder, який приймає один параметр 
// initialValue - довільний рядок, який записується у властивість value об'єкта, 
// що створюється.

// Оголоси наступні методи класу:

// getValue() - повертає поточне значення властивості value.
// padEnd(str) - отримує параметр str (рядок) і додає його в кінець 
// значення властивості value об'єкта, який викликає цей метод.
// padStart(str) - отримує параметр str (рядок) і додає його на початок
//  значення властивості value об'єкта, який викликає цей метод.
// padBoth(str) - отримує параметр str (рядок) і додає його на початок 
// і в кінець значення властивості value об'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій 
// послідовності, в якій твій код перевірятимуть тести. Будь ласка,
//  нічого там не змінюй.



// class StringBuilder {
//   constructor(initialValue){
//       this.value = initialValue;
//   }
//   getValue(){
//     return this.value;
//   }
//   padEnd(str){
//     this.value +=str;
//     // console.log(this.value);
//   }
//   padStart(str){
//     this.value = str + this.value;
//     // console.log(this.value);
//   }
//   padBoth(str){
//     this.value = str + this.value + str
//   }

// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="



//task 15


// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price ;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }



//task 16

// Виконай рефакторинг класу Car. Додай публічну статичну властивість MAX_PRICE 
// зі значенням 50000 - максимально допустима ціна автомобіля.

// Додай сетеру price перевірку значення параметра newPrice, що передається. 
// Якщо воно більше за MAX_PRICE, сеттер нічого не робить, а якщо менше або дорівнює,
//  то перезаписує ціну автомобіля.


// class Car {
//   // Change code below this line
//   #price;
  
//   static MAX_PRICE = 50000;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE){
//       return;
//     }
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000




//task 17

// Додай класу Car публічний статичний метод checkPrice (price),
//  що приймає ціну автомобіля. Метод повинен порівняти значення параметра price 
//  і приватної статичного властивості MAX_PRICE.

// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок 
// "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок 
// "Success! Price is within acceptable limits".
// Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів,
//  щоб показати, як буде використовуватися метод checkPrice(price).

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice (price){
//     if (price > this.#MAX_PRICE){
//       return 'Error! Price exceeds the maximum';
//     }
//     return "Success! Price is within acceptable limits";
//   }


//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"



//task 18

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line
//  class Admin extends User {
//    static AccessLevel = {
//      BASIC: 'basic',
//      SUPERUSER: "superuser",
//    }
//    constructor(email){
//     super(email);
     
//    }
   
//  }

//task 19

// Додай класу Admin метод constructor, який приймає один параметр -
//  об'єкт налаштувань з двома властивостями email і accessLevel.
//   Додай класу Admin публічну властивість accessLevel, значення якої 
//   буде передаватися під час виклику конструктора.

// Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію 
// екземпляра під оголошенням класу.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//     }
//   constructor({email,accessLevel}) {
//     super(email)
//       this.accessLevel = accessLevel;
//       }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"



//task 20

// Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного списку 
// поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список. 
// Метод повинен додавати значення параметра email в масив, що зберігається 
// у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку.
//  Метод повинен перевіряти наявність значення параметра email в масиві,
//   що зберігається у властивості blacklistedEmails, і повертати true або false.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email){
//     return this.blacklistedEmails.includes(email);
//   }
  

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true



// const s = [5, 7, 2];
// function editInPlace() {
//   // Only change code below this line

//   console.log(s.sort((a,b) => a-b));

//   // Only change code above this line
// }
// editInPlace();


// const sum = (...arg) => {
//   const args = [...arg];
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// }

// console.log(sum(1,2));

function removeFirstTwo([a, b, ...arr]) {
    
    
    const shorterList = arr; 
    
    
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);

console.log(sourceWithoutFirstTwo);