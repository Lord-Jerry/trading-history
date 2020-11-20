import { Router } from 'express';
import { RegisterValidation, LoginValidation } from '../middlewares/validations/auth';
import Auth from '../controllers/Auth';

export default () => {
    const route = Router();

    route.get('/', (req, res) => {
        res.send('hello fucking world');
    });

    route.post('/register', RegisterValidation, Auth.register);
    route.post('/login', LoginValidation, Auth.login);

    return route;
};
