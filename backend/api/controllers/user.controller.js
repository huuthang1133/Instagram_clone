const User = require('../models/user.model')

module.exports.createUser = (req, res)=>{
    const { email, password, username } = req.body
    console.log(req.body)
    const user = new User({
        email,
        password, 
        name: username
    })
    user.save()
    .then(result=>{
        res.status(201).json(result)
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })

}

module.exports.getAll = (req, res) => {
    User.find()
    .exec()
    .then(docs =>{
        console.log(docs)
        res.status(200).json(docs)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        })
    })      
}

module.exports.getUser = async (req, res) => {
    const { email } = req.body
    const user = await User.find({ email })
    res.json(user[0])
}