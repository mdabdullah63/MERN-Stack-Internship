// function is block of code
// it exicute when they are called

function sayhello() {
    return "hello world "
}
console.log(sayhello());
// function with parameter
function para(p1, p2) {
    return p1 + p2;
}
console.log(para(3, 2));

let a = para(9, 3);
let b = para(8, 3);
console.log(a + "\n" + b);

function toCelsius(farenheit) {
    return (5 / 9) * (farenheit - 32);
}
console.log(toCelsius(104));

function myFunction(x, y = 10) {
    return x + y;
}
console.log(myFunction(5));//output 15
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
let name1 = fullName("md", "abdullah");
console.log(name1)//output md abdullah

let arr = findMax(1, 123, 500, 115, 44, 88);
function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }

    }
    return max;

}
//Default Parameter Values
function defultpara(x, y) {
    if (y == undefined) {
        y = 2;
    }
    return x * y;
}
console.log(defultpara(4));
//Function Rest Parameter
function sum(...a) {
    let sum = 0;
    for (let ar of a) sum += ar;
    return sum;
}
console.log(sum(4, 34, 34, 34, 3));
// What is a Function Expression?
// A function expression is a function stored in a variable.
function multiply(a, b) {
    return a * b;
}
let multiplyis = function (a, b) {
    return a * b;
};
//here function are stored in variable 
//it is used as a function
let z = multiplyis(4, 3);
console.log(z);

function run(fn) {
    return fn();
}
const sayHello = function () {
    return "Hello js";
};
console.log(run(sayHello)
);

//hosting

//Function declarations are fully hoisted, but function expressions behave like variables and are not usable before initialization.
let exa = addsum(4, 5);
function addsum(a, b) {
    return a + b;
}
console.log(exa);

// let exa1=addsum1(4,5);
// let addsum1 =function (a,b){
//     return a+b;
// };
// console.log(exa1);

// it throw error

let exa1;// it allow
let addsum1 = function (a, b) {
    return a + b;
};
exa1 = addsum1(23, 34);
console.log(exa1);//57

// arrow function
// this is shoetes form of writing function

let fun = (a, b) => a * b;
console.log(fun(3, 4));

let fun1 = (a) => "hello sir";
console.log(fun1());
let square = x => x * x;
console.log(square(3));

// arrow function without parameter
const hello = () => "Hello World!";
console.log(hello());

// arrow function with parameter
const hello1 = val => "Hello " + val;
console.log(hello1("boss"));


//arrow function and the this keyword,arrow function does not have own tis value
//they are inherit by our surrounding code
function greet(){
    return"hello";
}
const person = {
    name: "abdullah",
    age:21,
     greet: function () {
        console.log(this.name);
        return this.age;// without retun is show undefined
     } 
    }
console.log(person.greet());

const func={
    myname:"Md Abdullah",
    greet:()=>{
        console.log(this.hello);
    }
}
console.log(this.greet);