// 1.how to declare a variable using let and const 
const fatherName = 'Fazlul hoque';
let session = 'winter' ;
session = 'summer';
// var  --------> i will does't use it


// 2. condition ------------->
// 6 basic condition : < , > , ===, !==, <== , >==
// multiple condition : && and , || or ,

if ( fatherName === 'fazlul hoque' || session ==='summer'){

}
else if(fatherName === 'Fazlul hoque'){

}
else{

}


//  3. array declare 
// index ,
// length , push , 

const numbers = [ 12, 455, 56, 45, 665];
const index = numbers.length;
console.log(index);
numbers[4] = 88;
console.log(numbers);


// 4. how to using loop

// for loop ---->
for ( let i = 0 ; i<= 10; i++){
    console.log('number of ', i)
}
//  while loop ---->
let x = 10;
while(x>0){
    x--;
    console.log('reverse numbers is :',x);
}
//  do - while ---
// for of loop ----
//  for in loop ----
//  for each loop --
  
// 5. function ------------>
//  normal function 
function number (a , b){
    const multiply = a* b;
    return multiply;

}
const result = number(2,45);
console.log(result);
//  arrow function ---->
const add = (a,b )=>{
    const sum = a+ b ;
    return sum;
}
const total = add(34,23);
console.log(total);
    
// 6.objects 
// 3 ways to access property by name
const person = {
    name : 'Nayeem Miah',
    age : 19,
     profession : 'student'
}
const value ='name';
console.log([])
console.log(value)
console.log(person["profession"]);
console.log(person.age);