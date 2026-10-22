const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GENRES = ["Acción", "Animación", "Ciencia ficción", "Comedia romántica", "Comedia"];

const movieSchema = new Schema(
  {
    title: { type:String, required: true, trim:true },
    director: { type: String, required: true },
    year: { type:Number, required: true, min: 1931, max: 2031 },
    genre: { type:String, required:true, enum:GENRES },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;