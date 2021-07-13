import React from 'react'


const Boxes = props => {
    
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
        backgroundColor: 'red',
        flex:'0 0 auto'
    }

    return (
        <div style={container}>
            { props.boxList.map( (item, i) => 
                <div id={i} style={boxStyle}></div>
            )
            }
        </div>
    )
}

export default Boxes