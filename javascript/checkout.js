
import { mostrartCarrito, cantidadProductosCarrito } from "./services/cart_service.js"
import { generarCompra } from "./services/checkou_service.js"
import { btnLoginState } from "./services/login_service.js"

const selectProvincias = document.getElementById("selectProvincias")
const selectMunicipios = document.getElementById("selectMunicipios")

const formSignIn = document.getElementById("formSignIn")
const inputs = formSignIn.getElementsByTagName("input")
const btnVaciarCarrito = document.getElementById("btnVaciarCarrito")
const userLoged = JSON.parse(localStorage.getItem("userLoged"))

mostrartCarrito()
cantidadProductosCarrito()
btnLoginState()       

if (userLoged) {
    for (let input of inputs) {
        input.value = userLoged[input.name]
        input.disabled = true
    }
    selectProvincias.innerHTML = `<option value=${userLoged.provincia}>${userLoged.provincia}</option>`
    selectMunicipios.innerHTML = `<option value=${userLoged.municipio}>${userLoged.municipio}</option>`
    selectProvincias.disabled=true
    selectMunicipios.disabled=true
}

btnVaciarCarrito.addEventListener("click", () => {
    window.location = "../index.html"
})

formSignIn.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(generarCompra())
    // let carrito = JSON.parse(localStorage.getItem("carrito")) || []
    // const total = carrito.reduce((acc, product) => acc + (product.edad * product.cantidad), 0)
    // const numeroPedido = makeRandomId(8)
    // console.log(total, numeroPedido)
    // Swal.fire(`Gracias por su Compra \n
    // Total : $ ${total}, \n
    // Pedido: ${numeroPedido}
    // `)
    //window.location="./snippet.html"    
})