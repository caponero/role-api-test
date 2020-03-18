const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
	name: String,
	description: String,
	release_date: Date,
	genres: [{
		type: Schema.Types.ObjectId,
		ref: 'genre'
	}],
	duration: String,
	rating: Number
});

const Movie = mongoose.model('movie', movieSchema);
module.exports = Movie;
