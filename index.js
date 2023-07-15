// console.log("I like pizza");
// console.log("It")
// window.alert("I Really Love PiZZa")

//this is comment

/* 
this is a 
multiline 
comment
*/
// let firstName = "Bro";
// let age;
// age = "21";
// age = age + 1;
// let student = false;
// console.log("hello", firstName);
// console.log(age);
// console.log(student);

// document.getElementById("p1").innerHTML = firstName;
// document.getElementById("p2").innerHTML = "you are " + age + "years old";
// document.getElementById("p3").innerHTML = "enrolled:" + student;

/* arithemetic expression is a  cobination of...
operands(values,variables,etc...)
operators(+ - * / % )
THAT can be    evaluated to a value
ex y = x+5;
*/

// let students =20;

// students = students +1;
// students = students -1;
// students = students *1;
// students = students/1;
// let extraStudents = students%3

/*Augmented
assignment 
operator*/

// students+=2
// students-=2
// students*=2
// students/=2
// console.log(students)
// console.log(extraStudents)

/*operator precedence
1. paranthesis
2. exponents
3. multiplication
4. addition & substraction
*/

// let result = 1 + 2 * (3 + 4);
// console.log(result);
// result = (1 + 2) * (3 + 4);
// console.log(result);

//how to accept user input

//promt method
// let userName  = window.prompt("enter the name")
// console.log(userName)
// console.log(typeof userName)

// document.getElementById("button").onclick = () => {
//   let value = document.getElementById("myText").value;
//   console.log(value);
//   document.getElementById("myLabel").innerHTML="hey "+value;
// };

/* type conversion = change the datatype of a value to 
another  (strings,numbers,booleans) */

// let age = window.prompt("how old are you ");
// console.log(typeof age);
// age = Number(age);
// console.log(typeof age);
// age += 1;
// console.log(age);

// let x;
// let y;
// let z;
// x = Number("3.14");
// y = String(3.14);
// z = Boolean("");
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

//const = a variable that can't be changed

// const PI = 3.14;6
// let radius;
// let circumference;

// radius = window.prompt("enter the radius of the circle");
// console.log(radius)
// radius =Number(radius)
// circumference = 2 * PI * radius;
// console.log("the circumference is :", circumference);

/* Math:
An intrinsic object that provides basic mathematics functionality and constants.*/

// let x = Math.PI;
// let y = 5;
// let z = 9;
// // x = Math.round(x)
// // x = Math.floor(x);
// // x = Math.ceil(x);
// // x = Math.pow(x,2)
// // x = Math.sqrt(x)
// // x = Math.abs(x);
// // x = Math.max(x, y, z);
// x = Math.min(x, y, z);
// console.log(x);

/*Right angled triangle
problem*/

// let a;
// let b;
// let c;

// a = Number(window.prompt("endter side A"));
// console.log(typeof a);
// console.log(a);
// b = window.prompt("enter side B");
// b = Number(b);
// console.log(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log(c)

// document.getElementById("submitButton").onclick = () => {
//   let a = document.getElementById("aTextBox").value;
//   a = Number(a);
//   let b = document.getElementById("bTextBox").value;
//   b = Number(b);
//   let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//   document.getElementById("cLabel").innerHTML = "result =" + c;
// };

/*counter html*/

// let count = 0;

// document.getElementById("increseBtn").onclick = () => {
//   ++count;
//   document.getElementById("countLabel").innerHTML = count;
//   console.log(count);
// };
// document.getElementById("resetBtn").onclick = () => {
//   count = 0;
//   document.getElementById("countLabel").innerHTML = count;
// };

// document.getElementById("decreaseBtn").onclick = () => {
//   count -= 1;
//   document.getElementById("countLabel").innerHTML = count;
// };

/*Math.random game*/

// document.getElementById("rollBtn").onclick = () => {
//   let x = Math.floor(Math.random() * 6) + 1;
//   let y = Math.floor(Math.random() * 6) + 1;
//   let z = Math.floor(Math.random() * 6) + 1;
//   document.getElementById("xLabel").innerHTML = x;
//   document.getElementById("yLabel").innerHTML = y;
//   document.getElementById("zLabel").innerHTML = z;
// };

/*usefull string
properties and methods*/

// let userName = "nithin raj";
// let phoneNumber = "123-45-67-8"
// // console.log(userName.length);
// // console.log(userName.charAt(1));
// // console.log(userName.indexOf("i"));
// // console.log(userName.lastIndexOf("i"));
// // console.log(userName.trim())
// // console.log(userName.toLowerCase());
// // console.log(userName.toUpperCase())
// console.log(phoneNumber.replace("-","/"))
// console.log(phoneNumber.replaceAll("-","/"))
// console.log(phoneNumber.replaceAll("-",""))

/*slice() extracts a section of a string and 
returns  it as a new string ,
without modifying the original string*/

// let fullName = "Nithin Sheeja";
// let firstName;
// let lastName;
// // firstName = fullName.slice(0,7)
// // lastName = fullName.slice(7,)
// lastName= fullName.slice(fullName.indexOf(" ")+1)
// firstName =fullName.slice(0,fullName.indexOf(" "))
// console.log(lastName)
// console.log(firstName)

/* Method chaining = calling one method after another in
one continous line */

// let userName = "nithin";
// // let letter = userName.charAt(0);
// // letter = letter.toUpperCase();
// letter = userName.charAt(0).toUpperCase()
// console.log(letter);

/* if statement = a basic form of decision making 
if a condition is true , then do something if not, then 
don't do it! */

// let age = 65;

// if (age >= 18) {
//   console.log("you are an adult!");
// } else if (age < 0) {
//   console.log("you haven't born ");
// } else if (age > 65) {
//   console.log("you are a senior citizen");
// } else {
//   console.log("You need to grow up!");
// }

// let online = true;
// if (online) {
//   console.log("you are online");
// } else {
//   console.log("you are offline");
// }

/* check property */

// document.getElementById("submitBtn").onclick = function () {
//   const CHECK_BOX = document.getElementById("myCheckBox");
//   const VISA_BTN = document.getElementById("visaBtn");
//   const MASTER_BTN = document.getElementById("masterCardBtn");
//   const PAYPAL_BTN = document.getElementById("paypalBtn");
//   if (CHECK_BOX.checked) {
//     console.log(document.getElementById("myCheckBox").value);
//     console.log(document.getElementById("myCheckBox").checked);
//   } else {
//     console.log(document.getElementById("myCheckBox").value);
//     console.log(document.getElementById("myCheckBox").checked);
//   }

//   if (VISA_BTN.checked) {
//     console.log("you are paying with vis");
//   } else if (MASTER_BTN.checked) {
//     console.log("YOU are paying with master card");
//   } else if (PAYPAL_BTN.checked) {
//     console.log("you are paying with paypal");
//   } else {
//     console.log("Choose a payment option");
//   }
// };

/* Switch = statement that examines a value 
for a match against many case  clauses.
more efficient that many "else if " statements*/

// let grade = "A";
// switch (grade) {
//   case "A":
//     console.log("you did great");
//     break;
//   case "B":
//     console.log("you did good");
//     break;
//   case "C":
//     console.log("you did ok");
//     break;

//   default:
//     console.log("grade is not a letter grade");
//     break;
// }
// let grade = 95;

// switch (true) {
//   //if the condition inside true evaluates to false, it will execute this block of code
//   case grade >= 90:
//     console.log("you did great");
//     break;
//   case grade >= 80:
//     console.log("you did good");
//     break;
//   case grade >= 70:
//     console.log("you did ok");
//     break;

//   default:
//     console.log("grade is not a letter grade");
//     break;
// }

/*conditional operators: gives us the ability to check more than 1
condition concurrently
&& AND (Both conditions must be true)
|| OR (Either  condition can be true)*/

// let temp =50;
// if(temp>0 && temp<30){
//   console.log("The weather is good!")
// }else{
//   console.log("the weather is bad")
// }

// if(temp>0 || temp<30){
//   console.log("The weather is good!")
// }else{
//   console.log("the weather is bad")
// }

/*
!Not logical operator 
It reverses the value of boolean expression and returns opposite result*/

// let temp = -15;
// let sunny = false;
// if(!(temp>=0)){
//   console.log("its cold outside")
// }else{
//   console.assert("its warm outside")
// }

// if(!sunny){
//   console.log("its cloudy")
// }else{
//   console.log("its sunny outside")
// }

/* while loop = repeat some code while some condition
id true potentially infinite*/

// let userName = "";
// while ((userName === ""|| userName ===null)) {
//   userName = window.prompt("enter Your name");
// }
// console.log(userName);

// while(1==1){
//   console.log("Stuck in the loop")
// }

/* do while loop = do something, then check the condition 
repeat if the condition is true*/

// let userName;
// do {
//   userName = window.prompt("enter your name");
// } while (userName === "");

// console.log(userName);

/* for loop = repeat some code a certain amount of times*/
// for (let i = 10; i > 0; i -= 2) {
//   console.log(i);
// }

/* break = breaks out of a loop entirely 
constinue= skip an interation of a loop*/

// for (let i = 1; i <= 20; i++) {
//   console.log(i);
//   if (i == 13) {
//     // break;
//     continue;
//   }
// }

/*nested loops = a loop inside a another loop*/

// let symbol = window.prompt("Enter a symbol to use");
// let row = window.prompt("Enter the no of rows");
// let column = window.prompt("Enter the number of column");
// // let row = 5;
// // let column = 5;5
// for (let r = 1; r <= parseInt(row); r += 1) {
//   // letStr = "";
//   for (let c = 1; c <= parseInt(column); c += 1) {
//     // letStr += "*";
//     document.getElementById("rectangle").innerHTML += symbol;
//   }
//   document.getElementById("rectangle").innerHTML += "<br>";
// }

/* function = define code once, and use it many times. to perform some  
code  . ro perform some code, call the function name.*/

// happyBirthday()
// let userName = "nithin"
// let age = 21;
// function happyBirthday (userName,age){
//   console.log("happy birthday to you")
//   console.log("happy birthday to you",userName)
//   console.log("you are ", age)
// }
// startProgram()
// function startProgram(){
//   let userName = "nithin"
//   let age = 21;
//   happyBirthday(userName,age)
// }

// function happyBirthday (userName,age){
//   console.log("happy birthday to you")
//   console.log("happy birthday to you",userName)
//   console.log("you are ", age)
// }
// console.log("hey")

/* return = returns a value back to the place where you invoked a functin*/

// let area;
// let width;
// let height;

// width = window.prompt("Enter the width");
// height = window.prompt("Enter height");
// area = getArea(width, height);
// console.log(area);
// function getArea(width, height) {
//   let result = width * height;
//   return result;
// }

/* ternary operator = shortcut for an "if/else statement"
1. a condition with ?
2. expression if True;
3. :expression if False;
CONDITION? ifTrue: ifFalse*/

// let adult = checkAge(12);
// console.log(adult);
// function checkAge(age) {
//   return age > 18 ? true : false;
// }

// checkWinner(false)
// function checkWinner(win){
//   win?console.log("you are winner"):console.log("you are loser")
// }

/* variable scope = where a variable is accessible 

let = variable are limited  to block scope{}
var = variable are limited to a functin() 

global variable = is declared outside any function
if global, var will change browsers window properties
*/

// doSomething()
// function doSomething(){
//   for ( var i = 1; i <= 3; i += 1) {
//     console.log(i);
//   }
// }
// for ( var i = 1; i <= 3; i += 1) {
//   console.log(i);
// }
// console.log(i);

// console.log(window.name)
// var name = "h";
// console.log(window.name)

/* template literals = delimited with(`)
instead of double or single quotes 
allows embedded variables and expression*/

// let userName = "Bro";
// let items = 3;
// let total = 75;
// // console.log(`${userName} buyed ${items} for ${total} $`)
// let text =`${userName} <br> buyed ${items}<br> for ${total} $`
// console.log(text)
// document.getElementById("buy").innerHTML = text;

/* toLocalString() = returns a string with a language
sensitive representation of this number 

number.toLocalString(locale,{options});
"locale"= specify that laguage (undefined = default set in browser)
"option" = object with formattig options 
*/

// let myNum = 123456.789;
// let myNum = 100;
// myNum = myNum.toLocaleString("en-US"); // US english
// myNum = myNum.toLocaleString("hi-IN"); // hindi
// myNum = myNum.toLocaleString("de-DE")//standard german

// myNum = myNum.toLocaleString("en-US", { style: "currency", currency: "USD" });
// myNum = myNum.toLocaleString("hi-IN", { style: "currency", currency: "INR" });
// myNum = myNum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
// myNum= myNum.toLocaleString(undefined,{style:"percent"})
// myNum= myNum.toLocaleString(undefined,{style:"unit",unit:"celsius"})

// console.log(myNum);

// const answer = Math.floor(Math.random() * 10 + 1);
// console.log(answer);
// let guess = 0;

// document.getElementById("submitBtn").onclick = () => {
//   let guessInput = document.getElementById("guessField").value;
//   console.log(guessInput);
//   guess += 1;
//   if (answer == guessInput) {
//     alert(
//       "Congratulations! You guessed the correct number"+
//       guess
//     );
//   } else if (guessInput < answer) {
//     alert("too small");
//   } else {
//     alert("too big");
//   }
// };

/* temparature conversion */

// document.getElementById("submitButton").onclick = () => {
//   let temp;
//   if (document.getElementById("cButton").checked) {
//     temp = Number(document.getElementById("textBox").value);
//     temp = toCelsius(temp);
//     document.getElementById("tempLabel").innerHTML = temp + "°c";
//   } else if (document.getElementById("fButton").checked) {
//     temp = Number(document.getElementById("textBox").value);
//     temp = toFarenheit(temp);
//     document.getElementById("tempLabel").innerHTML = temp + "°f";
//   } else {
//     document.getElementById("tempLabel").innerHTML = "select a unit";
//   }
// };

// function toCelsius(temp) {
//   return (temp - 32) * (5 / 9);
// }

// function toFarenheit(temp) {
//   return (temp * 9) / 5 + 32;
// }

//  array

// let fruits = ["apple", "orange", "banana"];

// fruits[1] = "coconut";
// // fruits[5] = "surprise";
// console.log(fruits[1]);
// // console.log(fruits[5]);

// console.log(fruits);
// console.log(fruits.push("lemon"));
// console.log(fruits.pop());
// console.log(fruits.unshift("mango"))
// console.log(fruits.shift())
// console.log(fruits.indexOf("kive"))
// console.log(fruits.indexOf("apple"))
// fruits.pop();

// let prices = [1, 2, 3, 4, 5];

// // for (let i = 0; i < prices.length; i++) {
// //   console.log(prices[i]);
// // }

// for (let i of prices) {
//   console.log(i);
// }

// array sorting

// let fruits =['banana',"apple","orange","mango"]
// // fruits = fruits.sort()
// fruits = fruits.sort().reverse()
// for(let fruit of fruits){
//   console.log(fruit)
// }

/* 2D arrays = array of arrays */

// let fruits = ["apple", "oranges", "bananas"];
// let vegetables = ["carrots", "onions", "potatoes"];
// let meats = ["eggs", "chicken", "fish"];

// let groceryList = [fruits, vegetables, meats];
// groceryList[0][1]="nithin"
// console.log(groceryList[0][1])

// for (items of groceryList) {
//   console.log(items)
//   for (products of items) {
//     console.log(products);
//   }
// }

/*spread operator= allows an iterable such as an array or string to be expanded
in places where zero or more arguments are expected (unpack the elements)*/

// let numbes = [1, 2, 3, 4, 5, 6, 7];
// let max = Math.max(numbes);
// max = Math.max(...numbes);

// console.log(max);

// let class1 =["a","b","c"]
// let class2 =["a","b","c"]

// // class1.push(class2)
// class1.push(...class2)
// console.log(class1)

/* rest parameters = represents an indefinite number
of parameters( packs arguments into an array)*/

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let f = 5;

// console.log(sum(a, b));
// console.log(sum(a, b, c));
// // function sum(a, b) {
// //   return a + b;
// // }

// function sum(c,...numbers) {
//   let total = 0;
//   for (let number of numbers) {
//     total += number;
//   }
//   return c+total;
// }

/* callback = a function passed as an  argument to another function;

ensures that a function is not going to run before a task is completed. 
Helps us develop asynchronous code. that helps us avoid errorrs and potential problems */

// let total = sum(2, 3);
// displayConsole(total);
// displayDom(total)

// function sum(x, y) {
//   let result = x + y;
//   return result;
// }

// sum(2, 3, displayConsole);
// sum(2, 3, displayDom);

// function sum(x, y, CB) {
//   let total = x + y;
//   CB(total);
// }
// function displayConsole(output) {
//   console.log(output);
// }

// function displayDom(output) {
//   document.getElementById("myLabel").innerHTML = output;
// }

/*array.forEach = executes a provided callback function
once for each array element*/

// let students = ["spongebob", "patrick", "squid"];
// function capitaliz(element, index, array) {
//   array[index] = element[0].toUpperCase() + element.substring(1);
// }
// students.forEach(capitaliz);
// students.forEach(print);
// // students.forEach((element, index, array) => {
// //   capitaliz(element, index, array);
// // });
// function print(element){
// console.log(element)
// }

/*array.map = ececutes provided call back function once for each array
element and creates a new array*/

// let numbers = [1, 2, 4, 5, 6];
// let squares = numbers.map(square);
// squares.forEach(print);
// function square(element) {
//   return Math.pow(element, 2);
// }
// function print(element) {
//   console.log(element);
// }

/* array.filter()= creates a new array with all elements
that pass the test provided by a function */

// let ages = [18, 16, 21, 17, 19];
// let adults = ages.filter(checkAge);
// adults.forEach(print);
// function checkAge(element) {
//   return element >= 18;
// }
// function print(element) {
//   console.log(element);
// }

/* array.reduce() = reduces an array to a single value (accumalated value) */

// let prices = [5, 10, 23, 53, 23];
// let total = prices.reduce(checkOut);

// console.log(total);
// function checkOut(total, element) {
//   return total + element;
// }

// let grades = [100, 50, 90, 60, 80, 70];
// grades = grades.sort(descendingSort);
// grades.forEach(print);
// grades = grades.sort(aescendingSort);
// grades.forEach(print);
// function descendingSort(x, y) {
//   return y - x;
// }
// function aescendingSort(x, y) {
//   return x - y;
// }
// function print(element) {
//   console.log(element);
// }

/*function expression = function without a name (anonymous function)

avoid polluting the global scope with names write it , then forget about it*/

// let greet = function(){
//   console.log("hello")
// }
// greet()

// let count = 0;
// document.getElementById("decreaseBtn").onclick = () => {
//   count -= 1;
//   document.getElementById("myLabel").innerHTML = count;
// };
// document.getElementById("increaseBtn").onclick = () => {
//   count += 1;
//   document.getElementById("myLabel").innerHTML = count;
// };

// watched video till 2hours and 59 mins 
