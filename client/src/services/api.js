import axios from 'axios';
import { getToken } from './token';

export default (api = '/api/v1', domain = 'localhost:9090') =>
    axios.create({
        baseURL: `${window.location.protocol}//${domain}${api}`,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            token: getToken(),
        },
    });
