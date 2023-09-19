const express = require('express')
const { getUserLandingPage } = require('../controllers/user.controller')
const router = express.Router()

router.get("/", (req,res)=>{
    res.send("Hello, We don connect")
})

module.exports = router;