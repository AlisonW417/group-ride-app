export const updateRideForm = formData => {
    return {
        type: "UPDATE_RIDE_FORM",
        formData
    }
}

export const resetLoginForm = () => {
    return {
        type: "RESET_RIDE_FORM",
    }
}