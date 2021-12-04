// Variable : Let, Const

let money = 20;
money = 40;

const name = "Sujon";

const isConfidance = false;

const person = {
    name: 'Sujon',
    age : 19,
    city: "Dhaka"
}
const statement = `My name ${person.name} may age ${person.age} my city ${person.city}`
console.log(statement);

// condition

if(money > 20 && person.age >= 20){
    console.log('sujon');
}else{
    console.log('ami na');
}

// Array
const age = ['20', '30', '40', '50', '60'];
const friendName = ['John', 'John Smith', 'sujon', 'Robin'];
const product = [{name: 'laptop', price: 50}, {name: 'mobile', price:20}, {name:'tab', price:30}];

// For Loop
for (let i = 0; i < age.length; i++) {
    const ageNumber = age[i];
}

// Regular Function

 function functionName(num1,num2){
   return num1 + num2;
}
const result1 = functionName(40,60);

// Single line arrow function
const name1 = (num1,num2) => num1 +num2;
const result2 = name1(60,20);
console.log(result2);


// Multi line arrow function
const name2 = (num1,num2) => {
   const sum = num1 +num2;
   return sum*5;
}
const result = name2(2,2);
console.log(result);