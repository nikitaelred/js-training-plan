const h1 = document.querySelector("h1");
const input = document.querySelector("input");
const li = document.querySelector("li:last-of-type");
// const allListElements = document.querySelectorAll('li');
const allListElements = document.getElementsByTagName("li");
const lifirst = document.querySelector('li');

const ul = document.querySelector("ul");
console.log(ul.children[1]);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);


console.log(lifirst.parentNode);
console.log(lifirst.closest('body'));

li.textContent = "new text";
li.style.color = "red";
for (const listitem of allListElements) {
  console.dir(listitem);
}

input.value = "some other value";
input.setAttribute("value", "some different value");
h1.textContent = "Changed text";
h1.className = "main-title";
h1.style.color = "#fff";
h1.style.backgroundColor = "#000";
console.log(h1.textContent);
console.log(h1.className);
