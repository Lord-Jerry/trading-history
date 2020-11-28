import { Request, Response, NextFunction } from 'express';
import { UserInterface } from '../interfaces/User';
import PortfolioService from '../services/PortfolioService';

export default class Portfolio {
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { body } = req;
            const { id: userId } : UserInterface = Object(req.headers?.decoded_token);
            const result = await PortfolioService.createPortfolio(userId, body);

            return res.status(201).json({
                status: 201,
                message: 'Portfolio created successfully',
                data: {
                    ...result,
                },
            });
        } catch (err) {
            return next(err);
        }
    }

    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const { id: userId } : UserInterface = Object(req.headers?.decoded_token);
            const result = await PortfolioService.getAllPortfolios(userId);

            return res.status(200).json({
                status: 200,
                message: 'All Portfolios',
                data: result,
            });
        } catch (err) {
            return next(err);
        }
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id: userId } : UserInterface = Object(req.headers?.decoded_token);
            const portfolioId = Number(req.params?.portfolioId);
            const { body } = req;

            const result = await PortfolioService.updatePortfolio(userId, portfolioId, body);

            return res.status(200).json({
                status: 200,
                message: 'Portfolio updated',
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

            await PortfolioService.deletePortfolio(userId, portfolioId);

            return res.status(204).json({
                status: 204,
                message: 'Portfolio deleted',
            });
        } catch (err) {
            return next(err);
        }
    }
}
