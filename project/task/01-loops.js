//question no 1 code
let arr = [2, 4, 5, 6, 7,68];
let len = arr.length;
let sum = 0;
for (let i = 0; i < len; i++) {
    sum += arr[i];
}
console.log("sum of array=" + sum);

//question no 2 code
const str = "javascript";
let strlen = str.length;
let count = 0;
for (let i = 0; i < strlen; i++) {
    if (str[i] == "a") {
        count++;
    }
}
console.log("total count of a =" + count);

//question no 3 code

const string = "javascript";
let strlength = string.length;
let rev = "";
for (let i = strlength - 1; i >= 0; i--) {
    rev += string[i];
}
console.log("reverse=" + rev);

//question no 4 code
const n = 5;
for (let i = 0; i < n; i++) {
    let a = "";
    for (let j = 0; j <= i; j++) {
        a+= "* ";
    }
    console.log(a);
}
console.log("\n");

//question no 5 code
const no = 5;
for (let i = no; i >=0; i--) {
    let x = "";
    for (let j = i; j >=0; j--) {
        x+= "* ";
    }
    console.log(x);
}