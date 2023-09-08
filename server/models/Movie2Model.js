const mongoose = require('mongoose');

const movie2Schema = new mongoose.Schema({
    movie_id: { type: Number },
    movie: { type: String },
    year: { type: Number },
    description: { type: String },
    rating: { type: Number },
})
const Movie2Model = mongoose.model('movie2', movie2Schema, 'movies2')
module.exports = Movie2Model;