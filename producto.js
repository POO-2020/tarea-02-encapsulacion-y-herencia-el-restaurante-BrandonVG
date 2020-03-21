import Precio from "./precio.js";
export default class Producto{
    /**
     * 
     * @param {string} nombre Nombre del producto
     * @param {Precio} precio Objeto precio
     */
    constructor(nombre,precio){
        this._nombre= nombre;
        this._precio=precio;
    }
    getDescripcion(){
        return(`${this._nombre} ${this._precio.getPrecio()}`);
    }
}
/*
var jabon= new Producto("Jabon Ariel",new Precio(50));
console.log(jabon.getDescripcion());
*/