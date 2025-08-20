if ("condition") {
  console.log("object");
}
//any thing that return ture or false is a Condition

//Valid Vote
// var ans = prompt("Enter your age:");
// console.log(Number(ans));
// //any thing from promp is a string
// if (isNaN(ans)) {
//     console.log("wrong input")
// }
// else if (ans>=18) {
//     console.log("You can vote")

// } else {
//     console.log("You can't vote")

// }

//NaN === NaN (false)(bcxz maybe but are not same number there are many not a number)
//isNaN(NaN) (yes this is not a number so ture)

//Stop amountcount

// let amount = Number(prompt("Enter your Amount:"))
// if (amount > 0 && amount <= 5000){
//     console.log(amount)

// }
// else if(amount > 5000 && amount <= 7000 ) {
//     console.log(amount - (Math.floor((5*amount)/100)))

// }
// else if(amount > 7000 && amount <= 9000 ) {
//     console.log(amount - (Math.floor((10*amount)/100)))

// }
// else if(amount > 9000) {
//     console.log(amount - (Math.floor((20*amount)/100)))
// }
// else{
//     console.log("wrong input")
// }

// let amount = Number(prompt("Enter your Amount:"))
// let dis = 0;
// if (amount > 0 && amount <= 5000){
//     dis=0;
// }
// else if(amount > 5000 && amount <= 7000 ) {
//     dis=5;
// }
// else if(amount > 7000 && amount <= 9000 ) {
//     dis = 10;
// }
// else if(amount > 9000) {
//     dis = 20;
// }
// else{
//     console.log("wrong input");
// }
// console.log(amount - (Math.floor((dis*amount)/100)));

//electricity Bills
// let unit = Number(prompt("Enter your electricity units:"));
// let amount = 0;
// if (unit > 400) {
//     amount = (unit - 400) * 13;
//     unit = 400;
// }
// if (unit>= 200 && unit <= 400) {
//     amount += (unit - 200) *8;
//     unit = 200
// }
// if (unit > 100 && unit <= 200) {
//     amount += (unit - 100) *6;
//     unit = 100
// }
// amount += unit *4;
// console.log(amount)

//Tenary Operator (by using ? and :)
12 > 11 ? console.log("hi") : console.log("hello");
console.log(12 > 13 ? "hi" : "hello");
let num = 0;

//Nested Tenary Operator
console.log(num > 0 ? "psoitive" : num < 0 ? "negative" : "zero");

//Switch cases
//switch take const value and case value are matched(compair) with case value
let day = 7;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tusday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturady");
    break;
  case 7:
    console.log("Sunady");
    break;
  default:
    console.log("Invalid Input");
    break;
}

//in multiple condition u can excute same thing
let day1 = 2;
switch (day1) {
  case 1:
  case 2:
  case 3:
    console.log("Monday");
    break;

  default:
    console.log("invalid");
    break;
}

switch (true) {
  case 10 > 9:
    console.log("Hello");
    break;
  case 9 > 10:
    console.log("Hii");
    break;
  default:
    console.log("nothing")
    break;
}
