const db = require('../data/dbconfig');

async function getAll(){
    const allResults = await db('reviews').select('*');
    return allResults;
};

async function getOne(review_id){
    const result = await db('reviews').where('review_id', review_id).select('*').first();
    return result;
};

async function create(review){
    return await db('reviews').insert(review).returning("*");
};

async function remove(id){
    return await db('reviews').where({ id }).del();
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