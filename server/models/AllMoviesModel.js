const mongoose = require('mongoose');

const allMoviesSchema = new mongoose.Schema({
    movie_id: { type: Number },
    movie: { type: String },
    year: { type: Number },
    starring: { type: Array },
    cast: { type: Array },
    description: { type: String },
    rating: { type: Number },
    image: { type: String }
})
const AllMoviesModel = mongoose.model('allmovie', allMoviesSchema, 'allmovies')
module.exports = AllMoviesModel;