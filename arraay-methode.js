const products = [
  { name: "laptop",price:4000, brand: "lenovo", color: "black" },
  { name: "phone",price:13000, brand: "lenovo", color: "yellow" },
  { name: "iphone",price:78000, brand: "lenovo", color:"silver" },
  { name: "laptop",price:7000, brand: "hp", color: "black" },
  { name: "watch",price:5000, brand: "casio", color: "black" },
  { name: "camera",price:6000, brand: "canon", color: "gray" },
];
//  use map();
const brands = products.map( product => product.brand);
// console.log(brands);

const names = products.map(x=> x.name);
// console.log(names);


// use forEach();
products.forEach(product => console.log(product))
products.forEach(product => console.log(product.color))
products.forEach(product=> {
    const productValue = product.name;
    console.log(productValue)
})

// filter
const cheap = products.filter(product=> product.price<5000);
console.log(cheap);
const yellowColor = products.filter( product => product.color=='yellow');
console.log(yellowColor);
const specificName = products.filter(p=> p.name.includes('n'));
console.log(specificName);

//  find ----->
const special = products.find(product => product.color.includes('black'));
console.log(special);