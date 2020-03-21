const Movie = require('../models/movie');
const Genre = require('../models/genre');
const Joi = require('joi');

const idSchema = Joi.object().keys({
	movieId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
});

module.exports = {
	index: async (req, res, next) => {
		const movies = await Movie.find({});
		res.status(200).json(movies);
	},

	newMovie: async (req, res, next) => {
		const newMovie = new Movie(req.body);
		const movie = await newMovie.save();
		res.status(201).json(movie);
	},

	getMovie: async (req, res, next) => {
		const { movieId } = req.params;
		const movie = await Movie.findById(movieId);
		res.status(200).json(movie);
	},

	delMovie: async (req, res, next) => {
		const { movieId } = req.params;
		const movie = await Movie.findByIdAndDelete(movieId);
		res.status(200).json(movie);
	},

	/* replaceMovie: async (req, res, next) => {
		const { movieId } = req.params;
		const newMovie = req.body;
		const oldMovie = await Movie.findByIdAndUpdate(movieId, newMovie);
		res.status(200).json({success: true});
	},

	updateMovie: async (req, res, next) => {
		const { movieId } = req.params;
		const newMovie = req.body;
		const oldMovie = await Movie.findByIdAndUpdate(movieId, newMovie);
		res.status(200).json({success: true});
	}, */

	getMovieGenres: async (req, res, next) => {
		const { movieId } = req.params;
		const movie = await Movie.findById(movieId).populate('movies');
		res.status(200).json(movie.genres);
	},

	newMovieGenre: async (req, res, next) => {
		const { movieId } = req.params;
		const newGenre = new Genre(req.body);
		const movie = await Movie.findById(movieId);
		newGenre.movie = movie;
		await newGenre.save();
		movie.genres.push(newGenre);
		await movie.save();
		res.status(201).json(newGenre);
	}
};
