export default class Direccion{
    /**
     * 
     * @param {string} calle 
     * @param {number} numeroExterior 
     * @param {number} numeroInterior 
     * @param {string} colonia 
     * @param {number} codigoPostal 
     * @param {string} ciudad 
     * @param {string} municipio 
     */
    constructor(calle,numeroExterior,numeroInterior,colonia,codigoPostal,ciudad,municipio){
        this._calle= calle;
        this._numeroExterior=numeroExterior;
        this._numeroInterior= numeroInterior;
        this._colonia= colonia;
        this._codigoPostal=codigoPostal;
        this._ciudad=ciudad;
        this._municipio=municipio;
    }
    getFormatoCorto(){
        return (`Calle ${this._calle} #${this._numeroExterior}`);
    }
    getFormatoExtendido(){
        if (this._numeroInterior==0){
            return(`Calle ${this._calle} #${this._numeroExterior} Colonia: ${this._colonia} CP: ${this._codigoPostal} Ciudad:${this._ciudad} municipio: ${this._municipio}`);
        }
        else{
            return(`Calle ${this._calle} #${this._numeroExterior} interior: ${this._numeroInterior} Colonia: ${this._colonia} CP: ${this._codigoPostal} Ciudad:${this._ciudad} municipio: ${this._municipio}`);
        }
    }
}
/*
var direccion1= new Direccion("Gran Higuera",441,6,"Buena vista",28984,"Villa de Alvarez","Villa de Alvarez");
console.log(direccion1.getFormatoCorto());
*/