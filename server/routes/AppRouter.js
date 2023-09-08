const AppRouter = require('express').Router();
const MovieController = require('../Controller/MovieController');

AppRouter.get('/movie-list', MovieController.getMovieList);
AppRouter.get('/movie-list-2', MovieController.getMovieList2);
AppRouter.get('/single-movies-list/:m_id', MovieController.getAllMovie)
AppRouter.get('/all-movies-list', MovieController.getAllMovieList)
AppRouter.get('/coming-soon', MovieController.comingSoon)
AppRouter.get('/Search/:s_id', MovieController.search)



module.exports = AppRouter;