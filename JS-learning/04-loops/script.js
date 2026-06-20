let n = 5;
for (let i = 0; i < n; i++) {
    console.log("hello js");
}
const car = ["volvo", "bmw", "kia", "mahandra"];
let size = car.length;
for (let i = 0; i < size; i++) {
    console.log(car[i]);
}
let i = 0;
while (i < size) {
    console.log(car[i]);
    i++;
}
do {
    console.log(car[i]);
    i++;

} while (i < size);

const company = ["apple", "hp", "assus", "lenvo", "mi"];
let comsz = company.length;
let ano = [""];
let j = 0;
for
    (i = 0; i < comsz; i++) {
    ano[j] = company[i];
    j++;
}
console.log(ano);
const fruit = ["apple", "banana", "mango", "carry"];
let fruitsz = fruit.length;
for (let x = 0; x < fruitsz; x++) {
    console.log(fruit[x]);
    if (fruit[x] == "mango") {
        break;
    }
}
for (let x = 0; x < fruitsz; x++) {
    if (fruit[x] == "banana") {
        continue;

    }
    console.log(fruit[x]);

}
