// 'use strict'
import React from "react"
import axios from "axios"


//-------SPEECH RECOGNITION-------------------
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.continous = true
recognition.interimResults = true
recognition.lang = 'en-US'


//-------COMPONENT-----------------------------
export default class Microphone extends React.Component {

  constructor() {
    super()
    this.state = {
      listening: false,
      dreamText: '',
      dreamName: '',
      success: '',
      condition: false
    }
    this.toggleListen = this.toggleListen.bind(this)
    this.handleListen = this.handleListen.bind(this)
    this.setDreamText = this.setDreamText.bind(this)
  }

  toggleListen = () => {
    this.setState({
      listening: !this.state.listening,
      condition: !this.state.condition
    }, this.handleListen)
  }

  genericSync = (event) => {
    // console.log("what is: ", event.target.value)
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  //--- SET RECORDING TO STATE ----------------------------------------
  setDreamText = (recordedDreamText) => {
    this.setState({
      dreamText: recordedDreamText
    })
    // console.log("RECORDED DREAM TEXT ===>>>" + recordedDreamText)
    // console.log("THIS IS state.dreamText ===>>>" + this.state.dreamText)
  }

  //--- SEND DREAM TO DB ----------------------------------------------
  sendDreamTextToDb = (dreamEntry) => {
    axios.post(`${process.env.REACT_APP_API_URL}/dreamRoute`, { dreamEntry }, { withCredentials: true })
      .then(thisDreamText => {
        console.log("This dream text in axios ===>>>" + thisDreamText)
      })
      .catch(err => console.log("Err sending dream text to database from axios: ", err));
  }


  //--- HANDLE LISTEN ---------------------------------------------------
  handleListen = () => {
    console.log('listening?', this.state.listening)

    if (this.state.listening) {
      recognition.start()
      recognition.onend = () => {
        console.log("...continue listening...")
        recognition.start()
      }

    } else {
      recognition.stop()
      recognition.onend = () => {
        console.log("Stopped listening per click")
      }
    }

    recognition.onstart = () => {
      console.log("Listening!")
    }

    let finalTranscript = ''

    recognition.onresult = event => {
      let interimTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
        // console.log("FINAL from inside recognition.onresult====>>>>" + finalTranscript);
        this.setDreamText(finalTranscript)
      }

      document.getElementById('interim').innerHTML = interimTranscript
      document.getElementById('final').innerHTML = finalTranscript


      //--- COMMANDS------------------------------------
      const transcriptArr = finalTranscript.split(' ')
      const stopCmd = transcriptArr.slice(-3, -1)
      console.log('stopCmd', stopCmd)

      if (stopCmd[0] === 'stop' && stopCmd[1] === 'listening') {
        recognition.stop()
        recognition.onend = () => {
          console.log('Stopped listening per command')
          const finalText = transcriptArr.slice(0, -3).join(' ')
          document.getElementById('final').innerHTML = finalText
        }
      }
    }

    recognition.onerror = event => {
      console.log("Error occurred in recognition: " + event.error)
    }
  }


  //--- HANDLE SUBMIT --------------------------------------------
  handleSubmit(event) {
    console.log("submitting form");
    event.preventDefault();

    axios.post(
      `${process.env.REACT_APP_API_URL}/dreamRoute`,
      this.state,
      { withCredentials: true }
    )
      .then(responseFromServer => {
        console.log("response from handle submit is~~~>>>:", responseFromServer);
      })
      .then(this.clearState(this.state))
      .catch((error) => {
        console.log('error from handle submit', error);
      })
  }

  clearState = (state) => {
    this.setState({
      dreamText: '',
      dreamName: '',
      success: 'Success! Your dream has been logged.'
    })
  }


  //--- MIC BUTTON ------------------------------------------



  //--- RENDER -----------------------------------------------
  render() {

    const { dreamName } = this.state

    return (
      <div>

        <div className='mic-container microphone card is-rounded form-style' >
          <h2 className="title">Make Your Recording</h2>
          <button className={this.state.condition ? "mic-button toggled" : "button"}
            toggleClassName={this.toggleListen}
            id='microphone-btn'
            className="button"
            onClick={this.toggleListen}>
            <i className="fas fa-microphone"></i>
            &nbsp;
            Toggle Microphone
          </button>

          <div
            onClick={this.handleClick}
            className={this.state.condition ? "mic-button toggled" : "mic-button"}
          >
            <span>Recording</span>
          </div>

          <div id='interim'></div>


          <div className="has-text-left textarea">
            <p>Final Text:</p>
            <div id='final'></div>
          </div>

        </div>

        <div className='card is-rounded form-style' >
          <form onSubmit={event => this.handleSubmit(event)}>

            <h2 className="title">Add Dream Details</h2>


            <div className="field">
              <label className="label">Dream Name</label>
              <div className="control">
                <input
                  className="input"
                  value={dreamName}
                  onChange={event => this.genericSync(event)}
                  type='text'
                  name='dreamName'
                />
              </div>
            </div>

            <button className="button">Log my Dream</button>
          </form>

          <p className="success">{this.state.success}</p>
          {/* <h1>DREAM TEXT FROM STATE: {this.state.dreamText}</h1> */}
        </div >

      </div >
    )
  }
}

