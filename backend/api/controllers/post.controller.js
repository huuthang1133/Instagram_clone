require('dotenv').config()

const Post = require('../models/post.model')

const User = require('../models/user.model')

const cloudinary = require('cloudinary').v2;

const fs = require('fs')

cloudinary.config({ 
  cloud_name:  process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});

module.exports.getPost = (req, res) => {
    Post.find()
    .exec()
    .then(docs =>{
        res.status(200).json(docs)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        })
    })      
}

module.exports.addComment = async (req, res) => {
	
	const { email, content } = req.body
	const id = req.params.postId
	const post = await Post.findById(id)
	const user = await User.find({email})

	const comment = {
		content,
		user: user[0]
	}
	console.log(post, user, comment)
	post.comments.push(comment)

	Post.update({_id: id}, post, (doc, err) => { })

	res.json(comment)	
}

module.exports.addReaction = async (req, res) => {
	const { email, like } = req.body
	const id = req.params.postId
	const post = await Post.findById(id)
	const user = await User.find({email})
	const found = post.reactions.find(reaction => reaction.user.email === email);
	if(found){
		const index = post.reactions.indexOf(found);
		post.reactions[index].like = req.body.like
		Post.updateOne({_id: post._id}, post, (doc, err) => { 
		})
	} else {
		const reaction = {
			like,
			user: user[0]
		}
		post.reactions.push(reaction)
		Post.update({_id: id}, post, (doc, err) => { })		
	}
	res.json(post)
	
}

module.exports.postPost = async (req, res ) => {
	const { caption, email } = req.body

	const user = await User.find({email})

    if(req.file){
    cloudinary.uploader.upload(req.file.path, function(error, result) {
        const imageUrl = result.url;
        const post = new Post ({
        	caption,
        	imageUrl,
        	user: user[0]
        })
        post.save()
	    .then(result=>{
	        res.status(201).json(result)
	    })
	    .catch(err=>{
	        console.log(err);
	        res.status(500).json({
	            error: err
	        })
	    })        
    })
        fs.unlink(req.file.path, (err) => {
            if(err){
                console.log(err)
                return
            }
        })
    };	
}