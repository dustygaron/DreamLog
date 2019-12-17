import React from 'react'
import './Card.css'

const Card = props => (
  <div className="card-dream">
    <img src={props.img} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.text}</p>
  </div>
)



export default Card