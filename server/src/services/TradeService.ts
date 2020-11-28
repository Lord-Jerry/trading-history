import { TradeInterface } from '../interfaces/trade';
import { UserInterface } from '../interfaces/User';
import { Error } from '../interfaces/Error';
import { Trades } from '../models';
import PortfoliosService from './PortfolioService';

export default class TradeService {
    static async checkTradeExists(portfolioId: number, tradeId: number) {
        const checkTrade = await Trades.query().findOne({
            id: tradeId,
            portfolio_id: portfolioId,
        });
        if (!checkTrade) {
            const err: Error = new Error();
            err.message = `Trade with ID ${tradeId} not found`;
            err.status = 404;
            throw err;
        }
        return checkTrade;
    }

    static async createTrade(portfolioId: number, userId: number, body: TradeInterface) {
        await PortfoliosService.checkPortfolioExists(userId, portfolioId);

        // eslint-disable-next-line no-return-await
        return await Trades.query().insert({
            ...body,
            portfolio_id: portfolioId,
        });
    }

    static async getAllTrades(portfolioId: number, userId: number) {
        await PortfoliosService.checkPortfolioExists(userId, portfolioId);

        // eslint-disable-next-line no-return-await
        return await Trades.query().where({
            portfolio_id: portfolioId,
        });
    }

    // eslint-disable-next-line max-len
    static async updateTrade(portfolioId: number, userId: number, tradeId: number, body: UserInterface) {
        await PortfoliosService.checkPortfolioExists(userId, portfolioId);
        await this.checkTradeExists(portfolioId, tradeId);

        // eslint-disable-next-line no-return-await
        return await Trades.query().patchAndFetchById(tradeId, {
            ...body,
        });
    }

    static async deleteTrade(portfolioId: number, userId: number, tradeId: number) {
        await PortfoliosService.checkPortfolioExists(userId, portfolioId);
        await this.checkTradeExists(portfolioId, tradeId);

        // eslint-disable-next-line no-return-await
        return await Trades.query().deleteById(tradeId);
    }
}
