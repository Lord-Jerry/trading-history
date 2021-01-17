import { Request, Response, NextFunction } from 'express';
import UserService from '../services/UserService';
import { UserInterface } from '../interfaces/User';

export default class User {
    static async getCurrentUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { id: userId } : UserInterface = Object(req.headers?.decoded_token);
            const result = await UserService.getUser(userId);

            return res.status(200).json({
                status: 200,
                message: 'Current user details',
                user: result,
            });
        } catch (err) {
            return next(err);
        }
    }
}
