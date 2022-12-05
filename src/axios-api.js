import axios from 'axios'

const getAPI = axios.create({ 
    baseURL: 'https://www.cheroomsv.com',
});

export { getAPI };