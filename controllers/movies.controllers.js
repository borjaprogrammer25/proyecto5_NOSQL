// Importamos el modelo necesario para las consultas
const Movie = require('../models/Movie'); //../models/Movie

// Obtener todas las películas
const getMovies = async (req, res) => { // /movies
    try {
        const movies = await Movie.find();
        return res.status(200).json(movies);
    } catch (error) {
        return res.status(500).json({message: "Error obteniendo todas las peliculas", error: error.message});
    }
};

// Obtener película por ID
const getMovieById = async (req, res) => { // /movies/id/:id
    const { id } = req.params;
    try {
        const movie = await Movie.findById(id);
        if (movie) {
            return res.status(200).json(movie);
        } else {
            return res.status(404).json('No encontramos la pelicula por Id');
        }
    } catch (error) {
        return res.status(500).json({message: "Error al obtener pelicula by Id", error: error.message});
    }
};

// Obtener películas por título
const getMovieByTitle = async (req, res) => { ///movies/title/:title
    const { title } = req.params;
    try {
        const movieByTitle = await Movie.find({ title });
        return res.status(200).json(movieByTitle);
    } catch (error) {
        return res.status(500).json({message: "Error al obtener pelicula by Titulo", error: error.message});
    }
};

// Obtener películas por género
const getMovieByGenre = async (req, res) => { ///movies/genre/:genre
    const { genre } = req.params;
    try {
        const movieByGenre = await Movie.find({ genre });
        return res.status(200).json(movieByGenre);
    } catch (error) {
        return res.status(500).json({message: "Error al obtener pelicula by Genero", error: error.message});
    }
};

// Obtener películas por año (mayores que el año enviado)
const getMovieByYear = async (req, res) => { ///movies/year/:year
    const { year } = req.params;
    try {
        const movieByYear = await Movie.find({ year: { $gt: year } });
        return res.status(200).json(movieByYear);
    } catch (error) {
        return res.status(500).json({message: "Error al obtener pelicula by Year", error: error.message});
    }
};

//Crear pelicula
const createMovie = async(req, res) => {
    try {
        const newMovie = new Movie(req.body);
        await newMovie.save();
        return res.status(201).json(newMovie);
    } catch (error) {
        return res.status(500).json({message: "Error al crear una nueva pelicula", error: error.message});
    }
};

//Actualiza una pelicuda existente
const updateMovie = async(req, res) => {
    try {
        const updated = await Movie.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if(!updated){
        return res.status(404).json({ error: "Película no encontrada" });
    }
    return res.status(200).json(updated);    
    } catch (error) {
        return res.status(400).json({error: "Error al actualizar la película",detalles: error.message,});
    }
};

//borrar pelicula por ID
const deleteMovie = async(req, res) => {
    try {
    const deleted = await Movie.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Película no encontrada" });
    }
    res.status(200).json({ mensaje: "Película eliminada correctamente" });
  } catch (error) {
    return res.status(400).json({
      error: "Error al eliminar la película",
      detalles: error.message,
    });
  }
};

// Exportamos el enrutador para que el servidor lo use
module.exports = {getMovies, getMovieById, getMovieByTitle, getMovieByGenre, getMovieByYear, createMovie, deleteMovie, updateMovie};