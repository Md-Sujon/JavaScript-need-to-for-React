// Array destructuring
/*
const Array = [45,92,50,60,80];
const x = Array[0];
const y = Array[1];


[x,y] = [45,92];

const [x,y,z,a,b,c] = Array;
console.log(x,y);

function boxify(num1){
return [num1, num1*10, num1-4, num1*5]
}
const [x1,y1,z1,a1] = boxify(8);
console.log(x1,y1,z1,a1);
*/

// Object destructuring

const person = {name: 'John', age:20, money:50, product:'laptop'}
const {money, product,name,age} =person;
console.log(money,product,name,age);

// creat object shortcut
const one = 2000;
const two = 3000;
const obj = {x:one, y:two};
const obj2 = {one,two};
console.log(obj2);

// Three dots array ka copy kora.
const number = [40,50,60,70];
const numbers = [...number,90,100,120];
const numberss = [...numbers,1000,2000,3000,4000];
console.log(numberss);