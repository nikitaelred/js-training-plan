// const ids = new Set(['B','T','S']);
// ids.add(7);
// console.log(ids);
// ids.delete(7);

// for(const entry of ids.entries()){
//     console.log(entry);
// }

// for(const entry of ids.values()){
//     console.log(entry);
// }

const person1 = { name: "Joon" };
const person2 = { name: "JK" };

const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);
console.log(personData);
console.log(personData.get(person1));
