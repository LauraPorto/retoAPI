class Storage {

    state = [];

    constructor() {
        console.log("Se ha creado una instancia de Store");

    };

    async set(object) {
        this.state.push(object);
        return this.state.length;
    };

    async get() {
        return this.state.slice(-10);
        //el método .slice selecciona los últimos diez elementos marcando el número como negativo 
    };
};


//Exportación de la clase
//export default Simulator;
module.exports = Storage;