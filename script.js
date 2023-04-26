const input = document.querySelector("#todo-input");
input.addEventListener("input", enableButton);
const addButton = document.querySelector("#add-btn");
addButton.addEventListener("click", addTask);
let numberOfTasks = 0;

function enableButton() {
  if (input.value != "") {
    addButton.removeAttribute("disabled");
  }
}

function addTask() {
  numberOfTasks++;
  showNumberOfTasks();
  const inputValue = input.value;
  if (inputValue.trim() === "") {
    const errorMessage = document.createElement("p");
    errorMessage.innerText = "Please complete the field";
    errorMessage.style.color = "red";
    input.value = errorMessage.innerText;
  } else {
    const li = document.createElement("li");
    li.innerText = inputValue;
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", deleteTask);
    li.appendChild(deleteButton);
    const ul = document.querySelector("#todo-list");
    ul.style.listStyle = "decimal";
    ul.appendChild(li);
    input.value = "";
    addButton.setAttribute("disabled", "");
  }
}

function deleteTask(event) {
  showNumberOfTasks();
  const task = event.target.parentElement;
  numberOfTasks--;
  task.remove();
}

function showNumberOfTasks() {
  const numberTasks = document.querySelector(".number-tasks");
  numberTasks.innerText = `Number of tasks: ${numberOfTasks}`;
}
