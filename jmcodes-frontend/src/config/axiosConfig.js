import axios from 'axios';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const BASEURL = 'http://localhost:5000'

export const getRequest = (endpoint) =>  {
    return axios.get(`${BASEURL}${endpoint}`);
};

export const postRequest = (endpoint, data) => {
    return axios.post(`${BASEURL}${endpoint}`, data);
};