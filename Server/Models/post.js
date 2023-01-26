const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String
        },
        date: {
             type: String,
        },
        time: {
             type: String
        },
        image: {
            type:String
        }
    }
);

module.exports = mongoose.model('post', postSchema);