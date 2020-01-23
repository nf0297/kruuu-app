const initState = {
    job: []
}

const ReducerJob = (state = initState, action) => {
    console.log(action.type)
    switch (action.type) {
       case "GET_ALL_JOB_FULFILLED":
           console.log("Get JOB!")
           return {
               ...state,
               job: action.payload.data.job
            };
        default: 
            return state;
    }
}

export default ReducerJob;