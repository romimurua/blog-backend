const express = require("express");
const postRouter = require("./posts/posts.router");
const db = require("./utils/database");
const app = express();

app.use(express.json());

// Muestra en cosola de manera informativa si la conexión se hizo de manera correcta (con .then y .catch)
db.authenticate()
    .then(() => {
        console.log("The database has been successfully authenticated");
    })
    .catch((err) => {
        console.log(err); // Errores de autenticación (contraseña, usuarios o hosts)
    });

//Sincroniza nuesta base de datos con los modelos que tenemos definidos (Es la manera en la que crearemos las tablas)
db.sync()
    .then(() => {
        console.log("The database has been successfully synchronized");
    })
    .catch((err) => {
        console.log(err); // Error en las tablas, propiedades, etc.
    });

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Server Ok!",
        //routes: {
            //posts: "http://localhost:9000/api/v1/posts",
        //},
    });
});

app.use('/api/v1', postRouter);

app.listen(9000, () => {
    console.log("Server started at: http://localhost:9000");
});

module.exports = app;