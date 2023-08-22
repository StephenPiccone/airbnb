import React from "react"
import Star from '../assets/star.png'
import './card.css'

function Card(props) {
    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} className='card--image' alt='card-photo'/>
            <div className="card--stats">
                <img src={Star} className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">${props.price}</span> / person</p>
        </div>
    )
}


export default Card


