const form = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const dateInput = document.getElementById("dateInput");
const todoList = document.getElementById("todoList");

let todos = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // VALIDASI
    if (todoInput.value === "" || dateInput.value === "") {
        alert("Todo dan tanggal harus diisi!");
        return;
    }

    const todo = {
        text: todoInput.value,
        date: dateInput.value
    };

    todos.push(todo);
    todoInput.value = "";
    dateInput.value = "";

    displayTodos(todos);
});

function displayTodos(data) {
    todoList.innerHTML = "";

    data.forEach((todo, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${todo.text} (${todo.date})
            <button onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

function deleteTodo(index) {
    todos.splice(index, 1);
    displayTodos(todos);
}

function filterTodo(type) {
    if (type === "all") {
        displayTodos(todos);
    } else {
        const today = new Date().toISOString().split("T")[0];
        const filtered = todos.filter(todo => todo.date === today);
        displayTodos(filtered);
    }
}