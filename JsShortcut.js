const money = 90;
const active = true;
const myMoney = 150;

if (money > 100) {
    const khabo = 'Birany'
    console.log(khabo);
}else{
    const khabo = 'alu borta'
    console.log(khabo);
}


if(myMoney > 100){
    console.log('Kacci');
}else{
    console.log("cha Bisscut");
}

// if else Shortcut

const Taka = money < 100 ? 'Birany' : 'alur borta';
console.log(Taka);

const status1 = active === true ? 'active' : 'inactive';
console.log(status1);

const moneyCheck = myMoney > 100 ? 'Kacci' : 'Cha Busskut';
console.log(moneyCheck);


const x = active && 5;
const y = active || 5;
// console.log(y);

// String to Convert number only use + ; 
const Number = +'45';
console.log(Number);

// Number to convert String
const StNumber = 45 + '';
console.log(StNumber);

// Default parameter 
function sujon(num1, num2 = 5){
   console.log(num1 + num2);
}
sujon(20)