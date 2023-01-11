const db = require('../data/dbconfig');

async function getAll(){
    const allResults = await db('reviews').select('*')
    return allResults
}

async function getOne(dish_id){
    const result = await db('reviews').where('review_id', dish_id).select('*').first()
    return result
}


module.exports={
    getAll,
    getOne,
}