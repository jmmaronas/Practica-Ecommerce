//const fs = require("fs")
import { cantidadProductosCarrito, agregarCarrito } from "./services/cart_service.js"
import { crearBDUsers, simpsonsArray } from "./services/db.js"
import { btnLoginState } from "./services/login_service.js"

const contenedorPersonajes = document.getElementById("contenedorPersonajes")
const contenedorProductos = document.getElementById("contenedorProductos")
const btnCarrito = document.getElementById("btnCarrito")
const inputSearch = document.getElementById("inputSearch")

function pintarPersonajes(arrayPersonajes) {
    contenedorPersonajes.innerHTML = ""
    for (const personaje of arrayPersonajes) {
        const div = document.createElement("div")
        div.className = "card"
        div.style = "width: 18rem;"
        div.innerHTML = `
            <img src=${personaje.urlImg} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${personaje.nombre}</h5>
                <p class="card-text">${personaje.ocupacion}</p>
                <h3>Precio/Edad: ${personaje.edad}</h3>
                <button id="btn${personaje.id}" class="btn btn-primary">Seleccionar</button>
            </div>
        `
        contenedorPersonajes.append(div)

        document.getElementById("btn" + personaje.id).addEventListener("click", (e) => {
            agregarCarrito(personaje.id)
        })
    }
}

function busqueda(array, valor) {
    return array.filter(personaje => personaje.nombre.toLowerCase().includes(valor.toLowerCase()))
}


pintarPersonajes(simpsonsArray)
cantidadProductosCarrito()
crearBDUsers()
btnLoginState()       

// btnCarrito.addEventListener("click", () => {
//     contenedorCarrito.classList.toggle("d-none")
//     contenedorProductos.classList.toggle("col-12")
// })

inputSearch.addEventListener("input", (e) => {
    const productosEncontrados = busqueda(simpsonsArray, e.target.value)
    pintarPersonajes(productosEncontrados)
})

