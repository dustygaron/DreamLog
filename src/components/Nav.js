import React from 'react'
import logo from "../img/logo.png"
import { Switch, Route, NavLink } from "react-router-dom"
import Home from './Home'
import Signup from "../components/user-pages/Signup"
import Login from '../components/user-pages/Login'
import RecordMyDream from '../components/RecordMyDream'
import Dashboard from '../components/Dashboard';
import axios from 'axios'
import Logout from '../components/Logout'



export default class Nav extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null,
    }
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/api/checkuser`, { withCredentials: true })
      .then(res => {
        console.log("User in app.js===>>> ", res)
        // const { userDoc } = res.data;
        this.syncCurrentUSer(res.data);
      })
      .catch(err => console.log("Error while getting the user from the checkuser route: ", err))
  }

  syncCurrentUSer(user) {
    this.setState({ currentUser: user })
    console.log('Sync current user set to===>>>', user)
  }


  render() {

    return (
      <div>
        <div className="dark">

          <nav className="navbar container" role="navigation" aria-label="main navigation" >

            <div className="navbar-brand">
              <NavLink to="/" className="navbar-item" >
                <img src={logo} width="152" height="28" alt="dream log logo" />
              </NavLink>

              <a href="https://#" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">

              <div className="navbar-end">
                <div className="navbar-item">

                  {this.state.currentUser &&
                    <NavLink to="/record-my-dream" className="navbar-item top-nav-item" >
                      Record My Dream
                    </NavLink>
                  }

                  {this.state.currentUser &&
                    <NavLink to="/dashboard" className="navbar-item top-nav-item" coolName={this.state.currentUser}>
                      Dashboard
                    </NavLink>
                  }

                  <div className="buttons">

                    {!this.state.currentUser &&
                      <NavLink to="/signup-page" className="button is-primary">
                        <strong>Sign up</strong>
                      </NavLink>
                    }

                    {!this.state.currentUser &&
                      <NavLink to="/login-page" className="button is-light ">
                        Log in
                      </NavLink>
                    }

                    {this.state.currentUser &&
                      <NavLink to="/logged-out" className="button" >
                        Log Out
                      </NavLink>
                    }

                  </div>

                </div>
              </div>
            </div>
          </nav>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/record-my-dream" component={RecordMyDream} /> */}
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}

          <Route exact path="/record-my-dream" render={(props) =>
            <RecordMyDream {...props}
              currentUser={this.state.currentUser}
              onUserChange={userDoc => this.syncCurrentUSer(userDoc)}
            />
          } />

          <Route exact path="/dashboard" render={(props) =>
            <Dashboard {...props}
              currentUser={this.state.currentUser}
              onUserChange={userDoc => this.syncCurrentUSer(userDoc)}
            />
          } />

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

          <Route exact path="/logged-out" render={(props) =>
            <Logout {...props}
              currentUser={this.state.currentUser}
              onUserChange={userDoc => this.syncCurrentUSer(userDoc)}
            />
          } />

        </Switch>
      </div >
    )
  }
}