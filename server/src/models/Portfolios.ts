/* eslint-disable camelcase */
import { Model } from 'objection';
import Users from './Users';

export default class Portfolios extends Model {
    id!: number;

    user_id!: number;

    name!: string;

    type!: string;

    size!: number;

    static tableName = 'portfolios';

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['user_id', 'name', 'type', 'size'],
            properties: {
                id: { type: 'integer' },
                user_id: { type: 'integer' },
                name: { type: 'string' },
                type: { type: 'string' },
                size: { type: 'number' },
            },
        };
    }

    static get relationMappings() {
        return {
            users: {
                relation: Model.BelongsToOneRelation,
                modelClass: Users,
                join: {
                    from: `${this.tableName}.user_id`,
                    to: 'users.id',
                },
            },
        };
    }
}
