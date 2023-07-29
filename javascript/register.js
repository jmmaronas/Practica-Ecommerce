import { users, User } from "./services/db.js"
import { cantidadProductosCarrito } from "./services/cart_service.js"
import { getMunicipios, getProvincias, pintarMunicipios } from "./services/register_service.js"
import { btnLoginState } from "./services/login_service.js"

const contenedorCarrito = document.getElementById("contenedorCarrito")
const selectProvincias = document.getElementById("selectProvincias")
const selectMunicipios = document.getElementById("selectMunicipios")
const formSignIn = document.getElementById("formSignIn")
const inputs = formSignIn.getElementsByTagName("input")
const userLoged = JSON.parse(localStorage.getItem("userLoged"))
const user = {}

getProvincias()
cantidadProductosCarrito()
btnLoginState()

if (userLoged) {
    for (let input of inputs) {
        input.value = userLoged[input.name]
    }
    selectProvincias.innerHTML = `<option value=${userLoged.provincia}>${userLoged.provincia}</option>`
    pintarMunicipios()
    selectMunicipios.innerHTML += `<option value=${userLoged.municipio} selected>${userLoged.municipio}</option>`
}

btnCarrito.addEventListener("click", () => {
    contenedorCarrito.classList.toggle("d-none")
})


for (let input of inputs) {
    input.addEventListener("input", ({ target }) => {
        user[target.name] = target.value
    })
}

selectProvincias.addEventListener("change", async (e) => {
    pintarMunicipios()
})

formSignIn.addEventListener("submit", async (e) => {
    e.preventDefault()
    if (users.some(({ email }) => email === user.email)) {
        alert("El usuario ya existe")
        location.href="./login.html"
    } else {
        const provincias = await getProvincias()
        const provincia = provincias.find(provincia => provincia.id === selectProvincias.value)?.nombre
        const municipios = await getMunicipios(selectProvincias.value)
        const municipio = municipios.find(municipio => municipio.id === selectMunicipios.value)?.nombre
        users.push(new User(user.email, user.password, user.addres, municipio, provincia, user.zip))
        localStorage.setItem("users", JSON.stringify(users))
        alert("Usuario generado con exito")
        location.href = "/"
    }
})

