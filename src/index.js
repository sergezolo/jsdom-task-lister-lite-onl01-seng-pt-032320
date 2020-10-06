document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const todoList = document.getElementById("tasks");

  taskForm.addEventListener("submit", event => {
    event.preventDefault();
    const userInputField = event.target.querySelector("#new-task-description");
    const userInput = userInputField.value;
    const liTag = document.createElement("li");
    liTag.innerText = userInput;
    todoList.appendChild(liTag);
    userInputField.value = "";
  });

});
