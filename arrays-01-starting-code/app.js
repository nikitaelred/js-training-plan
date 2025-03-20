// //Creating arrays
// const numbers = [1,2,3,4];
// console.log(numbers);

// // const moreNumbers = new Array(5); // []
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1,2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// //const moreNumbers = Array.from('Hii!');
// const moreNumbers = Array.from(listItems);
// console.log(moreNumbers);

// //What can be stored in array

// const hobbies = ['sports','cooking'];
// const personalData = [30,'max',{moreDetail: []}];
// const analyticsData = [[1,1.4,56],[4,5.6,7]];

// for(const data of analyticsData){
//  for(const dataPoint of data){
//     console.log(dataPoint);
//  }
// }

// const hobbies = ['sports','cooking','music'];
// console.log(hobbies);
// hobbies.push('reading');
// hobbies.unshift('coding');
// hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'New';
// //hobbies[5] = 'reading';
// console.log(hobbies);

// //Splice Method
// hobbies.splice(2,0,'New hobby');
// console.log(hobbies);

// hobbies.splice(0,1);
// console.log(hobbies);

// //Selecting ranges and creating copies with slice
// const testResults = [1, 4.5, 6, 7.9, 10, 34, 6.7, 5, -6, 10, 7, 9, 3];
// console.log(testResults.slice()); //returns a brand new array
// console.log(testResults.slice(0, 3)); //returns part of array in specified index range
// console.log(testResults.slice(-4, -1)); //Will start from end
// console.log(testResults.slice(3)); //Will select everything from specified index

// //Concat
// const storedResults = testResults.concat([3.99, 5]); // adds array to end of an array
// console.log(storedResults);
// console.log(testResults.indexOf(10)); // Returns index of specified element.starts from left
// console.log(testResults.lastIndexOf(10)); // Returns index of specified element.starts from right

// const personData = [{name: 'max'},{name: 'manuel'}];
// const manuel = personData.find((person,idx,persons) => {
//     return person.name === 'manuel';
// });

// manuel.name = 'Anna';
// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person,idx,persons) => {
//     return person.name === 'max';
// });

// console.log(maxIndex);

//includes
const testResults = [1, 4.5, 6, 7.9, 10, 34, 6.7, 5, -6, 10, 7, 9, 3];
console.log(testResults.includes(10));


//foreach method

const prices = [10.99,5.99,20,30,79.99];
const tax = 0.19;
const taxAdjustedPrices = [];

prices.forEach((price,idx,prices) => {
    taxAdjustedPrices.push(price * (1 + tax));
});

console.log(taxAdjustedPrices);


//map method
const numbers = [65,44,12,4];
const newArr = numbers.map((num,idx,numbers) => {
    return num * 10;
});

console.log(newArr);

//sort method

const sortedPrices = prices.sort((a,b) => {
    if(a > b){
        return 1;
    }
    else if(a === b){
        return 0;
    }
    else{
        return -1;
    }
});

//reverse
console.log(sortedPrices.reverse());

//filter
const filteredArray = prices.filter((price, idx,prices) => {
    return price > 6;
 });
console.log(filteredArray);


//reduce
const sum = prices.reduce((prevValue, currentValue, curIndex, prices) => {
    return prevValue + currentValue;
}, 3);
console.log(sum);
