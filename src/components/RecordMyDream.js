import React from 'react'
import Microphone from '../components/Microphone'


export default class RecordMyDream extends React.Component {

  render() {
    return (

      <div className='container'>
        <div className="spacer has-text-centered">
          <h1 className="title ">
            Record my Dream Page
        </h1>
          <h2>Read instructions</h2>
        </div>

        <div className="microphone">
          <Microphone />
        </div>

      </div>
    )
  }
}