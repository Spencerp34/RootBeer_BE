const router = require("express").Router();
const Review = require('./reviews-model');

router.get('/', async (req, res) => {
    const result = await Review.getAll()
    res.json(result)
})

router.get('/:review_id', async (req, res) => {
    const {review_id} = req.params
    const result = await Review.getOne(review_id)
    res.json(result)
}) 

module.exports = router;