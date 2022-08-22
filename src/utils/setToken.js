import axios from 'axios';

// eslint-disable-next-line consistent-return
const setAuthToken = (token) => {
    console.log(token);
    if (!token) {
        return null;
    }
    if (token) {
        axios.defaults.headers.authorization = `Bearer ${token}`;
    } else {
        delete axios.headers.authorization;
    }
};

export default setAuthToken;
