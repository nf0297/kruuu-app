const initState = {
    companies: []
}

const reducerCompany = (state = initState, action) => {
    console.log(action.type)
    switch (action.type) {
        case "GET_ALL_COMPANY_FULFILLED":
            console.log("Get Company!")
            return {
                ...state,
                companies: action.payload.data.company
            };
        default:
            return state;
    }
}

export default reducerCompany