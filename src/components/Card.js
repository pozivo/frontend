import React from 'react'

const Card = ({ number, suit }) => {

    return (

        <div className=''>
            <span className=" mazzo nes-text is-primary m-1"> {number}{suit} </span>
        </div>

    )
}

export default Card