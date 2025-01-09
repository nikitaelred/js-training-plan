const h1 = document.querySelector("h1");
const input = document.querySelector("input");
const li = document.querySelector("li:last-of-type");
const allListElements1 = document.querySelectorAll("li");
const allListElements = document.getElementsByTagName("li");
const lifirst = document.querySelector("li");

const ul = document.querySelector("ul");
const section = document.querySelector("section");
const button = document.querySelector("button");

// console.log(ul.children[1]);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

// console.log(lifirst.parentNode);
// console.log(lifirst.closest("body"));

// li.textContent = "new text";
// li.style.color = "black";
// for (const listitem of allListElements) {
//   console.dir(listitem);
// }

// input.value = "some other value";
// input.setAttribute("value", "some different value");
// h1.textContent = "Changed text";
// h1.className = "main-title";
// h1.style.color = "#fff";
// h1.style.backgroundColor = "#000";
// console.log(h1.textContent);
// console.log(h1.className);


//section.className = "red-bg";

//Adding Elements Via HTML
//ul.innerHTML = ul.innerHTML + '<li>New LI 1</li>';
//ul.insertAdjacentHTML('beforeend','<li>New LI 2</li>');
//section.innerHTML = "<h2>New Title</h2>";


//Adding Elements via createElement
const newLi = document.createElement('li');
ul.appendChild(newLi);
newLi.textContent = 'added by createElement';
newLi.style.backgroundColor = "#666666";


//inserting DOM Elements
const prepNewLi = document.createElement('li');
prepNewLi.textContent = 'prepended li';
ul.prepend(prepNewLi);
ul.lastElementChild.before(prepNewLi);
ul.lastElementChild.after(prepNewLi);
ul.firstElementChild.replaceWith(prepNewLi);

//alternative to befor/after
const secondLi = ul.children[1];
const newAfterSecond = document.createElement('li');
newAfterSecond.textContent = 'Item 22';
secondLi.insertAdjacentElement('afterend',newAfterSecond);

//Cloning Dom Nodes
const newLi2 = newAfterSecond.cloneNode(true);
ul.append(newLi2);

//live nodes vs static nodes
const listItems = ul.querySelectorAll('li');
console.log(listItems);
const listItems2 = ul.getElementsByTagName('li');
console.log(listItems2);
const newLi3 = document.createElement('li');
newLi3.textContent = 'list item 23';
ul.append(newLi3);

console.log(listItems); //static node list
console.log(listItems2); // live node list

//Removing Dom Elements
const btn = document.querySelector('button');
//btn.remove(); 
btn.parentElement.removeChild(btn);
//button.addEventListener("click", () => {
  //   if (section.className === "red-bg visible") {
  //     section.className = "red-bg invisible";
  //   } else {
  //     section.className = "red-bg visible";
  //   }

  //section.classList.toggle('visible');
  //section.classList.toggle("invisible");
//});
//section.style.backgroundColor = 'green';
