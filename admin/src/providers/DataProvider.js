import simpleRestProvider from 'ra-data-simple-rest';
import { fetchUtils } from 'react-admin';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider('http://localhost:80/quotes', httpClient);

export default dataProvider;