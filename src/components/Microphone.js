// 'use strict'
import React from "react"
<<<<<<< HEAD
import axios from "axios"
=======
// import axios from 'axios'

>>>>>>> d805cb01ff3e629b075463b87a8315d6ce8ec52f
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
      dreamText: ''
    }
    this.toggleListen = this.toggleListen.bind(this)
    this.handleListen = this.handleListen.bind(this)
    this.setDreamText = this.setDreamText.bind(this)
  }

  toggleListen() {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  }

  // Set recorded dream text to state
  
  setDreamText =(recordedDreamText) => {
    let savedText;
    this.setState({  dreamText: recordedDreamText }, () => {
      savedText = this.state.dreamText;
    })
    console.log("RECORDED DREAM TEXT ===>>>" + recordedDreamText)
    console.log("THIS IS state.dreamText ===>>>" + this.state.dreamText)
    
    axios.post(`${process.env.REACT_APP_API_URL}/dashboard`, { savedText }, { withCredentials:true })
    .then(themWords => {
      console.log(themWords)

  })
  .catch(err => console.log("Err in signup: ", err));
  }



  // setDreamText(recordedDreamText) {
  //   this.setState({
  //     dreamText: recordedDreamText
  //   })
  //   console.log("RECORDED DREAM TEXT ===>>>" + recordedDreamText)
  //   console.log("THIS IS state.dreamText ===>>>" + this.state.dreamText)
    
  // }


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

    recognition.onresult = event => {
      let interimTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
        // console.log("FINAL from inside recognition.onresult====>>>>" + finalTranscript);
        this.setDreamText(finalTranscript)
      }
      // console.log("FINAL====>>>> outside the loop ====>: " + finalTranscript);




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
          <i className="fas fa-microphone"></i>
          &nbsp;
          Toggle Microphone
          </button>
        <div id='interim' style={interim}></div>
        <div id='final' style={final}></div>

        {/* <button className='button is-primary'
          onClick={() => this.setDreamText()}>Log My Dream
        </button> */}

        <button className='button is-primary'
          onSubmit={event => this.handleSubmit(event)}>
          Log My Dream
        </button>

        <h1>DREAM TEXT FROM STATE: {this.state.dreamText}</h1>
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
  interim: {
    color: 'gray',
    borderBottom: '#ccc 1px solid',
    padding: '1em',
    margin: '1em',
    width: '700px'
  },
  final: {
    color: 'black',
    border: '#ccc 1px solid',
    padding: '1em',
    margin: '1em',
    width: '700px'
  }
}

const { container, button, interim, final } = styles