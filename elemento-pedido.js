export default class ElementoPedido{
    /**
     * 
     * @param {Producto} producto Objeto producto
     * @param {number} cantidad Cantidad de productos
     */
    constructor(producto,cantidad){
        this._producto=producto;
        this._cantidad=cantidad;
    }
    getDescripcion(){
        var costo=this._producto._precio._valor;
        var total = costo*this._cantidad;
        var descripcion =`${this._cantidad} x ${this._producto._nombre} $${total}`;
        return descripcion;
    }
}
