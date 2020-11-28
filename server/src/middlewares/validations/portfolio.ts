import { Request, Response, NextFunction } from 'express';
import Validator from 'validatorjs';
import { Error } from '../../interfaces/Error';

// eslint-disable-next-line import/prefer-default-export
export const CreatePortfolioValidation = (
    req: Request,
    _res: Response,
    next: NextFunction,
) => {
    const rules = {
        name: 'required',
        type: 'required',
        size: 'required|numeric',
    };

    const validate = new Validator(req.body, rules);

    if (!validate.passes()) {
        const err: Error = new Error();
        err.message = validate.errors;
        err.status = 400;
        return next(err);
    }

    return next();
};
