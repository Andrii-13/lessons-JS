// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
//   };
//   function makeList(arr) {
//     // Only change code below this line
//     const failureItems = [];
//     arr.map(failure => failureItems.push(`<li class="text-warning">${failure}</li>`))
//     // Only change code above this line

//     return failureItems;
//   }

//   const failuresList = makeList(result.failure);

//   console.log(failuresList);

// Використовуйте classключове слово, щоб створити Thermostat клас.
// Приймає constructor температуру за Фаренгейтом.
// У класі створіть a, getterщоб отримати температуру в градусах Цельсія, і a,
// setterщоб встановити температуру в градусах Цельсія.
// Пам’ятайте, що C = 5/9 * (F - 32)і F = C * 9.0 / 5 + 32, де F– значення температури
// у градусах Фаренгейта, а C– значення тієї самої температури в градусах Цельсія.
// Примітка. Коли ви реалізуєте це, ви відстежуватимете температуру всередині класу
//  за однією шкалою Фаренгейта або Цельсія.
// Це сила геттера і сетера. Ви створюєте API для іншого користувача,
// який може отримати правильний результат незалежно від того, за яким ви відстежуєте.
// Іншими словами, ви абстрагуєтесь від користувача до деталей реалізації.

// class Thermostat{
//     #temperature;
//     constructor(temperatureFar) {
//         this.#temperature = temperatureFar;
//     }
//     get temperature (){
//         return 5/9 * (this.#temperature - 32);
//     }
//     set temperature (newTemp){
//         this.#temperature = newTemp * 9.0 / 5 + 32;
//     }
// }

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// console.log(temp);
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius
// console.log(temp);
// thermos.temperature = 76;
// temp = thermos.temperature;
// console.log(temp);
// const thermo = new Thermostat(76);
// temp = thermo.temperature;
// console.log(temp);

// class Car {
//     #brand;
//     #price;
//     constructor({brand, model, price}) {
//       this.#brand = brand;
//       this.model = model;
//       this.#price = price;
// }
// Change code below this line
//   get price(){
//     return this.price;
//   }
//     set price(newPrice){
//         const password = '222'
//         if (prompt() === password){
//            this.#price = newPrice;
//            return;
//         }
//       console.log('не підходить');
//     }

//   }

//   const bmw = new Car ({brand:'bmw', model: 'q5', price:10000});
//   console.log(bmw);
//   bmw.price = 20000;
//   console.log(bmw);
//   bmw.brand = 'audi';
//   console.log(bmw.brand);
//   console.log(bmw);

//! class
//TODO:=================task-09=============================
// Завдання полягає у створенні програми, що дозволяє керувати замовленнями в ресторані.

// #### Для цього потрібно реалізувати клас `Order`, який містить такі приватні властивості:
// - `tableNumber` - номер столика, де зроблено замовлення
// - `items` - масив предметів замовлення, де кожен предмет містить ім'я (name) та ціну (price)
// - `isPaid` - позначає, чи оплачене замовлення (default = false)
// ##### Для класу Order потрібно реалізувати такі методи:
// - `calculateTotal`() - повертає загальну суму замовлення.
// - `markAsPaid`() - позначає замовлення як оплачене
// - `addItem`() - який додає предмет замовлення до масиву "items"
// - `removeItem`() - який видаляє предмет замовленя з масиву "items"
// ##### Додатково можна створити гетери та сетери для отримання номера столика, статусу замовлення та самого замовлення

// #### Також потрібно створити клас `MenuItem`, який містить властивості `name` та `price` для предметів замовлення.

// let num2;

//Task

// В бесконечном цикле делается запрос на ввод двух чисел
// (два отдельных вызова функции prompt()). Числа сравниваются между собой,
//  и выводится одна из трёх фраз: «числа равны», «первое число меньше»,
//  «второе число меньше». Если пользователь ввёл не число, выводится фраза
//  «первый ввод – не число» (или «второй ввод – не число»), и выполнение
//  скрипта прекращается.

// function comparison () {
//     while(true){
//     let num1 = prompt();
//     num1 = Number(num1);

// if(!num1){
//     alert(`${num1} не число`);
//     return;
// }
// let num2 = prompt();
// num2 = Number(num2)

// if(!num2){
//     alert(`${num2} не число`);
//     return;
// }
// let sum = num1-num2;

// if (sum === 0){
//     alert(`${num1} = ${num2}`);
// }else if(sum < 0){
//     alert(`${num1} < ${num2}`);
// }else if(sum > 0){
//     alert(`${num1} > ${num2}`);
// }

// }
// }

// comparison();

// function entranceFloor({ floorsQuantiti, entrancesQuantiti, flatsInFloor, numberFlat }) {
//   const totalFloors = floorsQuantiti * entrancesQuantiti * flatsInFloor;
//   const entrances = [];
//   let entrance = 0;
//   for (let i = 0; i < entrancesQuantiti; i += 1) {
//     entrance += totalFloors / entrancesQuantiti;
//     entrances.push(entrance);
//     if (numberFlat <= entrance) {
//       console.log("під'їзд №", i + 1);
//       break;
//     }
//     console.log(5);
//   }
//   return entrances;
// }

// const flat = { floorsQuantiti: 9, entrancesQuantiti: 3, flatsInFloor: 5, numberFlat: 46 };

// console.log(entranceFloor(flat));

// console.log(entranceFloor(flat));

// const arr = [1,2,3,4,5];

// for (let i=0; i < arr.length; i+=1 ){
//     console.log(i);
// }
