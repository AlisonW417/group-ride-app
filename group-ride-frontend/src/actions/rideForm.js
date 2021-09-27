export const updateRideForm = formData => {
    return {
        type: "UPDATE_RIDE_FORM",
        formData
    }
}

export const resetRideForm = () => {
    return {
        type: "RESET_RIDE_FORM"
    }
}