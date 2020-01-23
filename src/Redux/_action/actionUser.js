import axios from 'axios'

const Host = "https://kruuu-app.herokuapp.com/api/v1"

export const getProfilebyID = (id) => {
    console.log(id)
    return {
        type: "GET_PROFILE_BY_ID",
        payload: axios.get(`${Host}/user/`+ id)
    };
}