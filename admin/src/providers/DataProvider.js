import simpleRestProvider from 'ra-data-simple-rest';
import { fetchUtils } from 'react-admin';
require('dotenv').config();
const {
    HOST_IP,
    HOST_PORT,
} = process.env;

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(`http://${HOST_IP}:${HOST_PORT}/login`, httpClient);

export default dataProvider;