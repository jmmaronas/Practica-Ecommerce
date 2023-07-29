import { simpsonsArray } from "./db.js";

export let carrito = JSON.parse(localStorage.getItem("carrito")) || []

export function mostrartCarrito() {
    const tablaCarrito = document.getElementById("tablaCarrito")
    tablaCarrito.innerHTML = ""
    carrito.forEach(element => {
        const tr = document.createElement("tr")
        tr.innerHTML = `
            <td>${element.cantidad}</td>
            <td>${element.nombre}</td>
            <td>${element.edad}</td>    
            <td>$ ${element.cantidad * element.edad}</td>
            <td><button id="btnQuitar${element.id}" class="btn btn-danger text-white">X</td>
        `
        tablaCarrito.append(tr)
        document.getElementById(`btnQuitar${element.id}`).addEventListener("click", (e) => quitarDelCarrito(e, element.id))
    });
    agregarTotal()
}

export function agregarCarrito(id) {
    if (carrito.some(e => e.id === id)) {
        const index = carrito.findIndex(e => e.id === id)
        carrito[index].cantidad++
    } else {
        const personajeSeleccionado = simpsonsArray.find(personaje => personaje.id === id)
        carrito.push({ ...personajeSeleccionado, cantidad: 1 })
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    cantidadProductosCarrito()
}

export const quitarDelCarrito = (evento, productoId) => {
    carrito = carrito.filter(producto => producto.id !== productoId)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    evento.target.parentNode.parentNode.remove()
    cantidadProductosCarrito()
}

export const cantidadProductosCarrito = () => {
    const cantidadCarrito = document.getElementById("cantidadCarrito")
    cantidadCarrito.innerHTML = carrito.reduce((acc, producto) => acc + producto.cantidad, 0)
}

export const agregarTotal = () => {
    totalCarrito.innerHTML = `$ ${carrito.reduce((acc, producto) => acc + producto.cantidad * producto.edad, 0)}`
}

export const eliminarCompra = () => {
    localStorage.clear()
    carrito = []
    mostrartCarrito()
    cantidadProductosCarrito()
}

