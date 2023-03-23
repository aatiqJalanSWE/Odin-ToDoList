const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const listElement = document.querySelector("#tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = input.value;

  const taskElement = document.createElement("div");
  taskElement.classList.add("task");

  const taskContent = document.createElement("div");
  taskContent.classList.add("content");

  taskElement.appendChild(taskContent);

  const taskInput = document.createElement("input");
  taskInput.classList.add("text");
  taskInput.type = "text";
  taskInput.value = task;
  taskInput.setAttribute("readonly", "true");

  taskContent.appendChild(taskInput);

  const taskActions = document.createElement("div");
  taskActions.classList.add("actions");

  const taskEdit = document.createElement("button");
  taskEdit.classList.add("edit");
  taskEdit.innerText = "Edit";

  const taskDelete = document.createElement("button");
  taskDelete.classList.add("delete");
  taskDelete.innerText = "Delete";

  taskActions.appendChild(taskEdit);
  taskActions.appendChild(taskDelete);

  taskElement.appendChild(taskActions);

  listElement.appendChild(taskElement);

  input.value = "";

  taskEdit.addEventListener("click", () => {
    if (taskEdit.innerText.toLowerCase() == "edit") {
      taskEdit.innerText = "Save";
      taskInput.removeAttribute("readonly");
    } else {
      taskEdit.innerText = "Edit";
      taskInput.setAttribute("readonly", "true");
    }
  });

  taskDelete.addEventListener("click", () => {
    listElement.removeChild(taskElement);
  });
});
