import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('trades', (table) => {
        table.increments('id').primary();
        table.integer('portfolio_id');
        table.foreign('portfolio_id').references('portfolios.id');
        table.string('currency').notNullable();
        // buy or sell
        table.string('direction').notNullable();
        table.float('entry_price').notNullable();
        table.float('stop_loss').notNullable();
        table.float('take_profit').notNullable();
        table.float('exit_price').notNullable();

        // number of coins or postions open
        table.float('positions').notNullable();
        table.float('amount').notNullable();
        table.float('fees').nullable();

        table.float('profit_and_loss_price').nullable();
        table.float('profit_and_loss_percentage').nullable();

        table.text('notes').nullable();
        table.string('status').defaultTo('open');

        table.timestamp('entry_date').defaultTo(knex.fn.now());
        table.timestamp('exit_date').nullable();

        // timestamps
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.timestamp('deleted_at');
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('trades');
}
