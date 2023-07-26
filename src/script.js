let cardNumber = '';

function change(inputElement) {
  cardNumber = cardNumber + inputElement.value;
  console.log(cardNumber);
  return cardNumber;
}

function whenClick() {

  let h2Element = document.querySelector("h2");
  let cardString = cardNumber.split('');
  console.log("all numbers: " + cardString);
  
  let everyOther = cardString.filter((element, index) => {
    return index % 2 === 0;
  });

  let everyOdd = cardString.filter((element, index) => {
    return index % 2 === 1;
  }).map(x => parseInt(x));

  console.log("odd numbers: " + everyOdd);

  var multiplyTwo = everyOther.map(x => parseInt(x) * 2);

  var checkIfGreaterThanTen = multiplyTwo.filter(value => value >= 10);
  var checkIfLessThanTen = multiplyTwo.filter(value => value < 10);

  let newArray = checkIfGreaterThanTen.map(num => {
    let digits = num.toString().split('');
    return parseInt(digits[0]) + parseInt(digits[1]);
  });

  console.log("remainder of less than 10: " + checkIfLessThanTen);
  console.log("numbers after splitting and adding: " + newArray);
  console.log("numbers greater than or equal to 10 before splitting: " + checkIfGreaterThanTen);

  let resultCardValue = everyOdd.concat(newArray, checkIfLessThanTen);
  console.log("combined array: " + resultCardValue);

  let sum = resultCardValue.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log("sum of all numbers: " + sum);

  if (sum % 10 === 0) {
    h2Element.textContent = "Valid";
    cardNumber = "";
    let selectInputs = document.querySelectorAll('input');
    selectInputs.forEach(input => input.value = '');
 } else {
   h2Element.textContent = "Invalid";
   cardNumber = "";
 let selectInputs = document.querySelectorAll('input');
  selectInputs.forEach(input => input.value = '');
 }
}

// function startFunction () {
//  
// }

// document.addEventListener('DOMContentLoaded', function() {
//   startFunction();
// });