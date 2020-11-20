import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    // return knex.raw('DROP TABLE users');
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('fname').notNullable();
        table.string('lname').notNullable();
        table.string('email').unique().notNullable();
        table.string('password');
        table.boolean('active').notNullable().defaultTo(false);
        table.boolean('social').notNullable().defaultTo(false);
        table.string('social_type');
        // timestamps
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.timestamp('deleted_at');
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('users');
}
