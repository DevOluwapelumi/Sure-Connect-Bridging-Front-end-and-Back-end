const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

const userRoute = require('./routes/user.route')
app.use("/user")

app.listen(PORT, () => {
    console.log(`Port started-up at ${PORT}`);
})
