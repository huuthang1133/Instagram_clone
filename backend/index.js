require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

var cors = require('cors')

const app = express()
app.use(cors())

mongoose.connect(process.env.MONGOOSE_URL, {useNewUrlParser: true,
    useUnifiedTopology: true})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const port = process.env.PORT || 3000

let userRoute = require('./api/routes/user.route')
let loginRoute = require('./api/routes/login.route')
let postRoute = require('./api/routes/post.route')

//Handling CORS (Cross Origin Resource Sharing)
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Accept, Content-Type, Authorization')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE')
    next()
})

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/login', loginRoute)
app.use('/users', userRoute)
app.use('/posts', postRoute)

// Handling Errors
app.use((req,res,next)=>{
    const error = new Error('Not Found!');
    error.status =  404;
    next(error)
})
app.use((error, req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
})



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))