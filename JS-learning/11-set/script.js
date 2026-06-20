//Set is a collection of unique values.
//Each value can only occur once in a Set.

//  new Set() Method
let alpha = new Set(["a", "b", "c", "d"]);
console.log(alpha.size);
// Add values:
alpha.add("e");
alpha.add("f");
console.log(alpha);//Set(6) { 'a', 'b', 'c', 'd', 'e', 'f' }
//for..of loop: in set
let i = "";
for (let x of alpha) {
    i += x;
    console.log(x);
}
//typeof set are
console.log(typeof (alpha));//object
//instanceof Set 
console.log(alpha instanceof Set);//true
//has() Method
//it  returns true if a specified value exists in a set if not than false
console.log(alpha.has("d"));//true
// forEach() Method
let ans = "";
alpha.forEach(function (vale) {
    ans += vale;
})
console.log(ans);
//values() Method
//method returns an Iterator object with the values in a Set:
let example = alpha.values();
let q = "";
for (let i of example) {
    q += i;
} console.log(i);
console.log(alpha.values());

//A Set has no keys, so keys()
//  returns the same as values().
console.log(alpha.keys());

//entries() Method
//A Set has no keys, so the entries() 
// method returns [value,value].
console.log(alpha.entries());

//concat/union  of two sets.& return new set
let A = new Set(["a", "k", "c", "d"]);
let B = new Set(["a", "f", "g", "d"]);
let C = new Set(["a", "c", "d"])
let D = new Set(["x", "y", "z"])
console.log(A.union(B));
//intersection() Method
// it give same (common)in two set
console.log(A.intersection(B));

//difference() Method
// it give (different)in two set
console.log(A.difference(B))

//symmetricDifference() method 
// returns the symmetric difference between to sets
console.log(A.symmetricDifference(B))

//isSubsetOf() Method
//if all elements one set is also elements of other set retun true otherwise false
console.log(A.isSubsetOf(C))//false
console.log(C.isSubsetOf(A))//true

//isSupersetOf() Method
//returns true if all elements in the argument set are also in this set:
console.log(A.isSupersetOf(C));//true

//isDisjointFrom() Method
console.log(A.isDisjointFrom(B));//false
console.log(A.isDisjointFrom(D));//true

//A JavaScript WeakSet is a collection of values where the values must be objects.
let mySet = new WeakSet();
let myObj = {fname:"John", lname:"Doe"};
mySet.add(myObj);
console.log(mySet)//{ <items unknown> }
// myObj=null;
// console.log(mySet)