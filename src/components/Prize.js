import React from 'react'
import "../styles/prize.css"
import prize from "../images/prize.png"

export default function Prize() {
    return (
        <div className="prize">
            <img src={prize} alt="prize" className="img-prize"/>
        </div>
    )
}
