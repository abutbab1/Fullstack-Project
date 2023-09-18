const express = require("express")
const router = express.Router()


// routes related to the user
router.get('/',(req,res) => {
    res.send("Mini router")
})

router.get('/new',(req,res) => {
    res.send("New mini router")
})


router.post('/users',(req,res) => {
    res.send("Create user")
})


// get any route that starts of /users 

router
.route("/:id")
.get((req,res) => {
    res.send(`Get user with id ${req.params.id}`)
})
.put((req,res) => {
    res.send(`Update user with id ${req.params.id}`)
})
.delete((req,res) => {
    res.send(`Delete user with id ${req.params.id}`)
})

// const users = [{name : "Kyle"},{name : "Sally"}]

// middlewear function
/* router.param("id",(req,res,next,id) => {
    req.user = users[id]
    next()
})
*/


module.exports = router