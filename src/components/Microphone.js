// 'use strict'
import React from "react"
import axios from "axios"
import Logout from "../components/user-pages/Logout"
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
      dreamName: ''
    }
    this.toggleListen = this.toggleListen.bind(this)
    this.handleListen = this.handleListen.bind(this)
    this.setDreamText = this.setDreamText.bind(this)
  }

  toggleListen = () => {
    this.setState({
      listening: !this.state.listening
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
      .catch((error) => {
        console.log('error from handle submit', error);
      })
  }

  //--- RENDER -----------------------------------------------
  render() {

    const { dreamName } = this.state

    return (
      <div className='mic-container' >
        <button id='microphone-btn'
          className="button"
          onClick={this.toggleListen}>
          <i className="fas fa-microphone"></i>
          &nbsp;
          Toggle Microphone
          </button>
        <div id='interim'></div>
        <div id='final'></div>

        <form onSubmit={event => this.handleSubmit(event)} >
          <input
            className="input"
            value={dreamName} // this.state.email
            onChange={event => this.genericSync(event)}
            type='text'
            name='dreamName'
          />
          <button>Submit</button>
        </form>

        <Logout />
        {/* <h1>DREAM TEXT FROM STATE: {this.state.dreamText}</h1> */}
      </div>
    )
  }
}



