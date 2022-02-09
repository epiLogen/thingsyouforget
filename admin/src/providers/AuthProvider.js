import { 
    AUTH_LOGIN, 
    AUTH_LOGOUT, 
    AUTH_ERROR, 
    AUTH_CHECK,
    AUTH_GET_PERMISSIONS
} from 'react-admin';

const authProvider = (type, params) => {

    if(type == AUTH_LOGIN) {
        const  { username, password } = params;

        const request = new Request('https://thingsyouforget.com/login', {
            method: 'POST',
            body: JSON.stringify({username : username, password : password}),
            headers: new Headers({'Content-Type': 'application/json'})
        });

        return fetch(request)
            .then(response => {
                if(response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                localStorage.setItem('token', token);
                return Promise.resolve();
            });

    }

    if(type == AUTH_LOGOUT) {
        localStorage.removeItem('token');
        return Promise.resolve();
    }

    if(type == AUTH_ERROR) {
        return Promise.resolve();
    }

    if(type == AUTH_CHECK) {
        return localStorage.getItem('token')
            ? Promise.resolve()
            : Promise.reject();
    }

    if(type == AUTH_GET_PERMISSIONS) {
        return localStorage.getItem('token')
            ? Promise.resolve()
            : Promise.reject();
    }

};

export default authProvider;