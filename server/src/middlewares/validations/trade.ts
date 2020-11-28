import { Request, Response, NextFunction } from 'express';
import Validator from 'validatorjs';
import { Error } from '../../interfaces/Error';

// eslint-disable-next-line import/prefer-default-export
export const CreateTradeValidation = (
    req: Request,
    _res: Response,
    next: NextFunction,
) => {
    const rules = {
        currency: 'required',
        direction: 'required',
        entry_price: 'required|numeric',
        stop_loss: 'numeric',
        take_profit: 'numeric',
        exit_price: 'numeric',
        positions: 'required|numeric',
        amount: 'required|numeric',
        fees: 'numeric',
        notes: 'string',
        entry_date: 'required|date',
        exit_date: 'date',
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
