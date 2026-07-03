/*
Module ek reusable JavaScript file hoti hai jo apna code, variables, functions aur classes ko organize karti hai aur zarurat padne par dusri files me use ki ja sakti hai.


*/
function add(a,b){
  return(a+b)

}
function sub(a,b){
  return(a-b)

}
console.log( add(2,4))
/*
its worng method to export becuse add is overwrite by sub
module.export =add;
module.export =sub;

we can use object to export multiple module
*/

module.exports={
  add, sub,
};

