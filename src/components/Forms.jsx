import React, { useState } from 'react'


const Forms = (props) => {
    const {list,setList} = props

    const [formState,setFormState] = useState(
        {
            color: "",
            size: 0
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        setList([...list,formState])
        console.log(list)
    }
    const handleChange = event => {
        setFormState({...formState,
            [event.target.name]:event.target.value})
        console.log(formState)
    }




    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Color: </label>
                <input onChange={handleChange} type="text" name="color"/>
                <input onChange={handleChange} type="number" name="size"/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Forms