const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

/* En este caso, el require no necesita que le indiquemos la ruta porque forma parte de una librería y ya lo reconoce. Cualquier archivo que queramos importar de nuestra creación, sí tendríamos que indicarle la ruta para que lo lea */