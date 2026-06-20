//Objects are variables that can store both values and functions
//JavaScript objects are collections of properties

//Object Constructors
//Sometimes we need to create many objects of the same type.

//simple object creation

let car = {
    carname: "maruti",//carname is property & maruti is propety value
    carmodel: "800",
    carcolor: "red"
};
let model = car.carname;
let color = car.carcolor;

console.log("the car model are:" + model);
console.log("the car color are:" + color);
//object using literal
let person = {
    name: "mohan",
    age: 21,
    color: "brown"
}
console.log(person.name + " is " + person.age + " year old and its look like " + person.color + "is color");

//empty object
let personDetail = {};
personDetail.name = "sohan";
personDetail.age = 40;
personDetail.DOB = 1986;

console.log(personDetail.name + "\t", personDetail.age, "\t", personDetail.DOB);

let abc = new Object({// actually there is no need of onject keyword is only used for readability
    firstName: "Md",
    lastName: "Abdullah",
    age: 21
});
//You can access object properties in two ways:

// Dot notation
console.log(abc.firstName, "\t", abc.lastName, "\t", abc.age);
// Bracket notation
console.log(abc["firstName"], "\t", abc["lastName"], "\t", abc["age"]);

//Object Methods
let personDetails = {
    firstName: "RAM",
    lastName: "BABU",
    age: 50,
    DOB: 1976,
    fullName:function() {
        return this.firstName + " " + this.lastName;
        //return this["firstName"]+" "+ this["lastName"];
        // it also work
    }
};
console.log(personDetails.fullName());

//changing property also
let per = {
    firstName: "RAM",
    lastName: "BABU",
    age: 50,
    DOB: 1976,
    fullNameis() {
        this.firstName = "MOHAN";
        this.lastName = "DAS"
        return this["firstName"] + " " + this["lastName"];
        // it also work
    }
};
console.log(per.fullNameis());

//deleting property
console.log(per.DOB);
delete per.DOB;
console.log(per.DOB);

//checking  Property Exists
console.log("fullName" in personDetails);// why false
console.log("firstName" in personDetails);

//Nested Objects
myObj = {
    name: "John",
    age: 30,
    myCars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}
console.log(myObj.myCars.car2);
//myObj["myCars"]["car2"]; also work

//Adding a JavaScript Method
let abcd = {
    firstName: "Md",
    lastName: "Abdullah",
    age: 21
};
console.log(abcd["lastName"].toUpperCase());

const person1 = {
    name: "md abdullah",
    hello: function () {
        return "hello " + this.name;
    }

}
console.log(person1.hello());
const person2 = {
    name: "demo name",
    hello: function () {
        return "hello " + this.name;
    }

}
console.log(person2.hello());

// global scop object
function myFunction() {
  return this;
}
console.log(myFunction());

const personx = {
  name: "John",
  age: 30,
  city: "New York"
};

let text = personx;
console.log(text);
// using for loop 

let obj={
    name:"Md Abdullah",
    age:21,
    city:"jaipur"
};
let output="";
for(let i in obj){
    output+=obj[i]+"\n";
};
console.log(output);

//Using Object.values() method
let arr=Object.values(obj);
let out=arr.toString();
console.log(out);

//Using Object.entries() method
let example="";
for(let [i,j]of Object.entries(obj)){
    example+=i+"\t"+j+"\n";
}
console.log(example);

//Using JSON.stringify()
let te = JSON.stringify(obj);
console.log(te);

//Object Constructor Function
function mobile(a,b,c,d) {
    this.a="apple";
    this.b="samsung";
    this.c="realme";
    this.d="redmi";
}
let laptop=new mobile("mac","hp","asus","lenovo");
let out1=mobile.toString();
console.log(out1);
console.log(laptop.a);

// used of rest
let obje1 = {
    Name: "Rahul",
    age: 20,
    city: "Delhi"
};

let {Name,age, ...rest} = obje1;
console.log(Name); 
// console.log(age);
console.log(rest);

const xyz ={
    fname: "kjefh",
    lanem: "lsfn",
    age: 50
}
const{fname, ...rest1} = xyz;
rest1.age=34;
xyz.age=384;
let{lanem, ...rest2} = xyz;
console.log(rest1);
console.log(xyz.age);

x=5;
console.log(x);
var x;

// y=6;
// console.log(y);
// let y;


