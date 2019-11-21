import React from 'react'
import logo from "../img/logo.png"
import { Switch, Route, NavLink } from "react-router-dom"
import Home from './Home'
import Signup from "../components/user-pages/Signup"
import Login from '../components/user-pages/Login'
import RecordMyDream from '../components/RecordMyDream'

import Dashboard from '../components/Dashboard';
// import CountriesList from '../components/CountriesList'
import axios from 'axios'
// import Personal from '../components/Personal'




export default class Nav extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null,

    }
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/api/checkuser`, { withCredentials: true })
      .then(responseFromTheBackend => {
        // console.log("User in APP.JS: ", responseFromTheBackend)
        const { userDoc } = responseFromTheBackend.data;
        this.syncCurrentUSer(userDoc);
      })
      .catch(err => console.log("Err while getting the user from the checkuser route: ", err))
  }

  syncCurrentUSer(user) {
    this.setState({ currentUser: user })
  }


  render() {
    return (
      <div>
        <div className="dark-purple-gradient">


          <nav className="navbar container dark-purple-gradient" role="navigation" aria-label="main navigation" >

            <div className="navbar-brand">
              <NavLink to="/" className="navbar-item" >
                <img src={logo} width="152" height="28" alt="lazy reader logo" />
              </NavLink>

              <a href="https://#" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              {/* <div className="navbar-start center-nav-text">
                <NavLink to="/textToSpeech" className="navbar-item" >
                  Record My Dream
              </NavLink>
              </div> */}

              <div className="navbar-end">
                <div className="navbar-item">
                  {this.state.currentUser &&
                    <NavLink to="/record-my-dream" className="navbar-item top-nav-item" >
                      Record My Dream
                 </NavLink>
                  }
                  {this.state.currentUser &&
                    <NavLink to="/dashboard" className="navbar-item top-nav-item" >
                      Dashboard
                 </NavLink>
                  }
                  <div className="buttons">
                    <NavLink to="/signup-page" className="button is-primary">
                      <strong>Sign up</strong>
                    </NavLink>
                    <NavLink to="/login-page" className="button is-light ">
                      Log in
                  </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/record-my-dream" component={RecordMyDream} />

          <Route exact path="/dashboard" component={Dashboard} />


          <Route exact path="/signup-page" render={(props) =>
            <Signup {...props}
              currentUser={this.state.currentUser}
              onUserChange={userDoc => this.syncCurrentUSer(userDoc)}
            />
          } />

          <Route exact path="/login-page" render={(props) =>
            <Login {...props}
              currentUser={this.state.currentUser}
              onUserChange={userDoc => this.syncCurrentUSer(userDoc)}
            />
          } />

          {/* Login component */}
          {/* <Route exact path="/sign-up" component={Dashboard} /> */}

          {/* <Route exact path="/dashboard/:id"
            render={props => <Dashboard {...props}
              theUser={this.state.currentUser._id}
            />
            } /> */}
        </Switch>

      </div>


    )
  }
}