import axios from 'axios'

const getAPI = axios.create({ 
    baseURL: 'http://cheroomsv.com/api',
});

export { getAPI };