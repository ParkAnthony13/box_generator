import React from 'react'


const Boxes = props => {
    const {list} = props
    const container = {
        outline: '2px solid goldenrod',
        display: 'flex',
        width: '75%',
        height: 'auto',
        flexWrap: 'wrap'
    }
    const boxStyle = {
        outline: '2px solid black',
        width: '200px',
        height: '200px',
        flex:'0 0 auto'
    }

    return (
        <div style={container}>
            {
                list.map( (dict,idx) =>
                    <div style={{backgroundColor: `${dict.color}`,width:`${dict.size}px`,height:`${dict.size}px`,flex:'0 0 auto',outline:'2px solid goldenrod'}} key={idx}></div>
                )
            }
        </div>
    )
}

export default Boxes