exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('user_id').notNullable().unique().primary();
        table.string('first_name');
        table.string('last_name');
        table.string('email').notNullable().unique();
        table
            .string("role")
            .notNullable()
            .default("user")
            .onUpdate("RESTRICT")
            .onDelete("RESTRICT")
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};