const { response } = require('express');
const MovieModel = require('../models/MovieModel');
const Movie2Model = require('../models/Movie2Model');
const AllMoviesModel = require('../models/AllMoviesModel');
const upComingModel = require('../models/Coming');
const MovieController = {
    getMovieList: async (request, response) => {
        let result = await MovieModel.find()
        response.send({
            status: true,
            result
        })
    },
    getMovieList2: async (request, response) => {
        let result = await Movie2Model.find()
        response.send({
            status: true,
            result
        })
    },
    getAllMovie: async (request, response) => {
        let { m_id } = request.params;
        let result = await AllMoviesModel.findOne({ _id: m_id })
        response.send({
            call: true,
            result
        })
    },
    getAllMovieList: async (request, response) => {
        let result = await AllMoviesModel.find()
        response.send({
            status: true,
            result
        })
    },
    comingSoon: async (request, response) => {
        let result = await upComingModel.find()
        response.send({
            call: true,
            result
        })
    },
    search: async (request, response) => {
        let { s_id } = request.params;;
        let result = await AllMoviesModel.findOne({ movie: s_id })
        response.send({
            call: true,
            result
        })
    }



}

module.exports = MovieController;