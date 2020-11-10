import axios from 'axios';

const instance = axios.create({
    baseURL:'https://rocket-burger-3f624.firebaseio.com/'
});

export default instance;