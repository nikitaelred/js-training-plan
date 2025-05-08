function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomInt(1, 10)); // Example usage



function productDescription(strings,productName,  productPrice) {
  console.log(strings); // ["Product: ", " Price: ", ""]
  console.log(productName); // "Laptop"   
  console.log(productPrice); // 1000
  return `${strings[0]}${productName}${strings[1]}${productPrice}${strings[2]}`;
}

const prodOutput = productDescription`Product: ${"Laptop"} Price: ${1000}`;
console.log(prodOutput); // Example usage