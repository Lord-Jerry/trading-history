import { Router } from 'express';
import { RegisterValidation, LoginValidation } from '../middlewares/validations/auth';
import { CreatePortfolioValidation } from '../middlewares/validations/portfolio';
import { checkLoggedIn } from '../middlewares/verification';
import Auth from '../controllers/Auth';
import Portfolio from '../controllers/portfolio';

export default () => {
    const route = Router();

    route.get('/', (req, res) => {
        res.send('hello fucking world');
    });

    route.post('/register', RegisterValidation, Auth.register);
    route.post('/login', LoginValidation, Auth.login);

    route.post('/portfolio/create', checkLoggedIn, CreatePortfolioValidation, Portfolio.create);
    route.get('/portfolio/all', checkLoggedIn, Portfolio.getAll);
    route.patch('/portfolio/update/:portfolioId', checkLoggedIn, CreatePortfolioValidation, Portfolio.update);
    route.delete('/portfolio/delete/:portfolioId', checkLoggedIn, Portfolio.delete);

    return route;
};
