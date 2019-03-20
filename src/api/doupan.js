import axios from './api-config'

const getTop250 = (params) => {
    return axios.post(`/v2/movie/top250`);
}
export {
    getTop250
}