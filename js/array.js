// exercise 9

// function getExtremeElements(array) {
// let result = [] ;

// result[0] = array[0];
// result[1] = array[array.length-1];

//     return result;
//   }

//   console.log(getExtremeElements([5,6,8,9,2,4,6]));



// exercise 10

// function splitMessage(message, delimiter) {
//     let words;

//     words = message.split(delimiter);

//     return words;
//     // return words;
//   }

// //   console.log(splitMessage('gertruda', ''));
// console.log(splitMessage('gertruda', ''));





// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// console.log(message.split(" ")); // ["JavaScript", "essentials"]



// exercise 11

// function calculateEngravingPrice(message, pricePerWord) {
//     let generalPrice;
//     let quantityWord;

//     quantityWord = message.split(' ').length;

//     generalPrice = pricePerWord * quantityWord;

//     return generalPrice;
//  }

//  console.log(calculateEngravingPrice(('Сервису гравировки украшений нужна функция'), 12));



// exercise 12

// function makeStringFromArray(array, delimiter) {
//     let string;
    
// string = array.join(delimiter);


//     return string;
//   }

//   console.log(makeStringFromArray(["JavaScript", "is", "amazing"], '---'));




// exercise 12
// function slugify(title) {
    
//     const slug = title.toLowerCase().split(' ').join('-');
    
// return slug;
//   }
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));



// exercise 13

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];


// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1, fruits.length-1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);


// exercise 15

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(allClients);




// exercise 16

// function makeArray(firstArray, secondArray, maxLength) {
   
//     let fullArray = firstArray.concat(secondArray);
    
//     if (firstArray.concat(secondArray).length > maxLength){
//         fullArray = fullArray.slice(0,maxLength);

//         // console.log(fullArray);
//     }

//     return fullArray;
//   }

//   console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"],6));



// exercise 18

// function calculateTotal(number) {
//    let sum = 0;
    
//    for (let i = 1; i <= number; i += 1){
//     sum += i;
//     console.log(sum);
//    }


//     return sum;
//    }

// console.log( 'general: ', calculateTotal(4));



// exercise 20

// function calculateTotalPrice(order) {
//     let total = 0;
  
//   for (let i = 0; i < order.length; i+=1){
//     total += order[i];
//   }  


//     return total;
//   }

// console.log(calculateTotalPrice([164, 48, 291]));




// exercise 21

// function findLongestWord(string) {
    
//     const splitString = string.split(" ");
//     let longestWord = splitString[0];

//     for (let i = 1; i < splitString.length; i += 1)
//     {

//         if (longestWord.length < splitString[i].length)
//         {
//         longestWord = splitString[i];
        
//         }
//     }


//    return longestWord ;
//   }

//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));


// exercise 22

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
    
//     for (let i = 0; i <= (max - min); i+=1){
//         numbers.push(min+i);
//     }
//         return numbers;
//   }

// console.log(createArrayOfNumbers(29, 34));

// exercise 23

// function filterArray(numbers, value) {
//   let withoutValueNambers = [];
//   for (let i = 0; i < numbers.length; i+=1){
//     if (numbers[i] <= value){
//     continue;
//   }
//   withoutValueNambers.push(numbers[i]);
//   }

//   return withoutValueNambers;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 20));



// exercise 24

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// console.log(checkFruit('gggg'));



// exercise 25
// function getCommonElements(array1, array2) {
//     let otherArray = [];

//     for (let i = 0; i < array1.length; i += 1){
//         if (!array2.includes(array1[i])){
//         continue;
//     }
//         otherArray.push(array1[i]);
//     }


//     return otherArray;
//   }
//   console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));




// exercise 25


// function getCommonElements(array1, array2) {
//   let uniqElements = [];
  
//   for (const element of array1){
//     if (array2.includes(element)){
//             uniqElements.push(element)
//     }
//   }



// return uniqElements
//   }

//   console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));






// function myArray (arr,...args){
    
//     console.log(arr);
//     console.log(args);

// let newArray = [];
//     for (const arg of args){

//         console.log(arg);

//         if (arr.includes(arg)){
//             newArray.push(arg);
//         }
//     }
// return newArray;
// }
//  console.log(myArray([1,2,3,4,5],10,15,2,5,8));



// exercise 29
// function getEvenNumbers(start, end) {
//   let intervalNumbers = [];
//  for (let i = start; i <= end; i+=1){
//   console.log(start+(i-start ));
//     if (i%2 !== 0){

//        continue;
//     }
//     intervalNumbers.push(start+(i-start));
//     }
//     return intervalNumbers;
//  }

//    console.log(getEvenNumbers(3, 11)); //[4, 6, 8, 10]


// exercise 31

// function includes(array, value) {
//   for (let arr of array){

//     if (arr !== value){
//           continue;
//     }return Boolean(arr)

//    }return false;
  
// }
// console.log(includes([1, 2, 3, 4, 5], 6));

