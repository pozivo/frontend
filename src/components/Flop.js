import React from 'react'
import './Flop-style.css'

const Flop = () => {
    return (
        <div className='Flop-style d-flex flex-row gap-2'>
            <div className='Flop'>1</div>
            <div className='Flop'>2</div>
            <div className='Flop'>3</div>
            <div className='Turn'>4</div>
            <div className='River'>5</div>
        </div>
    )
}

export default Flop