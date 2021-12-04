const name = ['Sujon', 'james', 'robin', 'jhon'];
const age = [40, 50, 60];

const products = [
    {id:1, name: 'laptop', price: 200}, 
    {id:2, name:'mobile', price:20}, 
    {id:3, name:'tab', price:150},
    {id:4, name:'Watch', price:120}
];

//Map
// Single  hola return korta hoba na
const names = products.map((product) =>product.name);

// Multi hola return korta hoba
const namess = products.map((product) =>{
   return product.name
});
console.log(namess);

// ForEach
products.forEach((product) =>console.log(product.name))

//filter
const lowRate = products.filter((product) =>product.price > 100 );
console.log(lowRate);

//filter use remove item

const removeItem = products.filter((product) =>product.id != 4);
console.log(removeItem);

// find
const search = products.find((product) =>product.name === 'tab') ;
console.log(search);




