const axios = require('axios');
let token = localStorage.getItem('token');
axios.defaults.baseURL = 'http://localhost:1010/';
axios.defaults.headers.common = {'Authorization': `bearer ${token}`};
export default axios;