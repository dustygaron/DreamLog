import React from "react"
import Wave from "../components/Wave"
import './WaveSection.css'


const WaveSection = props => (
  <section className='section-group'>
    <div className='wave-top'>
      <Wave />
    </div>
    {/* <div classname='wave-bottom'>
      <Wave />
    </div> */}


    <div className='section-title-group'>
      <div><img src={props.logo} alt={props.name} /></div>
      <div> <h2>{props.title}</h2>
        <p>{props.text}</p></div>
    </div>
  </section>
)

export default WaveSection