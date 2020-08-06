const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    //@key: is the column name
    //@json: is the details of that column
    name: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

//.model()
//1. the collection name in db
//2. the schema which is associated with it
module.exports = mongoose.model('todos', TodoSchema);