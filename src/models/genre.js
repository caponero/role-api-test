const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  name: String,
  description: String,
  movie: [{
    type: Schema.Types.ObjectId,
    ref: 'movie'
  }]
});

const Genre = mongoose.model('genre', genreSchema);
module.exports = Genre;
