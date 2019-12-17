import React from "react"
// import audioGif from '../img/audio.gif'
// import audio3 from '../img/audio3.gif'
import { NavLink } from 'react-router-dom'
import Wave from '../components/Wave'
import WaveSection from '../components/WaveSection'
import Card from '../components/Card'


export default class Home extends React.Component {

  render() {
    return (
      <div>

        <section className="hero is-full-height">
          <div className="hero-group">
            <h1>Log Your Dreams<br /> Through Speech Input</h1>
            <p>Speak your dreams, track your subconscious.</p>
          </div>
          <Wave />
        </section>

        <section>
          <div className="cards container">
            <h2>Take a Mental Inventory</h2>
            <div className="card-group">
              <Card
                title="Dream 1"
                text="Jan 1, 2020"
                img={'https://i.gifer.com/RfR5.gif'}
              />
              <Card
                title="Dream 2"
                text="Jan 2, 2020"
                img={'https://i.gifer.com/HAFq.gif'}
              />
              <Card
                title="Dream 3"
                text="Jan 3, 2020"
                img={'https://i.gifer.com/WJD.gif'}
              />
              <Card
                title="Dream 4"
                text="Jan 4, 2020"
                img={'https://i.gifer.com/T3B1.gif'}
              />
              <Card
                title="Dream 5"
                text="Jan 5, 2020"
                img={'https://i.gifer.com/rn.gif'}
              />
            </div>
          </div>
        </section>

        <section style={{ paddingTop: '30px' }}>
          <WaveSection
            title='Fire up the app as soon as you wake up.'
            text='Log dreams as they are fresh in your memory.'
            logo={require('../img/mic.gif')}
          />
        </section>



        <section className="section has-text-centered cta">
          <div className="container">
            <h3 className="title">Ready to try it out?</h3>
            <p className="subtitle">
              Let's get started! It only takes a second to create your account.
                    </p>

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
              &copy; 2019 <strong>DreamLog</strong> is a project by <a href="https://github.com/dustygaron">Dusty Garon</a>.
             </p>
          </div>
        </footer>

      </div >
    )
  }
}