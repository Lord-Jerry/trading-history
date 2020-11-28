import { Router } from 'express';
import { RegisterValidation, LoginValidation } from '../middlewares/validations/auth';
import { CreatePortfolioValidation } from '../middlewares/validations/portfolio';
import { CreateTradeValidation } from '../middlewares/validations/trade';
import { checkLoggedIn } from '../middlewares/verification';
import Auth from '../controllers/Auth';
import Portfolio from '../controllers/portfolio';
import Trade from '../controllers/Trade';

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

    route.post('/trade/create/:portfolioId', checkLoggedIn, CreateTradeValidation, Trade.create);
    route.get('/trade/all/:portfolioId', checkLoggedIn, Trade.getAll);
    route.patch('/trade/update/:portfolioId/:tradeId', checkLoggedIn, CreateTradeValidation, Trade.update);
    route.delete('/trade/delete/:portfolioId/:tradeId', checkLoggedIn, Trade.delete);

    return route;
};
