import React from 'react'

const cardImg = {
    "1C": "image/simple_c_a.svg",
    "2C": "image/simple_c_2.svg",
    "3C": "image/simple_c_3.svg",
    "4C": "image/simple_c_4.svg",
    "5C": "image/simple_c_5.svg",
    "6C": "image/simple_c_6.svg",
    "7C": "image/simple_c_7.svg",
    "8C": "image/simple_c_8.svg",
    "9C": "image/simple_c_9.svg",
    "10C": "image/simple_c_10.svg",
    "11C": "image/simple_c_j.svg",
    "12C": "image/simple_c_q.svg",
    "13C": "image/simple_c_k.svg",
    "1D": "image/simple_d_a.svg",
    "2D": "image/simple_d_2.svg",
    "3D": "image/simple_d_3.svg",
    "4D": "image/simple_d_4.svg",
    "5D": "image/simple_d_5.svg",
    "6D": "image/simple_d_6.svg",
    "7D": "image/simple_d_7.svg",
    "8D": "image/simple_d_8.svg",
    "9D": "image/simple_d_9.svg",
    "10D": "image/simple_d_10.svg",
    "11D": "image/simple_d_j.svg",
    "12D": "image/simple_d_q.svg",
    "13D": "image/simple_d_k.svg",
    "1H": "image/simple_h_a.svg",
    "2H": "image/simple_h_2.svg",
    "3H": "image/simple_h_3.svg",
    "4H": "image/simple_h_4.svg",
    "5H": "image/simple_h_5.svg",
    "6H": "image/simple_h_6.svg",
    "7H": "image/simple_h_7.svg",
    "8H": "image/simple_h_8.svg",
    "9H": "image/simple_h_9.svg",
    "10H": "image/simple_h_10.svg",
    "11H": "image/simple_h_j.svg",
    "12H": "image/simple_h_q.svg",
    "13H": "image/simple_h_k.svg",
    "1S": "image/simple_s_a.svg",
    "2S": "image/simple_s_2.svg",
    "3S": "image/simple_s_3.svg",
    "4S": "image/simple_s_4.svg",
    "5S": "image/simple_s_5.svg",
    "6S": "image/simple_s_6.svg",
    "7S": "image/simple_s_7.svg",
    "8S": "image/simple_s_8.svg",
    "9S": "image/simple_s_9.svg",
    "10S": "image/simple_s_10.svg",
    "11S": "image/simple_s_j.svg",
    "12S": "image/simple_s_q.svg",
    "13S": "image/simple_s_k.svg"
}
console.log(cardImg);

const Card = ({ number, suit }) => {

    return (

        <div>
            <img className='img-card' src={cardImg[number+suit]} alt="" />
            <span className=" mazzo nes-text is-primary m-1"> {number}{suit} </span>
        </div>

    )
}

export default Card