// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const tag = user.location;
// console.log(location); // Объект location

// const country = user.location.country;
// console.log(country); // 'Jamaica'

// console.log(user);

// const nTag = "hobbies"

// console.log(user.location);
// console.log(user[nTag]);

// console.log(user.location);

// user.location.city = 'New York';

// console.log(user.location);

// user.location.street = "Harkivsky haiway"
// console.log(user.location);

// const name = "Генрі Сибола";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25

// const inputName = "color";
// const inputValue = 'tomato';

// const art = {
//     [inputName]: inputValue,
// }

// console.log(art);








// const bookShelf = {
//   books: ["Tom Soyer", "Little Prince"],
//   addBook(bookName) {
//     console.log("Визвали метод добавки книги: ");
//     this.books.push(bookName);
//     console.log(`You add book "${bookName}"`);
//   },
//   getBooks() {
//     console.log(this.books);
//   },
//   dellBook(bookName) {
//     console.log("Визвали метод видалення книги: ");

//     for (let i = 0; i < this.books.length; i += 1) 
//     {
//       if (bookName === this.books[i]) 
//       {
//         this.books.splice(i, 1);
//         console.log(`Book ${bookName} is dell`);
//         return this.books;
//       }
//     }
//   },
// };

// console.log("Books is in start: ", bookShelf.books);
// bookShelf.addBook(prompt("Введіть назву книги:"));
// bookShelf.getBooks();
// bookShelf.dellBook("Tom Soyer");
// bookShelf.getBooks();




// const numbers = {
//   first: "one",
//   second: "two",
//   thirt: "tree",
// }

// for (const key in numbers){
//   console.log(key);
// }

// for (const key in numbers){
//   console.log(numbers[key]);
// }



// Task 10
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
//  for (const key in apartment){
//    keys.push(key);
//    values.push(apartment[key]);
//  }
// console.log(keys);
// console.log(values);



// Task 11

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if ( apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);
//   continue;
// }
//   // Change code above this line
// }
// console.log(keys);
// console.log(values);


// Task 14

// function countProps(object) {
//   // Change code below this line
  
// let propCount = Object.keys(object).length;


//  console.log(Object.keys(object).length); ;
    
//     // if (object.hasOwnProperty(key)) {
//     //   propCount += 1;
      
//     // }console.log(object[key]);
  

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));



// Task 16

// salaries = {
//   Bond : 1500,
//   Soyer: 500,
//   Gibson: 2100,
// }

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
 
//  everySalary = Object.values(salaries);
//  for (const salary of everySalary){
//   totalSalary += salary;
//   // console.log(salary);
//  }


//   return totalSalary;
// }

// console.log( countTotalSalary(salaries));



// Task 17

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors){
//   hexColors.push(color.hex) 
//   rgbColors.push(color.rgb);
//   }




// console.log(hexColors);
// console.log(rgbColors);




//task 18


// Напиши функцію getProductPrice(productName), яка приймає один параметр 
// productName - назва продукту. Функція шукає об'єкт продукту з таким ім'ям 
// (властивість name) в масиві products і повертає його ціну (властивість
//    price). Якщо продукт з такою назвою не знайдений, функція повинна
//     повертати null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// console.log(products);

// function getProductPrice(productName) {
//  let price = null;
  
// for (const product of products){
//   if (product.name !== productName){
//     continue;
//   }
//   price = product.price;
//   // console.log(product.price);
// }

// return price;
// }

// console.log(getProductPrice('Rdar'));





//task 19

// Напиши функцію getAllPropValues(propName), 
// яка приймає один параметр propName - ім'я (ключ) властивості.
//  Функція повинна повернути масив всіх значень властивості з таким 
//  ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні
//   властивості з таким ім'ям, функція повинна повернути порожній масив.

// Виклик getAllPropValues("name") 
// повертає ["Radar", "Scanner", "Droid", "Grip"]

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
// let propProducts = [];
  
// for (const product of products){
 
//   if (product[propName] === undefined){
//     return propProducts;
//   }

//   propProducts.push(product[propName]);
// }

// return propProducts;
// }
// console.log(getAllPropValues("price"));





//task 20

// Напиши функцію calculateTotalPrice(productName), 
// яка приймає один параметр productName - назва товару.
//  Функція повинна повернути загальну вартість (ціна * кількість)
//  товару з таким ім'ям з масиву products.


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
// for (const product of products){
  
//   if (product.name === productName){
//     // console.log(`Hola:  ${product.name}`);
//     totalPrice = product.price * product.quantity

//   }
// }

  
// return totalPrice;
// }

// console.log(calculateTotalPrice("Blaster"));




//task 41

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    
    for (const key of this.potions){
  
    if (key.name.includes(newPotion.name)) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }
}
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
      let potionIndex = -1;      
    for (const [index , potion] of Object.entries(this.potions)) {
      
      if (potion.name !== potionName){        
        continue;
      }      
      potionIndex = parseInt(index) ;        
    }
        if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
     for (const position of this.potions) {
      
      if (position.name === oldName){
position.name = newName;
      }
     
    }
  },
  // Change code above this line
};

