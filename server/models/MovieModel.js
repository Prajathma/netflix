const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    movie_id: { type: Number },
    movie: { type: String },
    year: { type: Number },
    starring: { type: Array },
    cast: { type: Array },
    description: { type: String },
    rating: { type: Number },
})
const MovieModel = mongoose.model('movie', movieSchema, 'movies')
module.exports = MovieModel;