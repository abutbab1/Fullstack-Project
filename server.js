const express = require('express')
const app = express()

app.set("view engine", "pug")

app.get("/",logger,(req,res) => {
    console.log("Hello")
    res.render("index")
})

const userRouter = require('./routes/users')


//the default route for users
app.use('/users', userRouter)

function logger(req,res,next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)