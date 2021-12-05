const money = 90;
const active = false;
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
