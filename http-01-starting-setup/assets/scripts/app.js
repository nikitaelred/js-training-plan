const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchBtn = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

function sendHttpRequest(method, url, data) {
  // const promise = new Promise((resolve, reject) => {
    // const xhr = new XMLHttpRequest();

    // xhr.open(method, url);

    // xhr.responseType = "json";

    // xhr.onload = function () {
    //   if (xhr.status >= 200 && xhr.status < 300) {
    //     resolve(xhr.response);
    //   } else {
    //     reject(new Error("something went wrong!"));
    //   }
    //   // const listOfPosts = JSON.parse(xhr.response);
    // };
    // xhr.onerror = function () {
    //   reject(new Error("Failed to send request"));
    // };
    // xhr.send(JSON.stringify(data));

    return fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json',
      }
    }).then(response => {
      return response.json();
    });
  // });

  // return promise;
}

async function fetchPosts() {
  const responseData = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );

  const listOfPosts = responseData;
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    postEl.querySelector("li").id = post.userId;
    listElement.append(postEl);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

fetchBtn.addEventListener("click", fetchPosts);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;

  createPost(enteredTitle, enteredContent);
});

postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const postID = event.target.closest("li").id;
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postID}`
    );
  }
});
