import { Model } from 'objection';
import knex from 'knex';
import User from './User';

import knexConfig from '../../knexfile';

const knexInstance = knex(knexConfig.development);
Model.knex(knexInstance);

export {
    User,
};
