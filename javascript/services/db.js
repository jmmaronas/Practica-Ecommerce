export class User {
    constructor(email, password, addres, municipio, provincia, zip) {
        this.id = User.count++,
            this.addres = addres,
            this.email = email,
            this.municipio = municipio,
            this.password = password,
            this.provincia = provincia,
            this.zip = zip
    }
    static count = 1
}

export const simpsonsArray = [
    {
        id: "1",
        nombre: "Homero Simpson",
        edad: 39,
        ocupacion: "Planta nuclear de Springfield",
        urlImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/1200px-The_Simpsons_yellow_logo.svg.png"
    },
    {
        id: "2",
        nombre: "Marge Simpson",
        edad: 36,
        ocupacion: "Ama de casa",
        urlImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/1200px-The_Simpsons_yellow_logo.svg.png"
    },
    {
        id: "3",
        nombre: "Bart Simpson",
        edad: 10,
        ocupacion: "Estudiante",
        urlImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/1200px-The_Simpsons_yellow_logo.svg.png"
    },
    {
        id: "4",
        nombre: "Lisa Simpson",
        edad: 8,
        ocupacion: "Estudiante",
        urlImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/1200px-The_Simpsons_yellow_logo.svg.png"
    },
    {
        id: "5",
        nombre: "Maggie Simpson",
        edad: 1,
        ocupacion: "Bebé",
        urlImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/1200px-The_Simpsons_yellow_logo.svg.png"
    }
]

export const users = JSON.parse(localStorage.getItem("users")) || []

export const crearBDUsers = () => {
    if (!users.length) {
        const user = new User("test1@admin.com", "123", "123 asdas", "San Miguel", "Buenos Aires", "1663")
        const user2 = new User("test1@test.com", "123", "123 asdas", "San Miguel", "Buenos Aires", "1663")
        users.push(user, user2)
        localStorage.setItem("users", JSON.stringify(users))
    }
}

crearBDUsers()
