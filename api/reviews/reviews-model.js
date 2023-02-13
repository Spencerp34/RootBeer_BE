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
    const newData = {
        ...review,
        review_image: req.file.path || null,
    }

    return await db('reviews').insert(newData).returning("*");
};

async function remove(id){
    return await db('reviews').where("review_id", id).del();
};

async function update(id, review){
    console.log(id, review)
    return  await db('reviews')
      .where("review_id", id)
      .first()
      .update(review)
      .returning('*')
};

module.exports={
    getAll,
    getOne,
    create,
    remove,
    update,
}