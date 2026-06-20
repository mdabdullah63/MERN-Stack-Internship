// var scope
var a = 10;
function testVar() {
    var a = 20;
    console.log("inside function var:", a);//20
}
testVar();
console.log("outside var:", a);//10
// let scope
let b = 30;
function testLet() {
    let b = 40;
    console.log("inside function let:", b);//30
}
testLet();
console.log("outside let:", b);//40
// block scope with let
{
    let x = 50;
    console.log("inside block let:", x);//50
}
// console.log(x); // error
// const scope
const c = 60;
function testConst() {
    const c = 70;
    console.log("inside function const:", c);//70
}
testConst();
console.log("outside const:", c);//60
// block scope const
{
    const y = 80;
    console.log("inside block const:", y);//80
}
// console.log(y); // error
// var block scope problem
{
    var z = 90;
}
console.log("var block scope:", z);//90
// redeclare
var p = 1;
var p = 2;
console.log("var redeclare:", p);//2
let q = 3;
// let q = 4; // error
const r = 5;
// const r = 6; // error
// reassign
var m = 10;
m = 20;
console.log("var reassign:", m);//20
let n = 30;
n = 40;
console.log("let reassign:", n);//40
const o = 50;
// o = 60; // error
console.log("const value:", o);//50
myFunction();
console.log(carName);
function myFunction() {
    return carName = "Volvo";
}
console.log(myFunction());
"use strict";
 p=23;
console.log(p)