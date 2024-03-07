//1.  JSON => stringify, parse
const person = {
  name: "Nayeem Miah",
  age: 19,
  profession: "student",
  bookWritting: ["hablu", "gablu"],
};

const Stringfyed = JSON.stringify(person);
// console.log(person);
// console.log(Stringfyed);

const parsePerson = JSON.parse(Stringfyed);
// console.log(parsePerson);


// 2. fetch 
// fetch('url')
// .then(response => response.json())
// .then(data => console.log(data));

const keys = Object.keys(person);
console.log(keys);
const values = Object.values(person);
console.log(values);

const numbers = [ 23, 456, 76, 23];
numbers.forEach(num =>console.log(num));
numbers.map(num => num*2);
console.log(numbers);

// for of array like Objects 
// loop on an Objects using for in loop



// add or remove from an array 
const products = [
    { name: "laptop",price:4000, brand: "len", color: "black" },
    { name: "phone",price:13000, brand: "HTC", color: "yellow" },
    { name: "iphone",price:78000, brand: "lenovo", color:"silver" },
    { name: "laptop",price:7000, brand: "hp", color: "black" },
    { name: "watch",price:5000, brand: "casio", color: "black" },
    { name: "camera",price:6000, brand: "canon", color: "gray" },
  ];


  const newProduct = {
    name : 'webcam', price: 700, brand : 'lal'
  }

//   copy products array and then add newProducts
const newProducts =[...products, newProduct];

//  create a new array without one specific item 
//  remove phone means create a new array without the phone 

const remaining = products.filter(p=> p.name !=='phone');
console.log(remaining);