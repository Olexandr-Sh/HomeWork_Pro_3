console.log('Hello!');

// true + true + false // = 2 
// 40 / '8' // = 5
// 25 + 25 + ' років - це його вік' // = "50 років - це його вік"
// 'радіус' + 20 // "радіус20"
// 'vegetables' + + 'fruits' + 12 // = "vegetablesNaN12"
// ' ' == 'true' // = false
// null == undefined // = true
// false === 1 // false
// 'Alex' > 'Alexander' // false
// 'Hi' > 'Hello' // true
// let a = "5";
// let b = 2;
// alert(b < a); // true
// '2225' > '221254' // true
// !!null == (5 && 0) > (27 || null) // = false == false > 27 /false == false / результат - true
// !(1 || 1) == !!(false && true) // = false == false / true
// // (null || 5) != (1 && 0) // = 5 != false / true
// // ( 1 || 2 ) == ( 3 && 0 ) // = true == false / false
// // [] + undefined + 25 // = "undefined25", враховуючи прочитане, розумію, що закоментовані приклади правильні, але консолі вони не подобаються

//first task of third lesson

// function name (a, b, c){
//     if ( a <=b ){
//         if (b <= c){
//             console.log (a, b, c);       
//         }
//         else if (a<=c){
//             console.log (a, c, b);
//         }
//         else {
//             console.log (c, a, b);
//         }
//     }
//     else if (c <= b){
//         console.log (c, b, a);       
//     }
//     else if (a <= c){
//         console.log (b, a, c);       
//     }
//     else {
//         console.log (b, c, a);       
//     }
// }
// name(68, 20, 67);

//second task of four lesson

const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num) {
  return Math.round(num * 100) / 100;
}

// an example of the above
// 3.1458769
// when we multiply for 100 = 314.58769
// when we divide we are converting to 3.14

function celciusToFahrenheitAndKelvin() {
  const cTemp = parseFloat(celciusInput.value);
  const fTemp = (cTemp * (9 / 5)) + 32;
  const kTemp = cTemp + 273.15;
  fahrenheitInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp);
}

function fahrenheitToCelciusAndKelvin() {
  const fTemp = parseFloat(fahrenheitInput.value);
  const cTemp = (fTemp - 32) * (5 / 9);
  const kTemp = (fTemp + 459.67) * 5 / 9;
  celciusInput.value = roundNum(cTemp);
  kelvinInput.value = roundNum(kTemp);
}

function kelvinToCelciusAndFahrenheit() {
  const kTemp = parseFloat(kelvinInput.value);
  const cTemp = kTemp - 273.15;
  const fTemp = 9/5 * (kTemp - 273) + 32;
  celciusInput.value = roundNum(cTemp);
  fahrenheitInput.value = roundNum(fTemp);
}

function main() {
  celciusInput.addEventListener('input', celciusToFahrenheitAndKelvin);
  fahrenheitInput.addEventListener('input', fahrenheitToCelciusAndKelvin);
  kelvinInput.addEventListener('input', kelvinToCelciusAndFahrenheit);
}

main();

//fourth homework
// switch method. Thet is second method. In previous homework I used function method for counting temperature.
let K;
let C;
let F;
let unit = 'C';
let temp = 1;

switch (unit) {
  case 'F':
    F = temp,
    C = (F - 32) * 5/9,
    K = C + 273.15
    console.log(F, C, K);
  break;
  
  case 'C':
    C = temp,
    F = (C * 9/5) + 32,
    K = C + 273.15
    console.log(F, C, K);
  break;
  
  case 'K':
    K = temp,
    C = K - 273.15,
    F = (C * 9/5) + 32,
    console.log(F, C, K);
  break;
}

// Recursion 
// function sum(n) {
//   if (n === 1) {
//     return 1;
//   } else {
//     return n + sum(n - 1);
//   }
// }
// let result = sum;
// console.log(result);

// function sum(n) {
//   if (n === 1) {
//     return 1;
//   } 
//   return n + sum(n - 1);
// }
// let result = sum;
// console.log(result);

// function sum(num){
//   if (num === 0) {
//     return 0;
//   } else {
//     return num + sum(--num)
//   }
// }

// sum(4);

// Homework 5
let num = 1;
  let result = [];
  while (num <= 1000) {
    result.push(num++);
  }
console.log(result);

let evenNum = result.filter(x => x % 2 === 0 && x % 10 === 0);
console.log(evenNum);

let oddNum = result.filter(x => x % 2 === 1 && x % 3 === 0 && x % 5 === 0);
oddNum.sort(function(a, b) {
  return b - a;
});
console.log(oddNum);

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let studentCourses = student1Courses.concat(student2Courses);
console.log(studentCourses.join(', '));

// var x = 1;

// while (x <= 20) {
//     // check divisibility
//     if (x % 3 === 0 && x % 5 === 0) {
//         console.log('JuliaJames');
//     } else if (x % 3 === 0) {
//         console.log('Julia');
//     } else if (x % 5 === 0) {
//         console.log('James');
//     } else {
//         console.log(x);
//     }
//     // print Julia, James, or JuliaJames
//     // increment x
//     x += 1;
// }