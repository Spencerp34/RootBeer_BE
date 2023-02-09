exports.up = function(knex) {
    return knex.schema.createTable('reviews', (table) => {
        table.increments('review_id');
        table.string('brand_name', 50).notNullable();
        table.float("author_review").unsigned();
        table.float("consumer_review").unsigned();
        table.string("review_img");
        table.string("shop_url");
        table.string("review_description");
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('reviews');
};
