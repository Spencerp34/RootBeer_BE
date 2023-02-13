require("dotenv").config();

const helmet = require('helmet');
const cors = require('cors');
const express = require('express');
const server = express();
const port = process.env.PORT || 3000;

const reviewsRouter = require('./api/reviews/reviews-router');

server.use(cors());
server.use(helmet());
server.use(express.static("uploads"));

server.use("/reviews", reviewsRouter);

server.get("/", (req, res) => {
    res.send("Welcome to the Root Beer Reviews API");
});

server.use((err, req, res) => { 
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    });
});

server.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});