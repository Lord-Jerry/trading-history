import { Request, Response, NextFunction } from 'express';
import TradeService from '../services/TradeService';
import { UserInterface } from '../interfaces/User';

export default class Trade {
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { body } = req;
            const { id: userId } : UserInterface = Object(req.headers?.decoded_token);
            const portfolioId = Number(req.params?.portfolioId);
            const result = await TradeService.createTrade(portfolioId, userId, body);

            return res.status(201).json({
                status: 201,
                message: 'Trade created successfully',
                data: result,
            });
        } catch (err) {
            return next(err);
        }
    }

    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const { id: userId } : UserInterface = Object(req.headers?.decoded_token);
            const portfolioId = Number(req.params?.portfolioId);
            const result = await TradeService.getAllTrades(portfolioId, userId);

            return res.status(201).json({
                status: 201,
                message: 'All Trades',
                data: result,
            });
        } catch (err) {
            return next(err);
        }
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { body } = req;
            const { id: userId } : UserInterface = Object(req.headers?.decoded_token);
            const portfolioId = Number(req.params?.portfolioId);
            const tradeId = Number(req.params?.tradeId);
            const result = await TradeService.updateTrade(portfolioId, userId, tradeId, body);

            return res.status(200).json({
                status: 200,
                message: 'Trade updated successfully',
                data: result,
            });
        } catch (err) {
            return next(err);
        }
    }

    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id: userId } : UserInterface = Object(req.headers?.decoded_token);
            const portfolioId = Number(req.params?.portfolioId);
            const tradeId = Number(req.params?.tradeId);
            const result = await TradeService.deleteTrade(portfolioId, userId, tradeId);

            return res.status(204).json({
                status: 204,
                message: 'Trade deleted successfully',
                data: result,
            });
        } catch (err) {
            return next(err);
        }
    }
}
