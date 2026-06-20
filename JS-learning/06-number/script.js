let x = 3.14;// number with decimal
let y = 3;//number without decimal

//Extra large or extra small numbers can be written with scientific (exponent) notation:
let z = 23e14;
let a = 23 - 14;

//This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:

//Integers floting (numbers without a period or exponent notation) are accurate up to 15 digits.

let b = "23";
let q = x + y + a + b
console.log(q);

let c = 10;
let d = 20;
let e = "The result is: " + c + d;//output= The result is:1020
console.log(e)

//JavaScript will try to convert strings to numbers when dividing:

let f = "100";
let g = "10";
console.log(f / g)//output 10;
console.log(f * g)//output 1000;
console.log(f - g)//output 90;

//NaN is a JavaScript reserved word indicating that a number is not a legal number.

let h = 100 / "Apple";
console.log(h);//output NaN
console.log(typeof (h));//output Number
let i = 23;
let j = i.toString(2);

console.log(j);//output 10111

let k = 123;
let l = new Number(123);
console.log(typeof (k))//output number
console.log(typeof (k))//output object


console.log(k == l)//output ture

let m = 123;
console.log(m.toString() + "\n" + (123).toString() + "\n" + (100 + 23).toString() + "\n" + typeof (m));
//output 123 & number
let n = 9.656;
console.log(n.toExponential() + "\n" +
    n.toExponential(2) + "\n" +
    n.toExponential(4) + "\n" +
    n.toExponential(6));
//output
// 9.656e+0
// 9.66e+0
// 9.6560e+0
// 9.656000e+0
let o = 9.656;
console.log(
    o.toFixed(0) + "\n" +// output 10
    o.toFixed(2) + "\n" +
    o.toFixed(4) + "\n" +
    o.toFixed(6)
);
console.log(Number(true) + "\n" +
    Number(false) + "\n" +
    Number("10") + "\n" +
    Number("  10") + "\n" +
    Number("10  ") + "\n" +
    Number(" 10  ") + "\n" +
    Number("10.33") + "\n" +
    Number("10,33") + "\n" +
    Number("10 33") + "\n" +
    Number("John"));
//parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
//parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
//how to declered big int
let ab = 9999999999999999n;
let bc = BigInt("9999999999999999");
console.log(typeof(ab));
let p = 10n;
let r = 5;
// console.log(p+r);// type error
let s=Number(p);
console.log(s+r);
let x1 = (10n > 5n);   // true
console.log(x1);
let y1 = (10n === 10); // false 
console.log(y1);
let z1 = (10n == 10);  // true 
console.log(z1);
