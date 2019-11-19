import React from 'react'

const DreamEntry = (props) => {

  return (

    <tbody>
      <td>{props.name}</td>
      <td>{props.date}</td>
      <td>{props.day}</td>
      <td>{props.mood}</td>
      <td>{props.toSleep}</td>
      <td>{props.wakeUp}</td>
    </tbody>


  )

}

export default DreamEntry