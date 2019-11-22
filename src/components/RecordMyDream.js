import React from 'react'
import Microphone from '../components/Microphone'
// import EditEntry from '../components/EditEntry'

export default class RecordMyDream extends React.Component {

  render() {
    return (

      <div className='container'>

        <div className="spacer  has-text-centered">
          <h1 className="title ">
            Record My Dream
          </h1>
          <p >Click the "Toggle Microphone" button to start the mic. Speak as you normally would, your computer's microphone will detect the sound. You can use punctuation helper words such as "comma" or "period" to enhance your input. When you are done recording, click the button again to turn the mic off.</p>
        </div>


        <div>
          <Microphone />
        </div>

        {/* <EditEntry /> */}

      </div >
    )
  }
}