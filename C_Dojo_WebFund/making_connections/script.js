let nameChange = (el) => {
    el.innerText = 'Rock on!!!'
}

let goAway = (el) => {
    el.remove()
}

let increase = (el) => {
    el.innerText++
}

let decrease = (el) => {
    el.innerText--
}

let logInOut = (el) => {
    if (el.innerText === 'Sign Out') {
        el.innerText = 'Sign in' 
    } else {
        el.innerText = 'Sign Out'
    }
}
    