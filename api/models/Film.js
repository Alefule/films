const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    titulo: {
        type: String, 
        required: true
    },
    likes: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('film',FilmSchema);


