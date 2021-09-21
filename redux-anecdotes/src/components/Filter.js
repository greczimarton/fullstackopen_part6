import React from "react";
import {filterChange} from "../reducers/filterReducer";
import {connect} from "react-redux";

const Filter = (props) => {
    const handleChange = (event) => {
        props.filterChange(event.target.value)
    }

    const style = {
        marginBottom: 10
    }

    return (
        <div>
            Filter: <input style={style} type="text" name="filter" onChange={handleChange}/>
        </div>
    )
}

const ConnectedFilter = connect(null, {filterChange})(Filter)

export default ConnectedFilter