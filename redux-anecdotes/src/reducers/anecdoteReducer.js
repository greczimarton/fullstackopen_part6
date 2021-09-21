import anecdoteService from "../services/anecdotes"


const reducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_ANECDOTE':
            return [...state, action.data]
        case 'VOTE':
            return state.map(anecdote => parseInt(anecdote.id) !== parseInt(action.data.id) ? anecdote : action.data)
        case 'INIT_ANECDOTES':
            return action.data
        default:
            return state

    }
}



export const voteFor = (oldObject) => {
    return async dispatch => {
        const newObject = await anecdoteService.update({...oldObject, votes: oldObject.votes + 1})
        dispatch({
            type: "VOTE",
            data: newObject
        })
    }
}

export const createAnecdote = (content) => {
    return async dispatch => {
        const newObject = await anecdoteService.createNew(content)
        dispatch({
            type: "NEW_ANECDOTE",
            data: newObject
        })
    }

}

export const initializeAnecdotes = () => {
    return async dispatch => {
        const anecdote = await anecdoteService.getAll()
        dispatch({
            type: 'INIT_ANECDOTES',
            data: anecdote,
        })
    }
}



export default reducer