import { resetRideForm } from './rideForm';

export const loadRides = (rides) => {
    return {
        type: "GET_RIDES",
        rides
    }
}

export const clearRides = () => {
    return {
        type: "CLEAR_RIDES"
    }
}

export const getRides = () => {
    return dispatch => {
        return fetch("http://localhost:3001/rides", {
            credential: 'include',
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
        })
        .then(r=>r.json())
        .then(resp => {
            console.log(resp)
            dispatch(loadRides(resp.data))
        })
        .catch(err => console.log(err))
    }
}

export const addRide = (ride) => {
    return {
        type: "ADD_RIDE",
        ride
    }
}

export const createRide = (rideData, history) => {
    return dispatch => {
        const newRideData = {
            ride: {
                name: rideData.name,
                starting_location: rideData.startingLocation,
                starting_time: rideData.startingTime,
                date: rideData.date,
                level: rideData.level,
                distance: rideData.distance,
                description: rideData.description,
                user_id: rideData.userId
            }
        }
        return fetch('http://localhost:3001/rides', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRideData)
        })
        .then(resp => resp.json())
        .then(resp => {
                console.log(resp)
                dispatch(addRide(resp.data))
                dispatch(resetRideForm())
                // history.push(`/rides/${resp.data.id}`)
                // need to updated this when routes are updated
        })
    }
}