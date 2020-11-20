import jwt from 'jsonwebtoken';
import { UserInterface } from '../interfaces/User';
import config from '../config';

if (!config.jwtSecret) {
    throw new Error('JWT secret does not exist');
}

const secret: string = config.jwtSecret;

export const encodeToken = (details: UserInterface) => jwt.sign({
    ...details,
}, secret, { expiresIn: '24h' });

export const decodeToken = (token: string) => jwt.verify(token, secret);
