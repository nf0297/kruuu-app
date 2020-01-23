import axios from 'axios';

const Host = "https://kruuu-app.herokuapp.com/api/v1"

export const getAllCompany = () => {
    return {
        type: "GET_ALL_COMPANY",
        payload: axios.get(`${Host}/companies`)
    };
}
