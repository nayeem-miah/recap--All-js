// 1. array destructuring 
const numbers = [22,45];
// const x= numbers[0];
// const y= numbers[1];

// const [x,y] = [22, 45]
const [x,y] = numbers;

function boxify (num1 ,num2){
    const numbs = [num1, num2];
    return numbs;
}
// const [a,b] = [45, 67];
const [a,b] = boxify(45,67);


console.log(boxify(45,67));

const person = {
    name : 'Nayeem Miah',
    age : 19,
     profession : 'student',
     bookWritting : ['hablu', 'gablu']
}

// const [ first , second] =  ['hablu', 'gablu'];
const [ first , second] =  person.bookWritting;

//  objects destructuring 
const { name , age} = { name : 'Alu', age:23};
const { Name , Roll} = { Name : 'Alu', Roll:23, };


const employee = {
    ide : 'vs code',
    job: 'developer',
    machine: 'mac',
    language : ['HTML', 'CSS', 'js'],
    specification :{
        height : 44,
        wight: 67,
        address : 'kunarKhali',
        drinks: 'water',
        watch:{
            color : 'black',
            brand: 'garming',
            price : 500
        }
    }
}
const {machine , ide} = employee;
console.log(machine, ide);
const {wight,address} = employee.specification;
console.log(wight, address);

const {language} = employee;
console.log(language);
 const {brand} = employee?.specification?.watch;
 console.log(brand);
