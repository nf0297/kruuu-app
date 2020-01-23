import axios from 'axios';

const Host = "https://kruuu-app.herokuapp.com/api/v1"

export const getAllTalent = () => {
    return {
        type: "GET_ALL_TALENT",
        payload: axios.get(`${Host}/talents`)
    };
}
