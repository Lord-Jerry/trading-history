import { Model } from 'objection';
import Portfolios from './Portfolios';

export default class Users extends Model {
    id!: number;

    fname!: string;

    lname!: string;

    email!: string;

    active?: boolean;

    social?: boolean;

    // eslint-disable-next-line camelcase
    social_type?: string

    password?: string;

    static tableName = 'users';

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['fname', 'lname', 'email', 'password'],
            properties: {
                id: { type: 'integer' },
                fname: { type: 'string' },
                lname: { type: 'string' },
                email: { type: 'string' },
                password: { type: 'string' },
            },
        };
    }

    static get relationMappings() {
        return {
            Portfolios: {
                relation: Model.HasManyRelation,
                modelClass: Portfolios,
                join: {
                    from: `${this.tableName}.id`,
                    to: 'portfolios.user_id',
                },
            },
        };
    }
}
