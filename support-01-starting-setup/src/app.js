/* eslint-disable quotes */
const button = document.querySelector("button");
const textP = document.querySelector("p");

button.addEventListener("click", () => {
  const text = textP.textContent;
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    alert("eature not available. Please copy manually");
  }

  // do something...
});
