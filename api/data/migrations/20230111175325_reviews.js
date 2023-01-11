exports.up = function(knex) {
    return knex.schema.createTable('reviews', (table) => {
        table.increments('review_id');
        table.string('brand_name', 50).notNullable();
        table.float("author_review").unsigned();
        table.float("consumer_review").unsigned();
        table.string("img_url");
        table.string("shop_url");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('reviews');
};
