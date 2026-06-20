// simple array
let car = ["volvo", "BMW", "RR", "Saab"];
for (let i = 0; i < car.length; i++) {// finding length ="0-3";
    console.log(i + 1, car[i]);
}

//Using the JavaScript Keyword new
let cars = new Array("Hundai", "volvo", "BMW", "RR", "Saab")
for (let i = 0; i < cars.length; i++) {
    cars[3] = "Nisan";// assinging at RR
    console.log(cars[i]);
}
cars.toString();
console.log(typeof (cars));//object
console.log(Array.isArray(cars));//true

//Arrays are Objects
const person = { firstName: "John", lastName: "Doe", age: 46 };
console.log(person.firstName);

// Array Elements Can Be Objects
cars[0] = Date.now;
console.log(cars[0]());


//Looping Array Elements
let carex = ["volvo", "BMW", "RR", "Saab"];
for (let i = 0; i < carex.length; i++) {
}

//Looping Array Elements
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.forEach(function (a) {
    console.log(a);
});
//fruits instanceof Array
console.log(fruits instanceof Array);//true
// set array length
fruits.length = 2;
//Adding Array Elements
fruits.push("carry");
// console.log(a);
// fruits[9]="carry"// undefined "holes" error dega

//Remove Array Elements
fruits.pop[1];
// console.log(a);

//In JavaScript, arrays use numbered indexes. //Arrays are spacial Objects
// In JavaScript, objects use named indexes.

// they are different to each other
// const a=[40];
// const a=new Array [40];

//Nested Arrays and Objects

let Nestedarr = {
    name: "Abdullah",
    age: 21,
    vehical: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5", "x7"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}
// acessing the object
console.log(Nestedarr.name)
// acessing the array inside the object
for (let x = 0; x < Nestedarr.vehical.length; x++) {
    console.log(Nestedarr.vehical[x]);

}
// acessing the object inside the array
console.log(Nestedarr.vehical[0].models, Nestedarr.vehical[1].models, Nestedarr.vehical[2].models);

// herachy acessing
console.log(Nestedarr.name);
console.log(Nestedarr.age)
for (let x = 0; x < Nestedarr.vehical.length; x++) {
    console.log("\n" + Nestedarr.vehical[x].name + "\n");
    for (let y = 0; y < Nestedarr.vehical[x].models.length; y++) {
        console.log(Nestedarr.vehical[x].models[y]) + "\n";
    }

}

// JavaScript Array join()

const example = ["abc", "cde", "fgh", "ijk"];
example.shift();
console.log(example);
console.log(example.join("--"));
// for(let e=0;e<example.length;e++){
//     console.log(example[e]);// doest change
// }
console.log(example.shift());
for (let e = 0; e < example.length; e++) {
    console.log(example[e]);// doest change
}
// merging the array
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const arr5 = ["Robin", "Morgan"];
const myChildren = myGirls.concat(myBoys);
const myChildren1 = myGirls.concat(myBoys, arr5);
console.log(myChildren1.length);
let newArr = myChildren.concat("these are not me");
for (let g = 0; g < newArr.length; g++) {
    console.log(newArr[g]);
}
//Array copyWithin()

const fruitsname = ["Banana", "Orange", "Apple", "Mango"];
fruitsname.copyWithin(2, 0);
console.log(fruitsname);

//Flattening an Array
//Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.
const myArr = [[1,2],[3,4],[5,6]];
const newArray = myArr.flat();
console.log(newArray);
//The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
const myArrx = [1, 2, 3, 4, 5,6];
const newArry = myArrx.flatMap(x => [x, x * 10]);
console.log(newArry)

//Splicing and Slicing Arrays

const phal = ["Banana", "Orange", "Apple", "Mango"];
phal.splice(2, 0, "Lemon", "Kiwi");
console.log(phal);
const phal1 = ["Banana", "Orange", "Apple", "Mango"];
phal.slice(0,2);
console.log(phal1);

let arrie = [2, 34, 5, 6, 7]
arrie.sort(function (a, b) { return (a - b) });
console.log(arrie);
console.log("max element are  " + Math.max.apply(null, arrie));
console.log("min element are  " + Math.min.apply(null, arrie));

//The sort() method sorts an array alphabetically:
let demo1a = ["hello", "how", "are", "you"];
demo1a.sort(function (d, f) { return d.localeCompare(f) });// compare b/w two string
console.log(demo1a)

//Sorting Object Arrays

let araobj = [
    { type: "volovo", year: 2026 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
]
console.log(araobj.sort(function (a, b) {
    return (a.year - b.year)
}))
console.log(araobj.sort(function (a, b) {
    return (a.type.localeCompare(b.type))
}))

//Comparing string properties
araobj.sort(function (a, b) {
    let x = a.type.toLocaleLowerCase();
    let y = b.type.toLocaleLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;

})
console.log(araobj[0].type, araobj[0].year);
console.log(araobj[1].type, araobj[1].year);
console.log(araobj[2].type, araobj[2].year);
// using arrow functiom
let array = [2, 3, 34, 3, 23];
array.forEach(element => {
    console.log(element)
});
console.log();

let array1 = [9, 7, 5, 8, 3, 23];
array1.forEach(myFunction);
function myFunction(value) {
    console.log(value);
}

//Array map()

let op1 = array1.map(myFunction1);
function myFunction1(value1) {
    return value1 * 2;
} console.log(op1)

let q1 = [10, 25, 30, 15, 20, 40];
let ans = q1.map(function1);
function function1(params) {
    if (params == 20) {
        return params * 2;
    }
    return params;
}
console.log(ans);

//Array flatMap()
let ans1 = q1.flatMap(funx);// it return array 
function funx(data) {
    return [data, data * 10]
}
console.log(ans1);
//Array filter()
const numbers = [45, 4, 9, 16, 25];
let numop = numbers.filter(f);
function f(ansn) {
    return ansn > 18;
}
console.log(numop);

//Array reduce()
// it operae all elemnt and give a sigle output

let exapl = [32, 23, 23, 2, 23,];
let exaa = exapl.reduce(fu);
function fu(sum, a) {
    return sum + a;
}
console.log(exaa)
//Array reduceRight() ye right side se reduce karta hai


//Array every() it check each element of array 
const numbers1 = [45, 4, 9, 16, 25];
let allOver18 = numbers1.every(myFunctionx);

function myFunctionx(valuep) {
    return valuep > 18;
}
console.log(allOver18)// false;

// Array some() 
// check any value pass the test or not
const numbersd = [45, 4, 9, 16, 25];
let someOver18 = numbersd.some(myFunction);
function myFunction(value) {
  return value > 18;
} 
console.log(someOver18);

// Array.from()
//return an array from any variable with a length property.
let texte = "ABCDEFG";
Array.from(texte);
console.log(texte)

//The Array.keys() 
// it returns an Array Iterator object with the keys of an array.

const fruitsna = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruitsna.keys();
let textaa = "";
for (let x of keys) {
    textaa += x + "\n";
}
console.log("output of keys:" + textaa)

//The entries()
//  it returns an Array Iterator object with key/value pairs:
let ke = fruitsna.entries();
let ol = "";
for (let i of ke) {
    ol += i + "\n";
}
console.log(ol);
//Array with() Method
//update elements in an array without altering the original array.

const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");// replace the msar
console.log(myMonths);

//Array Spread (...)
//it is used to join arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3)

//Array Rest (...)
//destruct an array and collect the leftovers:
let a, rest;
const arrexam = [1, 2, 3, 4, 5, 6, 7, 8];
[a, ...rest] = arrexam;
console.log(rest);

//Array fill ()
let g = new Array(4);
g.fill(3);
console.log(g);

//Array reverse()
const fruitsa = ["Banana", "Orange", "Apple", "Mango"];
fruitsa.reverse();
console.log(fruitsa)

//toReversed() Method
//reverses the order of the elements in an array.
fruitsa.toReversed();
console.log(fruitsa)