import React from "react";
import {voteFor} from "../reducers/anecdoteReducer";
import {connect} from "react-redux";
import {showNotification} from "../reducers/notificationReducer";

const Anecdote = ({anecdote, handleClick}) => {
    return (
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={handleClick}>Vote</button>
            </div>
        </div>
    )
}

const Anecdotes = (props) => {

    const vote = async (anecdote) => {
        props.voteFor(anecdote)
        props.showNotification(`Voted for '${anecdote.content}' anecdote. Current votes: ${anecdote.votes + 1}`,5000)
    }

    return (
        <ul>
            {props.anecdotes.sort((anecdoteA,anecdoteB) => anecdoteB.votes - anecdoteA.votes).map(anecdote =>
                <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => vote(anecdote)}/>)}
        </ul>
    )
}

const mapStateToProps = (state) => {
    if (state.filter === ""){
        return {
            anecdotes: state.anecdotes
        }
    }
    else{
        return {
            anecdotes: state.anecdotes.filter(t => t.content.toLowerCase().includes(state.filter.toLowerCase()) === true)
        }
    }
}

const mapDispatchToProps = {
    voteFor,
    showNotification
}

const ConnectedAnecdotes = connect(mapStateToProps,mapDispatchToProps)(Anecdotes)

export default ConnectedAnecdotes