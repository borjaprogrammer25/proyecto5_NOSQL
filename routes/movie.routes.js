const express = require("express");
const movieRouter = express.Router();
const { getMovies, getMovieById, getMovieByTitle, getMovieByGenre, getMovieByYear, createMovie, updateMovie, deleteMovie } 
    = require('../controllers/movies.controllers'); //../controllers/movies.controllers
//Definimos las rutas del router en /movies
movieRouter.get("/", getMovies);
movieRouter.get("/id/:id", getMovieById);
movieRouter.get("/title/:title", getMovieByTitle);
movieRouter.get("/genre/:genre", getMovieByGenre);
movieRouter.get("/year/:year", getMovieByYear);
movieRouter.post("/", createMovie);
movieRouter.delete("/:id", deleteMovie);
movieRouter.put("/:id", updateMovie);

module.exports = movieRouter;