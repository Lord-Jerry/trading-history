/* eslint-disable camelcase */
import { Model } from 'objection';
import Portfolios from './Portfolios';

export default class Trades extends Model {
    id!: number;

    portfolio_id!: number;

    currency!: string;

    direction!: string;

    entry_price!: number;

    stop_loss?: number;

    take_profit?: number;

    exit_price?: number;

    positions!: number;

    amount!: number;

    fees?: number;

    profit_and_loss_price?: number;

    profit_and_loss_percentage?: number;

    notes?: string;

    status!: string;

    entry_date!: Date;

    exit_date?: Date;

    static tableName = 'trades';

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['portfolio_id', 'currency', 'direction', 'entry_price', 'positions', 'amount'],
            properties: {
                id: { type: 'integer' },
                portfolio_id: { type: 'integer' },
                currency: { type: 'string' },
                direction: { type: 'string' },
                entry_price: { type: 'number' },
                stop_loss: { type: 'number' },
                take_profit: { type: 'number' },
                exit_price: { type: 'number' },
                positions: { type: 'number' },
                amount: { type: 'number' },
                fees: { type: 'number' },
                profit_and_loss_price: { type: 'number' },
                profit_and_loss_percentage: { type: 'number' },
                notes: { type: 'string' },
                status: { type: 'string' },
                entry_date: { type: 'date' },
                exit_date: { type: 'date' },
            },
        };
    }

    static get relationMappings() {
        return {
            portfolios: {
                relation: Model.BelongsToOneRelation,
                modelClass: Portfolios,
                join: {
                    from: `${this.tableName}.portfolio_id`,
                    to: 'portfolios.id',
                },
            },
        };
    }
}
