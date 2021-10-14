const toDoform = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input"); 과 같다.
const toDoInput = toDoform.querySelector("input");
// 아래는 ul
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos(){
    localStorage.setItem("TODOS_KEY", JSON.stringify(toDos));
}

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
    toDos.push(newTodo);
    paintToDo(newTodo);
    savedToDos();
}

toDoform.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach((item) => console.log("this is the trun of ", item));
}
