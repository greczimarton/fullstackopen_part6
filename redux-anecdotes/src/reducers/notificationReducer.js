const reducer = (state = "", action) => {
    switch (action.type) {
        case 'SHOW_NOTIFICATION':
            return action.notification
        case 'HIDE_NOTIFICATION':
            return ''
        default:
            return state

    }
}

let timeoutId

export const showNotification = (notification,duration) => {
    return async dispatch => {
        dispatch({
            type: 'SHOW_NOTIFICATION',
            notification
        })

        if (timeoutId) {
            clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(() => {
            dispatch({
                type: 'HIDE_NOTIFICATION'
            })
        },duration)
    }
}

export const hideNotification = (notification) => {
    return {
        type: 'HIDE_NOTIFICATION'
    }
}

export default reducer