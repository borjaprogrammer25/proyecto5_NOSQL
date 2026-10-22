const express = require("express");
const { connect } = require('./utils/db');

// Importamos el archivo de rutas que acabamos de crear
const movieRouter = require('./routes/movie.routes'); //./routes/movie.routes

connect();

const PORT = 3001;
const server = express();

// Middlewares globales
server.use(express.json());

// Conectamos el módulo de rutas al servidor para la raíz '/'
server.use('/movies', movieRouter);

// Ruta de prueba directa en el servidor
server.use("/saludar", (req, res) => {
    return res.status(200).json("Hola");
});

// Ruta de prueba directa en el servidor
server.use((req, res) => {
    return res.status(404).json({message: "Ruta NO encontrada"});
});

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
