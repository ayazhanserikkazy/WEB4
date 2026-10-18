const fullName = "Serikkazy Ayazhan"; 
let age=19; 
let isStudent=true; 
let favouriteColour="Green"; 
console.log("Task 6");
console.log(fullName, typeof fullName);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);
console.log(favouriteColour, typeof favouriteColour);
age=20; 
console.log("New age:", age);


console.log("Task 7");
let userName=prompt("Write your name:");
alert("Hello, "+userName+"!");
let myGroup="MT 2501";
let personalizedGreeting="Hi! My name is "+fullName+", my group "+myGroup+".";
console.log(personalizedGreeting);


console.log("Task 8");
let input1=prompt("First number:");
let input2=prompt("Second number:");
let num1=Number(input1);
let num2=Number(input2);
console.log("Sum:", num1+num2);
console.log("Difference:", num1-num2);
console.log("Product:", num1*num2);
console.log("Quotient:", num1/num2);
console.log("Remainder:", num1%num2);


console.log("Task 9");
let nameString=fullName;
console.log("Length:", nameString.length);
console.log("UpperCase:", nameString.toUpperCase());
console.log("LowerCase:", nameString.toLowerCase());
console.log("First 3:", nameString.slice(0, 3));
let part1="Study JavaScript";
let part2="very interesting!";
console.log(part1+" "+part2);


console.log("Task 10");
let counter=10;
counter++;
console.log("After ++ :", counter);
counter--;
console.log("After -- :", counter); 
counter += 5;
console.log("After += 5 :", counter);
counter -= 3;
console.log("After -= 3 :", counter);
counter *= 2;
console.log("After *= 2 :", counter);
counter /= 4;
console.log("After /= 4 :", counter);


console.log("Task 11");
let dogAge=5;
let humanAge=(dogAge-2) *4+21;
console.log("Dog age: "+dogAge+" years, which is equivalent to "+humanAge+"  human's age.");
dogAge=2;
humanAge=(dogAge-2) *4+21;
console.log("Dog age: "+dogAge+" years, which is equivalent to "+humanAge+" human's age.");


console.log("Task 12");
function greetUser(name){
    console.log("Hello, "+name+"!");
}
function calculateSum(a, b){
    return a+b;
}
function calculateRectangleArea(width, height){
    return width * height;
}
greetUser("Ali");
greetUser("Kausar");
console.log("Sum(5, 10):", calculateSum(5, 10));
console.log("Sum(20, 30):", calculateSum(20, 30));
console.log("Area of a rectangle(4 x 5):", calculateRectangleArea(4, 5));
console.log("Area of a rectangle(7 x 3):", calculateRectangleArea(7, 3));