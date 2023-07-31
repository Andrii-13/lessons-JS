// const title = document.querySelector(".js-title");
// console.dir(title.textContent);

// title.textContent = "Hello JS";
// console.dir(title.textContent);

// console.dir(title);
// ClassList

// title.classList.add('title-color');     // додати класс
// title.classList.remove('title-color');  // видалити класс
// title.classList.toggle('title-color');  // переключити класс
// title.classList.toggle('title-color');
// title.classList.toggle('title-color');

// title.style.color  = 'green'; // додавання стилів інлайн.
// title.style.fontSize = '50px' // при кожній зміні браузер перечитує весь код

// console.dir(title.dataset);
// console.log(title.hidden);

// title.hidden = false;
// title.hidden = true;

// console.log(title.getAttribute('id'));
// console.log(title.getAttribute('data-id')); // отримання дата атрибутів

// const list = document.querySelector('.js-list');

// const li = document.createElement('li'); // створення елементу за допомогою createElement
// li.textContent = 'Четвертий';

// console.dir(list);
// console.dir(list.children);

// list.append(li);        //додаємо єелемент в кінець списку за допомогою append

// const li = '<li>П`ятий</li>' // створюємо як HTML синтаксис - це варіант яким користуються

// console.dir(li);



// const animals = [
//   {
//     id: 1,
//     name: 'dog',
//     price: 5000,
//     img: "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?w=740&t=st=1690200561~exp=1690201161~hmac=329082a157d251c9c53f3516e3fef7bd3efd12016454506b36db6c9935a8d157"
//   },
//   {
//     id: 2,
//     name: 'cat',
//     price: 4000,
//     img:'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
//   },
//   {
//     id: 3,
//     name: 'hamster',
//     price: 500,
//     img: 'https://images.pexels.com/photos/4383761/pexels-photo-4383761.jpeg?auto=compress&cs=tinysrgb&w=600'
//   },
//   {
//     id: 4,
//     name: 'elephant',
//     price: 250,
//     img: 'https://www.wwf.org.uk/sites/default/files/styles/social_share_image/public/2018-10/Large_WW1113482.jpg?itok=Bluh496C'
//   }
// ];

// const container = document.querySelector('.js-container'); // знаходимо елемент за CSS- селектором
// const markup = animals.map(({id, name, price, img}) =>     // перебираємо масив обєктів, записуємо в змінну і формуємо потрібний нам вигляд
//     `<li data-id="${id}">
//     <h2>Назва - ${name}</h2>
//     <img class="img" src="${img}" alt="${name}">            
//     <p>Ціна - ${price}</p>
//     </li>`
//     )
//     .join('');
// console.dir(markup);
// container.insertAdjacentHTML('beforeend', markup)           // вставляємо в кінець списку за один раз


// const singleBtn = document.querySelector("#single"); //  беру кнопку

// const handleClick = () => {                           // колбек функція для слухача подій
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);     //  додавайння на кнопку слахач подій

// // ===============================================
// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);


// const mango = {
//   username: "Mango",
//   showUsername() {
//     console.log(this);
//     console.log(`My username is: ${this.username}`);
//   },
// };

// const btn = document.querySelector(".js-btn");

// // ✅ Працює
// mango.showUsername();

// // ❌ this буде посилатися на button, якщо використовувати showUsername як callback
// btn.addEventListener("click", mango.showUsername); // не працює

// // ✅ Не забувайте прив'язувати контекст методів об'єкта
// btn.addEventListener("click", mango.showUsername.bind(mango));


// const button = document.querySelector('.btn');
// const container = document.querySelector('.container')
// // console.log(button);

// button.addEventListener("click", onClick)

//     let step = 0;
// function onClick(event){
//      step += 5;
//     container.style.marginLeft = `${step}px`;
//     container.style.marginBottom= `${step}px`;

//     console.log(event.currentTarget);

// }

const title = document.querySelector('.js-title');

title.addEventListener('click', onClick);

function onClick(evt){
    console.log(evt.currentTarget);
    const str = title.textContent.slice(0,13);
const str2 = title.textContent.slice(13);
console.log(str2);

}