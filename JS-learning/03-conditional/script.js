const prompt = require('prompt-sync')();

let age = Number(prompt("enter your age"));
let text = "You can Not drive!";
if (age >= 18) {
    console.log("You can drive!");
} else {
    console.log("You can not drive! in india");
}

let country = prompt("enter your country name");
if (country == "USA") {
    if (age >= 16) {
        console.log("You can drive! in usa");
    } else {
        console.log("You can not drive! in usa");
    }
} else {
    if (age >= 18) {
        console.log("You can drive!");
    } else {
        console.log("You can not drive!");
    }
}

const time = new Date().getHours();
let greeting;
if (time < 10) {
    greeting = "Good morning";
    console.log(greeting);
} else if (time < 20) {
    greeting = "Good day";
    console.log(greeting);
} else {
    greeting = "Good evening";
    console.log(greeting);
}

(age >= 18) ? console.log("adult") : console.log("minor");

let day;
let date = new Date().getDay();
switch (date) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
        console.log("today is "+day);
