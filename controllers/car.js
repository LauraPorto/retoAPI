const Store = require('../state');
//Se importa la clase Store (por eso se escribe la variable en la que la guardamos en mayúscula, si fuera una instancia sería minúscula). Se hace el require para traerlo poniendo la ruta del archivo.


class Car {

    store;

    constructor() {
        this.store = new Store();
    }

}

let carController = new Car();
module.exports = carController;