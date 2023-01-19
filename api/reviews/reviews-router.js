const router = require("express").Router();
const Review = require('./reviews-model');

router.get('/', async (req, res) => {
    const result = await Review.getAll();
    res.json(result);
});

router.get('/:review_id', async (req, res) => {
    const {review_id} = req.params;
    const result = await Review.getOne(review_id);
    res.json(result);
});

router.put("/", async (req, res) => {
    const review = req.body;
    res.json(review);
})

router.post('/', async(req, res) => {
    const review = req.body;
    try{
        await Review.create(review).then((review) => res.status(200).json({message: "Review Created", review: review}))
    } catch(e){
        console.error(e);
        res.status(500).json({message: e.message, note: "no return"})
    }
});

module.exports = router;