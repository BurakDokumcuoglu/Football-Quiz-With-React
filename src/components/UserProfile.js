import React from 'react'
import "../styles/userProfile.css"
import user from "../images/burak.png"

export default function UserProfile() {
    return (
        <div className="userProfile">
            <img src={user} alt="user" className="user-img"/>
            <span className="profileText">Burak Dökümcü</span>
            <span className="profileText">Joker:2</span>
            <span className="profileText">12,440,00₺</span>
        </div>
    )
}
