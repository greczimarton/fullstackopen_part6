import {useDispatch} from "react-redux";
import {createAnecdote} from "../reducers/anecdoteReducer";
import {showNotification} from "../reducers/notificationReducer";

const NewAnecdote = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''

        dispatch(createAnecdote(content))
        dispatch(showNotification(`'${content}' anecdote is added.`,5000))

    }

    return (
        <form onSubmit={addAnecdote}>
            <input name="anecdote"/>
            <button type="submit">Create</button>
        </form>
    )
}

export default NewAnecdote