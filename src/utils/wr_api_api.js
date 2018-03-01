import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export {getApiServices, getRoutes};

// function getFoodData() {
//     const url = `${BASE_URL}/api/jokes/food`;
//     return axios.get(url).then(response => response.data);
// }
//
// function getCelebrityData() {
//     const url = `${BASE_URL}/api/jokes/celebrity`;
//     return axios.get(url).then(response => response.data);
// }


function getApiServices() {
    const url = `${BASE_URL}/services`;
    return axios.get(url).then(response => response.data);
}


function getRoutes() {
    const url = `${BASE_URL}/api_routes`;
    return axios.get(url).then(response => response.data);
}