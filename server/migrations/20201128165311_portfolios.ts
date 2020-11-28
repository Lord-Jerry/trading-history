import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('portfolios', (table) => {
        table.increments('id').primary();
        table.integer('user_id');
        table.foreign('user_id').references('users.id');
        table.string('name').notNullable();
        table.string('type').notNullable();
        table.float('size').notNullable();
        // timestamps
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.timestamp('deleted_at');
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('portfolios');
}
