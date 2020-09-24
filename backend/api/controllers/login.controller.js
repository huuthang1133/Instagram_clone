const User = require('../models/user.model');

const jwt = require('jsonwebtoken');

module.exports.index = async function(req, res){
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  jwt.verify(token, 'iabsgasfgbasfg', (err, user) => {
    if(err) return res.sendStatus(401)
    res.json(user)
  })
}

module.exports.postLogin = async function(req, res){
  const { email, password } = req.body
  console.log(req.body)
  var user = await User.find({email, password});
  console.log(user)
  if(user.length){
    const user = email;
    console.log(user)
    const accessToken = jwt.sign(user, 'iabsgasfgbasfg');
    res.json({user, accessToken});
  }
  else { res.json(false) } 
}