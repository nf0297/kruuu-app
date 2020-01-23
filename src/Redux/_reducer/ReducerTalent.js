const initState = {
    talents: []
}

const ReducerTalent = (state = initState, action) => {
    console.log(action.type)
    switch (action.type) {
        case "GET_ALL_TALENT_FULFILLED":
            console.log("Get Talent!")
            return {
                ...state,
                talents: action.payload.data.talent
            };
        default:
            return state;
    }
}

export default ReducerTalent