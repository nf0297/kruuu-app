import axios from 'axios';

const Host = "https://kruuu-app.herokuapp.com/api/v1"

export const getAllJob = () => {
    return {
        type: "GET_ALL_JOB",
        payload: axios.get(`${Host}/jobs`)
    };
}