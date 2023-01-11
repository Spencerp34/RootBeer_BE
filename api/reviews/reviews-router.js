const router = require("express").Router();
const Review = require('./reviews-model');

router.get('/', (req, res) => {
    res.send("Hello from Reviews")
})

module.exports = router;