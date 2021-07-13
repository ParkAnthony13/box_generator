import React from 'react'

const Forms = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.lists.append('box')
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Color: </label>
                <input type="text" name="color"/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default Forms