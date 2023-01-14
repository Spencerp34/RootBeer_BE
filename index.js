require("dotenv").config();
const express = require('express')

const server = express();
const port = process.env.PORT || 3000;

server.use(express.json())

const reviewsRouter = require('./api/reviews/reviews-router')

server.use("/reviews", reviewsRouter)

server.get("/", (req, res) => {
    res.send("Welcome to the Root Beer Reviews API")
})

server.use((err, req, res) => { 
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    });
});

server.listen(port, () => {
    console.log(`Server listening at port ${port}`)
})