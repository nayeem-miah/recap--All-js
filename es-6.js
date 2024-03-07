const numbers = [ 12, 455, 56, 45, 665];

const person = {
    name : 'Nayeem Miah',
    age : 19,
     profession : 'student',
     bookWritting : ['hablu', 'gablu']
}
// 1. template String
const about = `My name is ${person.name}. my age is ${person.age}.
my book name is ${person.bookWritting[1]}, 
and my serial number is ${numbers[1]}`;
console.log(about);
// 2. arrow function --->
const getFiftyFive = ()=> 55;
const result = getFiftyFive();
console.log(result);

const addSixtyFive = num => num+65;
const total = addSixtyFive(12);
console.log(total);

const isEven = x => x% 2 == 0;


const addFourNumber = (z,x,c,v) =>{
    const sum = z + x + c + v;
    return sum;
}
// 3. spreed operator
const newNumbers =[...numbers];
numbers.push(999);
console.log(numbers);
console.log(newNumbers);
// create a new array from an older array and add an element
const currentNumber = [...newNumbers,666666];
currentNumber.push(333,444);
console.log(currentNumber);
console.log(numbers)