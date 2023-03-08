const db = require('../data/dbconfig');

async function getAll(){
    const allResults = await db('reviews').select('*');
    return allResults;
};

async function getOne(review_id){
    const result = await db('reviews').where('review_id', review_id).select('*').first();
    return result;
};

async function create(review, req){
    let newData = review
    if(req.file){
        newData = {
            ...review,
            review_img: req.file.path,
        }
    }
    return await db('reviews').insert(newData).returning("*");
};

async function remove(id){
    return await db('reviews').where("review_id", id).del();
};

async function update(id, review, req){
    let newData = review
    if(req.file){
        newData = {
            ...review,
            review_img: req.file.path,
        }
    }
    return  await db('reviews')
      .where("review_id", id)
      .first()
      .update(newData)
      .returning('*')
};

module.exports={
    getAll,
    getOne,
    create,
    remove,
    update,
}