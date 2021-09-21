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

export const showNotification = (notification,duration) => {
    return dispatch => {

        dispatch({
            type: 'SHOW_NOTIFICATION',
            notification
        })
        let timer = null

        if (timer != null) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
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