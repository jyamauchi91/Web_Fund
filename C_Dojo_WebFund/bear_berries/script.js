let cutiePoints = (el) => {
    el.innerText++
}

let nameChange = (el) => {
    el.innerText = 'Smokey'
}

let addTdo = (e) => {
    e.preventDefault()
    todoList.innerHTML += `<li>${newItem.value}</li>`
    newItem.value = ''
}