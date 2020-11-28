import { PortfolioInterface } from '../interfaces/Portfolio';
import { Portfolios } from '../models';
import { Error } from '../interfaces/Error';

export default class PortfolioService {
    static async createPortfolio(userId: number, body: PortfolioInterface) {
        // TODO: use user service to check if user exists before creating portfolio
        const create = await Portfolios.query().insert({
            ...body,
            user_id: userId,
        });

        return create;
    }

    static async getAllPortfolios(userId: number) {
        const portfolios = await Portfolios.query().where({
            user_id: userId,
        });

        return portfolios;
    }

    static async updatePortfolio(userId: number, portfolioId: number, body: PortfolioInterface) {
        const findPortfolio = await Portfolios.query().findOne({
            id: portfolioId,
            user_id: userId,
        });
        if (!findPortfolio) {
            const err: Error = new Error();
            err.message = `portfolio with ID ${portfolioId} not found`;
            err.status = 404;
            throw err;
        }

        // eslint-disable-next-line no-return-await
        return await Portfolios.query().patchAndFetchById(portfolioId, {
            ...body,
        });
    }

    static async deletePortfolio(userId: number, portfolioId: number) {
        const findPortfolio = await Portfolios.query().findOne({
            id: portfolioId,
            user_id: userId,
        });
        if (!findPortfolio) {
            const err: Error = new Error();
            err.message = `portfolio with ID ${portfolioId} not found`;
            err.status = 404;
            throw err;
        }

        // eslint-disable-next-line no-return-await
        return await Portfolios.query().deleteById(portfolioId);
    }
}
