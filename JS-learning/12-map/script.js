//A JavaScript Map is an object that can store collections of key-value pairs,
//Maps are similar to both Objects (unique key/value collection) 
// and Arrays (ordered values collection)

let fruits = new Map();
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
fruits.set("grapes", 300);
fruits.set("Kiwi", 600);
console.log(fruits)

//get() Method it is used to get the element
console.log(fruits.get("oranges"));
console.log(typeof (fruits));//object
console.log(fruits instanceof Map);//true

// size property returns the number of elements in a map:

console.log(fruits.size)
fruits.delete("bananas")
console.log(fruits)
// fruits.clear();//it delete all the element in map
// console.log(fruits)

console.log(fruits.has("apples"));//true
// fruits.delete("apples");
// console.log(fruits.has("apples"));//False

// foreach loop
fruits.forEach(function (value, key) {
   console.log(value, key)
});

//map entries()
console.log(fruits.entries());//both keys & value
// keys
console.log(fruits.keys());
//values
console.log(fruits.values());

////Objects as Keys
const apples = { name: 'Apples' };
const bananas = { name: 'Bananas' };
const oranges = { name: 'Oranges' };

let fruit = new Map();
fruit.set(apples, 500);
fruit.set(bananas, 300);
fruit.set(oranges, 200);

console.log(fruit.get("apples"));//undefined
console.log(fruit.get(apples));//500
// map group
let grouped = Map.groupBy([...fruits.entries()], function (item) {
   let key = item[0];
   let value = item[1];
   if (value > 200) {
      return "ok";
   } else {
      return "less ok";
   }
});
grouped.get("ok").forEach(function (item) {
   console.log(item[0] + "\t" + item[1]);
});
console.log();
grouped.get("less ok").forEach(function (item) {
   console.log(item[0] + "\t" + item[1]);
});

// let obj={};
// obj[1]="banana";
// obj["1"]="apple";
// obj["2"]="apple";

// console.log(obj[1]);

// console.log(fruit.take(2));


