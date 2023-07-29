import { carrito } from "./cart_service.js";

export class Compra {
    constructor(userId, prodcutos) {
        this.id = Compra.makeRandomId(10),
            this.userId = userId,
            this.prodcutos = prodcutos
    }

    static makeRandomId = (length) => {
        let result = ''
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result + Math.round(Math.random() * (9, 1) + 1)
    }

}

export const generarCompra = () => {
    const { id } = JSON.parse(localStorage.getItem("userLoged"))
    const compra= new Compra(id, carrito)    
    return compra
}