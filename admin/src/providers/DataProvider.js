import simpleRestProvider from 'ra-data-simple-rest';
import { fetchUtils } from 'react-admin';
require('dotenv').config();

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(`http://${process.env.REACT_APP_HOST}/login`, httpClient);

export default dataProvider;