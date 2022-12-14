import React from 'react'
import './Card.css'

const cardImg = {
    "AC": "../image/1c.png",
    "2C": "../image/2c.png",
    "3C": "../image/3c.png",
    "4C": "../image/4c.png",
    "5C": "../image/5c.png",
    "6C": "../image/6c.png",
    "7C": "../image/7c.png",
    "8C": "../image/8c.png",
    "9C": "../image/9c.png",
    "TC": "../image/10c.png",
    "JC": "../image/Jc.png",
    "QC": "../image/Qc.png",
    "KC": "../image/Kc.png",
    "AD": "../image/1d.png",
    "2D": "../image/2d.png",
    "3D": "../image/3d.png",
    "4D": "../image/4d.png",
    "5D": "../image/5d.png",
    "6D": "../image/6d.png",
    "7D": "../image/7d.png",
    "8D": "../image/8d.png",
    "9D": "../image/9d.png",
    "TD": "../image/10d.png",
    "JD": "../image/jd.png",
    "QD": "../image/Qd.png",
    "KD": "../image/Kd.png",
    "AH": "../image/1h.png",
    "2H": "../image/2h.png",
    "3H": "../image/3h.png",
    "4H": "../image/4h.png",
    "5H": "../image/5h.png",
    "6H": "../image/6h.png",
    "7H": "../image/7h.png",
    "8H": "../image/8h.png",
    "9H": "../image/9h.png",
    "TH": "../image/10h.png",
    "JH": "../image/jh.png",
    "QH": "../image/Qh.png",
    "KH": "../image/Kh.png",
    "AS": "../image/1s.png",
    "2S": "../image/2s.png",
    "3S": "../image/3s.png",
    "4S": "../image/4s.png",
    "5S": "../image/5s.png",
    "6S": "../image/6s.png",
    "7S": "../image/7s.png",
    "8S": "../image/8s.png",
    "9S": "../image/9s.png",
    "TS": "../image/10s.png",
    "JS": "../image/Js.png",
    "QS": "../image/Qs.png",
    "KS": "../image/Ks.png"
}

const cardImgBack = "../image/back_black.png"

const Card = ({ number, suit, flipped }) => {


    return (

        <div>
            {flipped ? <img className='img-card' src={cardImgBack} alt="" /> : <img className='img-card' src={cardImg[number + suit.toUpperCase()]} alt="" />}
        </div>

    )
}

export default Card

// <span className=" mazzo nes-text is-primary m-1"> {number}{suit} </span>