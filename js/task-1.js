function slugify(title) {
    const lowerCaseTitle = title.toLowerCase();
    return lowerCaseTitle.split(' ').join('-');
    
  }


console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"


// Додати метод getinfo в об'єкт user, який повертатиме інформацію
// про користувача у форматі:
// `Name: Peter. Surname: Parker. Age: 22. Position: spider-man.`

// const user = {
//     name: 'Peter',
//     surname: 'Parker',
//     age: 22,
//     position: 'spider-man'
// }

// user.getinfo = function () {
//   return `Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age}. Position: ${this.position}`
// }

// console.log(user.getinfo());

// Створіть об'єкт calculator із трьома методами:
//read(a, b) - приймає два аргументи та зберігає їх як властивості об'єкта
//sum() - повертає суму збережених значень
//mult() - перемножує збережені значення та повертає результат


// const calculator = {
//   read(a, b) {
//     this.value1 = a;
//     this.value2 = b;
//    },
//   sum() {
//    return this.value1 + this.value2;
//       },
//   mult() {
//     return this.value1 * this.value2;
//   },
// };

// calculator.read(5, 5);

// console.log(calculator);
// console.log(calculator.sum());
// console.log(calculator.mult());


// Напишіть функцію getObjectKeys(), яка приймає об'єкт 
// і повертає масив ключів цього об'єкта.

// const myObj = {
//   name: "John",
//   age: 30,
//   gender: "male"
// };

// function getObjectKeys() { 
//   return Object.values(myObj);
// };

// console.log(getObjectKeys());