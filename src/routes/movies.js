const express = require('express');
const router = require('express-promise-router')();

// const { validateParam } = require('../helpers/routeshelpers');

const MovieController = require('../controllers/movies');

router.route('/')
	.get(MovieController.index)
	.post(MovieController.newMovie)

router.route('/:movieId')
	.get(MovieController.getMovie)
	.delete(MovieController.delMovie)
	
	//.put(MovieController.replaceMovie)
	//.patch(MovieController.updateMovie)

router.route('/:movieId/genre')
	.get(MovieController.getMovieGenres)
	.post(MovieController.newMovieGenre)
	

module.exports = router;
