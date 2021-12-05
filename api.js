// JSON

const person = {
    name: 'John' ,
    age:21,
    product:'laptop'
};

//Json convert back and forth
// const jsonData= JSON.stringify(person);
// console.log(jsonData);
// const ConObj = JSON.parse(jsonData);
// console.log(ConObj.name);


// API
// const url = 'https://jsonplaceholder.typicode.com/users'
// fetch(url)
// .then((response) => response.json())
// .then((data) => console.log(data))

// Local Stroage

// localStorage.setItem('userID', 1400);
// localStorage.setItem('sujon', 24)
// sessionStorage.setItem('smita',20)

localStorage.setItem('person', JSON.stringify(person));

const stroed = localStorage.getItem('person',person);
const stroued =JSON.parse(stroed);
console.log(stroued.name);

const keys = Object.keys(stroued);
console.log(keys);

const values = Object.values(stroued);
console.log(values);

// const userId = localStorage.getItem('userID');
// const userId1 = localStorage.getItem('sujon');
// console.log(userId1);