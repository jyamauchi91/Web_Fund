let increase = (el) => {
    el.innerText++
}

let contactUs = () => {
    alert('Contact us at 555-5555')
}

function changeName() {
    var selectedName = document.getElementById("sortBy").value
    document.getElementById("pickOne").innerText = selectedName
}
