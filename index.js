const express = require('express')

const server = express();
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server listening at port ${port}`)
})