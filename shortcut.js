//  truthy ----> 'name' , 'almas' , 56, true , {} , [].
// falsy  -------> '', 0 , undefine , null, false 

let myVar = 5;
if(myVar){
    myVar= myVar* 100;
}
else {
    myVar = 0;
}

let myMoney = 50;
//  you check negative or falsy anything 
if(!myMoney){
    
}
else{
    console.log('hey')
}


const money = 50 ;
let food;
if( money>100){
    food = 'boryani';
}
else{
    food = 'cha biscuit'
}

// ternary operator
let food1 = money> 100 ? 'biryani' : 'cha biscuit';
// console.log(food1);

let drink = (money > 100 && myVar> 100) ? 'coke' : 'filter water';
// console.log(drink);

//  shortcut number to string conversion 
const num1 = 52;
console.log(num1);
const numberString = num1 + '';
console.log( numberString);

const input = '560';
const inputNumbers = +input;
// console.log(typeof inputNumbers);

let isActive = false;
const showUser = () => console.log('display - user ');   
const displayUser = () => console.log('show - user ');  
// isActive ? showUser() :  displayUser();
// use && if the side is true then right side will be executed  

// isActive && showUser();

// use || if the side is false then right side will be executed 
isActive || displayUser();

// toggle Boolean
isActive = !isActive;