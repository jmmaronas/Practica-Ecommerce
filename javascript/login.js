import { btnLoginState, login } from "./services/login_service.js";
import { cantidadProductosCarrito } from "./services/cart_service.js";

const loginForm = document.getElementById("loginForm")
const inputs = loginForm.getElementsByTagName("input")
const user = {}

cantidadProductosCarrito()
btnLoginState()       

for (let input of inputs) {
    input.addEventListener("input", ({ target }) => {
        user[target.name] = target.value
    })
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    login(user)
})

