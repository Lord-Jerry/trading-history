import {
    Application, Response, Request, NextFunction,
} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { Error } from '../interfaces/Error';
import routes from './routes';
import config from '../config';
import logger from './logger';

export default ({ app }: { app: Application }) => {
    app.enable('trust proxy');
    app.use(cors());
    app.use(bodyParser.json());
    app.use(morgan('dev'));

    app.use(config.api.prefix, routes());

    // catch 404 errors
    app.use((_req, _res, next) => {
        const err: Error = new Error();
        err.status = 404;
        err.message = 'Enpoint not found';
        next(err);
    });

    // custom error handler
    // eslint-disable-next-line no-unused-vars
    app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
        const status: number = err.status || 500;
        const message: string = err.status ? err.message : 'Internal server error';

        logger.error(!err.status ? err.stack : err);
        return res.status(status).json({
            message,
            status,
        });
    });
};
