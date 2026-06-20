//question 1 code
let arr1 = [1, 2, 3, 4, 5, 6];
let n = arr1.length;
let sum = 0;
for (let i = 0; i < n; i++) {
    sum += arr1[i];
}
console.log("Avg of array=", sum / n);

//question 2 code
let arr2 = [1, 2, 3, 4, 5, 6];
let len = arr2.length;
let element = 4;
let isNotFound = true;
for (let i = 0; i < arr2.length; i++) {
    if (element === arr2[i]) {
        console.log("element at index ", i);
        isNotFound = false;
        break;
    }
}
if (isNotFound === true) {
    console.log("element is not found in array:");
}
//question 3 code
let string = "abdullah"
let string1 = "aeiou"
let ans = "";

for (let i = 0; i < string.length; i++) {
    let b = false;

    for (let j = 0; j < string1.length; j++) {
        if (string[i] === string1[j]) {
            b = true;
            break;
        }
    }

    if (b) {
        ans += "*";
    } else {
        ans += string[i];
    }
}

console.log(ans)

//question 4 code
let input = 12345;
let count = 0;
while (input > 0) {
    let div = Math.floor(input / 10);
    count++;
    input = div;
}
console.log("total no of digit are ", count);

//question 5 code
let one = [11, 21, 3, 4, 5];
let two = [16, 7, 8, 91, 10];
let final = [];

one.sort((a,b)=>a-b);
two.sort((a,b)=>a-b); 

let i = 0;
let j = 0;

while (i < one.length && j < two.length) {
    if (one[i] < two[j]) {
        final.push(one[i]);
        i++; 
    } else {
        final.push(two[j]);
        j++; 
    }
}

while (i < one.length) {
    final.push(one[i]);
    i++;
}

while (j < two.length) {
    final.push(two[j]);
    j++;
}

console.log(final);