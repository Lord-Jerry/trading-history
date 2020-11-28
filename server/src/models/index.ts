import { Model } from 'objection';
import knex from 'knex';
import User from './Users';
import Portfolios from './Portfolios';
import Trades from './Trades';

import knexConfig from '../../knexfile';

const knexInstance = knex(knexConfig.development);
Model.knex(knexInstance);

export {
    User,
    Portfolios,
    Trades,
};
