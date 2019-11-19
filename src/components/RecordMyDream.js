import React from 'react'
import Microphone from '../components/Microphone'


export default class RecordMyDream extends React.Component {

  render() {
    return (

      <div className='container'>
        <h1 className="title has-text-centered">
          Record my Dream Page
        </h1>

        <div className="microphone">
          <Microphone />
        </div>
      </div>
    )
  }
}