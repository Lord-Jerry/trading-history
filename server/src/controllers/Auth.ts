import { Request, Response, NextFunction } from 'express';
import AuthService from '../services/AuthService';

export default class Auth {
    static async register(req: Request, res: Response, next: NextFunction) {
        try {
            const { body } = req;
            const result = await AuthService.createAccount(body);

            return res.status(201).json({
                status: 201,
                message: 'Account created successfully',
                ...result,
            });
        } catch (err) {
            return next(err);
        }
    }

    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { body } = req;
            const result = await AuthService.loginUser(body);

            return res.status(200).json({
                status: 200,
                message: 'Logged in successfully',
                ...result,
            });
        } catch (err) {
            return next(err);
        }
    }
}
