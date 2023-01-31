const router = require("express").Router();
const Review = require('./reviews-model');
const multer = require("multer")
const upload = multer({dest: "uploads/"})

router.get('/', async (req, res) => {
    const result = await Review.getAll();
    res.json(result);
});

router.get('/:review_id', async (req, res) => {
    const {review_id} = req.params;
    const result = await Review.getOne(review_id);
    res.json(result);
});

router.post('/', upload.single("review_img"), async(req, res) => {
    const review = req.body;
    try{
        await Review.create(review).then((review) => res.status(200).json({message: "Review Created", review: review}))
    } catch(e){
        console.error(e);
        res.status(500).json({message: e.message, note: "no return"})
    }
});

router.put("/", upload.single("review_img"), async (req, res) => {
    const review = req.body;
    const {review_id} = review;

    console.log("review ID:", review_id)
    if(review){
        Review.getOne(review_id)
            .then(
                Review.update(review_id, review)
                    .then((updated) => {
                        res.status(200).json({message: "Review Updated", review: updated[0]})
                    })
                    .catch((err) => {
                        res.status(500).json({
                          message: `Could not update review '${review_id}'`,
                          error: err.message,
                        });
                    })
            )
            .catch((err) => {
                res.status(404).json({
                  message: `Could not find profile '${review_id}'`,
                  error: err.message,
                });
            });
    }
    res.status(401);
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    try {
      Review.getOne(id).then((review) => {
        Review.remove(id).then(() => {
          res
            .status(200)
            .json({ message: `review '${id}' was deleted.`, review: review });
        });
      });
    } catch (err) {
      res.status(500).json({
        message: `Could not delete review with ID: ${id}`,
        error: err.message,
      });
    }
});


module.exports = router;