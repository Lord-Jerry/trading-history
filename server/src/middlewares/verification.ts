import { Request, Response, NextFunction } from 'express';
import { Error } from '../interfaces/Error';
import { decodeToken } from '../helpers/token';

export const checkLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { token } = req.headers;
        if (token === undefined || token === null || token === '') {
            const err: Error = new Error();
            err.message = 'token does not exist';
            err.status = 401;
            return next(err);
        }

        const decoded = decodeToken(String(token));

        if (!decoded) {
            const err: Error = new Error();
            err.message = 'invalid token';
            err.status = 401;
            return next(err);
        }

        req.headers.decoded_token = Object(decoded);
        return next();
    } catch (err) {
        return next(err);
    }
};
