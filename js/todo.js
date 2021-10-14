const toDoform = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input"); 과 같다.
const toDoInput = toDoform.querySelector("input");
// 아래는 ul
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();

}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    // input의 현재 value를 새로운 변수에 복사하는 것. 그 다음 무얼하건 newTodo와는 관계 없음.
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    paintToDo(newTodo);
}

toDoform.addEventListener("submit", handleTodoSubmit);


