const rideList = (state = [], action) => {
    switch (action.type) {
        case "GET_RIDES":
            return action.rides
        case "ADD_RIDE":
            return state.concat(action.ride)
        case "CLEAR_RIDES":
            return []
        default: 
            return state
    }
}

export default rideList;