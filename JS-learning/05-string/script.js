let a = "hello js";
let b = 'hello java';
let c = `Hello World!`;
let d = `Hello
jksndc
kjdcnjkn
;njdsvncs;djk,csdk World!`;

console.log(`wellcome ${a},${b} to this`);
let x = 2.3;
let y = 3;
console.log(`total ${(x * y).toFixed(2)}`);

let latter = "hello";
let latter1 = "world";
let la = latter.concat(" ", latter1);
console.log(la)

let text = "abdullah";
let to = text.slice(3, 7)
console.log(to);

let str = "Apple, Banana, Kiwi";
let part = str.substring(2);
console.log(part);

let text1 = "Hello World!";
let text01 = "@1111k11jdnckd098892376nc\0ds/8";
let text2 = text1.toUpperCase();
let text3 = text1.toLowerCase();
let text4 = text01.isWellFormed();
console.log(text2);
console.log(text3);
console.log(text4);

let tex = "I love cats. Cats are very easy to love. Cats are very popular."
tex = tex.replaceAll("Cats", "Dogs");
tex = tex.replaceAll("cats", "dogs");
console.log(tex);

let texta = "9";
let textb = "7";
texta = texta.padStart(4, "0");
textb = textb.padEnd("4", 0);
console.log(texta);//->0004
console.log(textb);//->4000

let example = "hello world \n";
example = example.repeat(3);//->print 3 time hello world;
console.log(example);

let ab="cow is animal that eat grass animal";
console.log(ab.indexOf("animal"));
console.log(ab.lastIndexOf("eat"));
console.log(ab.search("animal"));

console.log(ab.match("ani"));

let cat = "I love cats. Cats are very easy to love. Cats are very popular";
let cat1=cat.matchAll(/Cats/gi);//gi means global insensative
console.log(Array.from(cat1));
console.log(cat.includes("love"));//output-> true;
console.log(cat.includes("love",2))//output-> true;
console.log(cat.includes("Love",2))//output-> false; because case sensative
console.log(cat.endsWith("popular"));//output-> true;
console.log(cat.endsWith("pepole"));//output-> false;

let cd={
    name:"abdullah",age:21,class:12}
    ;
console.log(cd,...rest(age))




