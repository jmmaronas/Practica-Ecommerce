import { users } from "./db.js"

export const login = (user) => {
    if (users.some(({ email, password }) => email === user.email && password === user.password)) {
        let userLoged = { ...users.find(({ email }) => email === user.email) }
        localStorage.setItem("userLoged", JSON.stringify(userLoged))
        alert("acceso correcto")
        btnLoginState()
    } else {
        alert("erro de usuario o contraseña")
    }
}

export const logout = () => {
    localStorage.removeItem("userLoged")
    document.getElementById("navLogin").innerHTML = `
                        <a href="./pages/login.html" class="btn btn-outline-secondary">Sign In</a>
                        <a href="./pages/register.html" class="btn btn-secondary">Sign Up</a>
                `
}

export const btnLoginState = () => {
    const userLoged = JSON.parse(localStorage.getItem("userLoged"))
    if (userLoged) {
        document.getElementById("navLogin").innerHTML = `
                <p>${userLoged.email}</p>
                <button id="btnLogout" href="/" class="btn btn-outline-danger">Logout</button>
            `
        const btnLogout= document.getElementById("btnLogout").addEventListener("click", logout)
    }
}