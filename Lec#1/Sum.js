let a = 10;
let b =20;
console.log(a+b);
//diff b/w number and string
//in concole if ans in blue it's number but if in black it's string
console.log("10" +"20");
console.log("sum of 10 and 3 "+ 10+3);
//Output is 103 bcz we concatnate it with string so that's why the next oprend is also string
console.log("sum of 10 and 3 "+(10+3));
//to aviod this we use brackets

//Type corercion
console.log("1"-1);
//ans zero bcz in js it's type corecoin bcz js compiler calculate acoording to you opertor 
// + is use for concatenation (if one string one number) also for plus (if both are number) but other opertor preform accotrding to their work and compiler convert the string into number

//Prompt
//is a function get value from user
//and it pick the data as string but if you want only number the 
//Number(prompt("enter a number"))
// let age = prompt("Enter your Age");
// console.log(age);

//Type Casting
//convert one type to another is called type casting eg. from number to string
//string to number 

//swap method(three method)
let s1 = 10;
let s2 = 20;
let s3 = s1;
s1= s2;
s2 = s3;
console.log(s1 + ' and ' + s2)

//without extra variable
a = a+b;//30
b = a-b; //10
a = a-b;//20
console.log(a + ' and ' + b)

//with destructring
let s4 = 10;
let s5 = 20;
[s4, s5] = [s5, s4];
console.log(s4 , s5)

//NOTE: where we divide use 2/3 always use Math.floor

let num =  54377
console.log(num%10);
//it return the last number of our variable like (7) here
//if we num%100 is return (77) here 
console.log(num/10);
//now ans is 5437.7 if Math.floor then ans is 5437 
//as if we divide any number with 10 then last number as decimal other as it is

//!==(strict Not equal) !=(not strict Not equal)
// = (assignment opertor) 

// == (comparison) in whic problem is that it become equal number and string 
//if both are qual(in string it's number but in double/single quote) it ture but this not good bcz they are not equal
console.log(3 == "3")

//===(strict comparison opertor)
console.log(3 === "3")
//false (bcz they are not equal one number other string)

//in && if multiple value are comapired but if first is false then the js interprator not check the other condition(statement) like 
// (2>7 && 6<8 && 9=9) check first it's false it return false

// if (or operator) || if first true then not need to check the next

//Unary operator
//++(post increment , pre incement) -- (post decement, pre decrement)
let in1 = 10;
let in2 = in1++
console.log(in1, in2)  //11 10 
//in post use the value as it is then on that value increase the number

let  num1 = 11;
num1 = num1++ + ++num1
console.log(num1) //ans is 24
//in which num1++ here the value is 11 but after that it becom ++ so in variable it become 12 the plus that 12 with ++num1 here ++ so it's 13  and 11+13=24
let num2=2 , num3=3;
let num4= num2 + num3 + num2++ + num3++ + ++num2 + ++num3;
console.log(num4)

let num5 = true;
console.log(++num5);//ans2 (ture is one so ++num5 is 2)
//NOTE: not apply on costant value this operator(15++)
//let a = 10
//let b = ++(a++) it return an error
//in which at bracket first solve and it become 10 so now ++10 and we Know we can't use unary operor with const value

//Math function
console.log(Math.round(11.4)) // give the value if less then 5 the 11 if greater then 5 return 12
console.log(Math.ceil(11.1))//it always give it's above value if even one after decimal
console.log(Math.floor(11.9))//it always give below value
console.log(Math.trunc(18.98))//this is remove the value/number of after decimal
console.log(Math.pow(2,5))// 2 power 5
console.log(Math.abs(-15))// any value covert it into positive if in positive then it become positive if negative the convert it into positive
console.log(Math.max(12,13,14));
console.log(Math.min(12,13,14));
console.log(Math.random()) //return any random value b/w zero and one 
//if any value after decimal and multiple it with 10 then ans is first value after decimal then point like if (0.87656)*10 = 8.7656

//OTP of four number
console.log((Math.trunc(Math.random()*9000)+1000))
let c = 12.5887
console.log(c.toFixed(2)) //and its a string not a number

//Calculate the area and perimeter of retangle
let lengh = 3;
let breath = 5;
console.log(lengh*breath);
let rectangle = 2*(lengh+breath);
console.log(rectangle);
