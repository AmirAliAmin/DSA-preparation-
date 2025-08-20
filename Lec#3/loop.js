//Loop
//for  Loop
//for(start; end; change){ }
for (let i = 0; i < 10; i++) {
    const a = i;
    console.log(a);
}

//reverse value like (20 19 18 17)
for (let i = 20; i > 9; i--) {
    console.log(i)
    
}
let i = 1;
for(; i<=10; i++){
  console.log(i);
}
console.log(i +" fail");
//here out is 11 in last console 
//Reason is that when after increment 10 it become 11 Now comapir the value 
//with i <= 10 but i is 11 and it fail but value is still 11

//Interview Question
//for (let i = 1; i<=9;) {
//    console.log(i)  
//}
//This is valid but it is in finite loop 
//Reason is that it always ture and condition is never fail so it's always in loop

//for(;;){} also valid but infinite loop
//i is just a counter variable to the where to start and where it's end
//so if we use only ; this is in valid loop but if ;; this is valid

//Question
//Sum of n natural number
var n =6;
if (isNaN(n)) {
    console.log("invalid Input")
} else {
    if (n > 0) {
        var sum = 0
        for (let i = 0; i <= n; i++) {
            sum += i;
        }
        console.log(sum)
    } else {
        console.log("Number should be +ve or more then 0")
        
    }
    
}

//how to cancel prompt (if we cancel peompt it give null value)
//so var pr = prompt("hi");  if (pr === null){ console.log("cancelled")}