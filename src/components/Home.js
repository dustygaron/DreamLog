import React from "react"
import audioGif from '../img/audio.gif'
import audio3 from '../img/audio3.gif'
import { NavLink } from 'react-router-dom'


export default class Home extends React.Component {

  render() {
    return (
      <div>

        <div className="parallax home">

          <div id="group1" className="parallax__group">
            <div className="parallax__layer parallax__layer--base first-slide ">
              <h1 className="title ">
                Log your dreams through speech input.
              </h1>
              <h2 className="subtitle">
                Speak your dreams, track your subconscious.
              </h2>
              <div className="audio-gif">
                <img src={audioGif} alt="audio gif" />
              </div>
            </div>
          </div>

          <div id="group2" className="parallax__group ">
            <div className="parallax__layer parallax__layer--base trans">
              <div className="flex container">
                <div className="left-side">
                  <h1 className="title has-text-left">
                    Take a mental inventory
                  </h1>
                  <h2 className="subtitle has-text-left">
                    Fire up the app as soon as you wake up. Log your dreams as they are fresh in your mind.
                  </h2>
                </div>
                <div className="placeholder">
                  <img src={audio3} alt="audio gif" />
                </div>
              </div>
            </div>
            <div className="parallax__layer parallax__layer--back">
              {/* <div className="title">
                FILLER BG IMAGE HERE
              </div> */}
            </div>
          </div>


          <div id="group3" className="parallax__group">
            <div className="parallax__layer parallax__layer--fore">
              <div className="title">Foreground Layer</div>
            </div>
            <div className="parallax__layer parallax__layer--base">
              <div className="title">zzzzz zzzz z z zzzz zzzzzz</div>
            </div>
          </div>

          <div id="group4" className="parallax__group">
            <div className="parallax__layer parallax__layer--base">
              <div className="flex container">
                <div className="left-side">
                  <h1 className="title has-text-left">
                    Reflect on your Subconscious
                  </h1>
                  <h2 className="subtitle has-text-left">
                    Turn your speech to text, creating a running inventory of your dream states.
                  </h2>
                </div>
                <div className="right-side">
                  <div className="box-1">
                    <i class="fas fa-book"></i>
                  </div>
                  <div className="box-2">
                    <i class="fas fa-comment-dots"></i>
                  </div>
                  <div className="box-3">
                    <i class="fas fa-feather-alt"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="parallax__layer parallax__layer--back">
              {/* <div className="title">Background Layer</div> */}
            </div>

            <div className="parallax__layer parallax__layer--deep">
              {/* <div className="title">Deep Background Layer</div> */}
            </div>

          </div>



          <section className="section has-text-centered gradient-1">
            <div className="container">
              <h1 className="title">Ready to try it out?</h1>
              <h2 className="subtitle">
                Let's get started! It only takes a second to <strong>create your account</strong>.
                    </h2>

              <p className="account-form">
                <NavLink to="/signup-page">
                  <button className="button">Create your Account</button>
                </NavLink>
              </p>
            </div>
          </section>

        </div>


        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              &copy; 2019 <strong>DreamLog</strong> is a project by <a href="https://github.com/dustygaron">Dusty Garon</a> and
               <a href="https://github.com/OscarLeon15"> Oscar Leon</a>.
             </p>
          </div>
        </footer>

      </div>
    )
  }
}