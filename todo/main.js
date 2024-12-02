document.addEventListener("DOMContentLoaded", function () {
  const textInput = document.querySelector(".todo-input");;
  const submitCta = document.querySelector(".todo-submit");
  const todoList = document.querySelector(".todo-list");

  submitCta.addEventListener("click", function (event) {
    event.preventDefault();
    const todoItem = document.createElement("div");
    todoItem.innerText = textInput.value;
    textInput.value = "";
    todoList.appendChild(todoItem);
  })
  // render-> which should be called at every delete / add / edit
  todoList.forEach((todo) => todo.innerText)

})
// document.addEventListener("")



const z = new Promise((resolve, reject) => {

})
z.then(res => console.log(res)).catch()


