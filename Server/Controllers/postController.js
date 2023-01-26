const Post = require('../Models/post');
const moment = require('moment')

const createPost = async(req,res) => {
    console.log(req.body);
    try {
        const date = new Date();
        const formatedDate = moment(date).format('MM/DD/YYYY');
        const time = moment(date, "HH:mm:ss").format("hh:mm A");
        const post = new Post({
            title: req.body.title,
            date: formatedDate,
            time,
            image: req.file.filename,
         })
         const postData = await post.save();

         res.status(200).json(postData);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const getPost = async(req, res) => {
    try {
       const posts = await Post.find({})
       console.log(posts);
       res.status(200).json(posts);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
}
module.exports = {
    createPost,
    getPost
}