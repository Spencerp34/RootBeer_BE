const db = require('../data/dbconfig');

async function getAll(){
    const allResults = await db('reviews').select('*');
    return allResults;
};

async function getOne(dish_id){
    const result = await db('reviews').where('review_id', dish_id).select('*').first();
    return result;
};

async function create(review){
    return db('reviews').insert(review).returning("*");
};

async function remove(id){
    return await db('reviews').where({ id }).del();
};

const update = (id, profile) => {
    return db('reviews')
      .where({ id: id })
      .first()
      .update(profile)
      .returning('*')
};

module.exports={
    getAll,
    getOne,
    create,
    remove,
    update,
}