import React from 'react'


const Button = ({onClick, label}) => { 
    return (
        
        <button type="button" class="nes-btn is-success" onClick={onClick}>{label}</button>
        
    )
}

export default Button

