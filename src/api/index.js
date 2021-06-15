import axios from 'axios';

export const HTTP = axios.create({
    baseURL: 'https://hardway.herokuapp.com/'
});