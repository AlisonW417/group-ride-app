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
                
        })
    }
}