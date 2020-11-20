import { Request, Response, NextFunction } from 'express';
import Validator from 'validatorjs';
import { Error } from '../../interfaces/Error';

// eslint-disable-next-line import/prefer-default-export
export const RegisterValidation = (
    req: Request,
    _res: Response,
    next: NextFunction,
) => {
    const rules = {
        fname: 'required',
        lname: 'required',
        email: 'required|email',
        password: 'required|min:6',
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

export const LoginValidation = (
    req: Request,
    _res: Response,
    next: NextFunction,
) => {
    const rules = {
        email: 'required|email',
        password: 'required|min:6',
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
