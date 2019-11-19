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
      voiceText: '',
    }
    this.toggleListen = this.toggleListen.bind(this)
    this.handleListen = this.handleListen.bind(this)
  }

  toggleListen() {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  }

// this will be the save method!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  saveTheVoice = (theString) => {
    let savedText;
    this.setState({voiceText: theString}, () => {
       savedText = this.state.voiceText;
    })

    axios.post(`${process.env.REACT_APP_API_URL}/dashboard`, { savedText }, { withCredentials:true })
    .then(themWords => {
      console.log(themWords, "themwords in the savethevoice" )

      // console.log("this is just the saved text",savedText);
  })
  .catch(err => console.log("Err in savingText: ", err));
  }


  handleListen() {

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
    let that = this;
    let finalTranscript = ''
    console.log("FINAL====>>>> outside of loop: " + finalTranscript);

    recognition.onresult = event => {
      let interimTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
      console.log("FINAL====>>>> inside the loop ====>: " + finalTranscript);
      this.saveTheVoice(finalTranscript.value)
      console.log("wtff: ", this.saveTheVoice(finalTranscript.value))



      document.getElementById('interim').innerHTML = interimTranscript
      document.getElementById('final').innerHTML = finalTranscript

      //-------COMMANDS------------------------------------

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
    // console.log("FINAL====>>>>" + finalTranscript);
    // that.saveTheVoice(finalTranscript)
    //------------------------------------------------------

    recognition.onerror = event => {
      console.log("Error occurred in recognition: " + event.error)
    }

  }

  render() {
    return (
      <div style={container}>
        <button id='microphone-btn'
          className="button"
          style={button}
          onClick={this.toggleListen}>
          Toggle Microphone
          </button>
        <div id='interim' style={interim}></div>
        <div id='final' style={final}></div>
      </div>
    )
  }
}




//-------CSS------------------------------------

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  // button: {
  //   width: '60px',
  //   height: '60px',
  //   background: 'lightblue',
  //   borderRadius: '50%',
  //   margin: '6em 0 2em 0'
  // },
  interim: {
    color: 'gray',
    border: '#ccc 1px solid',
    padding: '1em',
    margin: '1em',
    width: '300px'
  },
  final: {
    color: 'black',
    border: '#ccc 1px solid',
    padding: '1em',
    margin: '1em',
    width: '300px'
  }
}

const { container, button, interim, final } = styles