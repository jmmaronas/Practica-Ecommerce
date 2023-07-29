import { cantidadProductosCarrito, mostrartCarrito } from "./services/cart_service.js"
import { btnLoginState } from "./services/login_service.js"

const btnVaciarCarrito = document.getElementById("btnVaciarCarrito")

cantidadProductosCarrito()
mostrartCarrito()
btnLoginState()       

btnComprar.addEventListener("click", () => {
    window.location = "./checkout.html"
})
