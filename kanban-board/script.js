const addTaskBtn = document.getElementById("add-task");
const taskInput = document.getElementById("task-input");
const columns = document.querySelectorAll(".task-list");
const modal = document.getElementById("modal");
const modalInput = document.getElementById("modal-input");
const modalSave = document.getElementById("modal-save");
const modalCancel = document.getElementById("modal-cancel");

let currentEditingSpan = null;

window.addEventListener("load", loadTasks);

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const task = createTask(taskText);
    document.getElementById("todo").appendChild(task);
    taskInput.value = "";
    taskInput.classList.remove("error");
    saveTasks();
  } else {
    taskInput.classList.add("error");
    taskInput.placeholder = "Task Name is required";
  }
});

function createTask(text) {
  const task = document.createElement("div");
  task.className = "task";
  task.setAttribute("draggable", "true");

  const content = document.createElement("span");
  content.textContent = text;

  content.addEventListener("click", () => {
    modalInput.value = content.textContent;
    modal.classList.remove("hidden");
    currentEditingSpan = content;
  });

  const delBtn = document.createElement("button");
  delBtn.innerHTML = '<i class="fas fa-trash"></i>';
  delBtn.className = "delete-btn";
  delBtn.addEventListener("click", () => {
    task.remove();
    saveTasks();
  });

  task.appendChild(content);
  task.appendChild(delBtn);

  task.addEventListener("dragstart", () => task.classList.add("dragging"));
  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
    saveTasks();
  });

  return task;
}

modalSave.addEventListener("click", () => {
  if (currentEditingSpan) {
    if (modalInput.value !== "") {
      currentEditingSpan.textContent = modalInput.value;
      currentEditingSpan = null;
      saveTasks();
      modal.classList.add("hidden");
    } else {
      modalInput.classList.add('error');
      modalInput.placeholder = "Task Name is required";
      return;
    }
  }
});

modalCancel.addEventListener("click", () => {
  modal.classList.add("hidden");
  currentEditingSpan = null;
});

columns.forEach((column) => {
  column.addEventListener("dragover", (e) => {
    e.preventDefault();
    const dragging = document.querySelector(".dragging");
    column.appendChild(dragging);
  });
});


function saveTasks() {
  const boardState = {};
  columns.forEach((col) => {
    const id = col.id;
    const tasks = [...col.querySelectorAll(".task span")].map(
      (t) => t.textContent
    );
    boardState[id] = tasks;
  });
  localStorage.setItem("kanban-board", JSON.stringify(boardState));
}


function loadTasks() {
  const saved = localStorage.getItem("kanban-board");
  if (!saved) return;

  const boardState = JSON.parse(saved);
  for (const columnId in boardState) {
    const tasks = boardState[columnId];
    const column = document.getElementById(columnId);
    tasks.forEach((text) => {
      const task = createTask(text);
      column.appendChild(task);
    });
  }
}
