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

function name (a, b, c){
    if ( a <=b ){
        if (b <= c){
            console.log (a, b, c);       
        }
        else if (a<=c){
            console.log (a, c, b);
        }
        else {
            console.log (c, a, b);
        }
    }
    else if (c <= b){
        console.log (c, b, a);       
    }
    else if (a <= c){
        console.log (b, a, c);       
    }
    else {
        console.log (b, c, a);       
    }
}
name(68, 20, 67);

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