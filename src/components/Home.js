import React from "react"
import placeholderImg from '../img/placeholder.png'
import { NavLink } from 'react-router-dom'

export default class Home extends React.Component {

  render() {
    return (
      <div>


        <section className="hero dark-purple-gradient is-fullheight">

          <div className="hero-body">
            <div className="container has-text-centered adjust-40-up">
              <h1 className="title">
                Log your dreams through speech input.
        </h1>
              <h2 className="subtitle">
                Speak your dreams, track your subconscious.
        </h2>
            </div>
          </div>
        </section>


        <section className="hero hero-home-2 is-medium">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Take a mental inventory
        </h1>
              <h2 className="subtitle">
                Fire up the app as soon as you wake up. Log your dreams as they are fresh in your mind.
        </h2>
              <div className="placeholder">
                <img src={placeholderImg} alt="" />
              </div>
            </div>
          </div>
        </section>


        <section className="hero hero-home-3 is-medium">
          <div className="container flex">
            <div>
              <h1 className="title has-text-left">
                Reflect on your Subconscious
              </h1>
              <h2 className="subtitle has-text-left">
                Turn your speech to text, creating a running inventory of your dream states.
              </h2>
            </div>
            <div>
              <img src={placeholderImg} alt="" className="placeholder-2" />
            </div>
          </div>
        </section>


        <section className="section has-text-centered">
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