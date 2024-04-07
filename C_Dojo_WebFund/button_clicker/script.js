let goAway = (el) => {
    el.remove()
}
let ninjaAlert = () => {
    alert('I just hacked you bro')
}
let logOut = (el) => {
    if (el.innerText === 'Log in') {
    el.innerText = 'Log out' 
    } else { el.innerText = 'Log in' }
}