let addTodo = e => {
    e.preventDefault()
    toDolist.innerHTML += `<li>${newTodo.value} <input type="checkbox"><button onclick="this.parentElement.remove()">seeYa</button></li>`
    newTodo.value = ""
}