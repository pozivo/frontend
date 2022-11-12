import React from 'react'
import './Card.css'

const cardImg = {
    "1C": "image/1c.png",
    "2C": "image/2c.png",
    "3C": "image/3c.png",
    "4C": "image/4c.png",
    "5C": "image/5c.png",
    "6C": "image/6c.png",
    "7C": "image/7c.png",
    "8C": "image/8c.png",
    "9C": "image/9c.png",
    "10C": "image/10c.png",
    "11C": "image/Jc.png",
    "12C": "image/Qc.png",
    "13C": "image/Kc.png",
    "1D": "image/1d.png",
    "2D": "image/2d.png",
    "3D": "image/3d.png",
    "4D": "image/4d.png",
    "5D": "image/5d.png",
    "6D": "image/6d.png",
    "7D": "image/7d.png",
    "8D": "image/8d.png",
    "9D": "image/9d.png",
    "10D": "image/10d.png",
    "11D": "image/jd.png",
    "12D": "image/Qd.png",
    "13D": "image/Kd.png",
    "1H": "image/1h.png",
    "2H": "image/2h.png",
    "3H": "image/3h.png",
    "4H": "image/4h.png",
    "5H": "image/5h.png",
    "6H": "image/6h.png",
    "7H": "image/7h.png",
    "8H": "image/8h.png",
    "9H": "image/9h.png",
    "10H": "image/10h.png",
    "11H": "image/jh.png",
    "12H": "image/Qh.png",
    "13H": "image/Kh.png",
    "1S": "image/1s.png",
    "2S": "image/2s.png",
    "3S": "image/3s.png",
    "4S": "image/4s.png",
    "5S": "image/5s.png",
    "6S": "image/6s.png",
    "7S": "image/7s.png",
    "8S": "image/8s.png",
    "9S": "image/9s.png",
    "10S": "image/10s.png",
    "11S": "image/Js.png",
    "12S": "image/Qs.png",
    "13S": "public/image/Ks.png"
}

const cardImgBack = "image/back_black.png"

const Card = ({ number, suit, flipped }) => {


    return (

        <div>
            {flipped ? <img className='img-card' src={cardImgBack} alt="" /> : <img className='img-card' src={cardImg[number + suit]} alt="" />}

        </div>

    )
}

export default Card

// <span className=" mazzo nes-text is-primary m-1"> {number}{suit} </span>