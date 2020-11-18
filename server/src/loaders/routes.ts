import { Router } from 'express';

export default () => {
    const route = Router();

    route.get('/', (req, res) => {
        res.send('hello fucking world');
    });

    return route;
};
