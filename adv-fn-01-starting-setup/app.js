function add(n1, n2) {
  return n1 + n2;
}

console.log(add(5, 10)); // Output: 15
console.log(add(20, 30)); // Output: 50

function random(n1) {
  return n1 + Math.random();
}
console.log(random(20));

const hobbies = ["sports", "cooking"];

function printHobbies(h) {
  h.push("reading");
  console.log(h);
}

printHobbies(hobbies);
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }

  return calculateTax;
}

const calculateVAT = createTaxCalculator(0.2);
const calculateSalesTax = createTaxCalculator(0.1);

console.log(calculateVAT(100)); // Output: 20
console.log(calculateSalesTax(100)); // Output: 10

let username = "Jimin";
function greetUser() {
  let name = "TAETAE";
  console.log("Hi " + name);
}
let name = "Joonie";
username = "JK"; // Global variable
greetUser(); // Output: Hi John Doe

// function powerOf(x,n){
//     let result = 1;
//     for(let i=0; i<n; i++){
//         result *= x;
//     }
//     return result;
// }

function powerOf(x, n) {
  if (n === 1) {
    return x;
  } 
    return x * powerOf(x, n - 1);
  
}

console.log(powerOf(2, 3)); // Output: 8
