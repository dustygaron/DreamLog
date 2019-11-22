import React from 'react'
import axios from 'axios'
import { NavLink } from "react-router-dom"

export default class Logout extends React.Component {

  componentDidMount() {
    axios.post(`${process.env.REACT_APP_API_URL}/api/logout`,
      this.state, { withCredentials: true }
    )
      .then(res => { console.log('Success! You have been logged out====>>>>', res) })
      .catch(err => { console.log('Something went wrong logging out====>>>>', err) })
  }

  render() {
    return (
      <div>

        <div className="columns is-centered">
          <div className="column is-5-tablet is-4-desktop is-3-widescreen">

            <div className="columns">
              <div className="column">
                <div className="card is-rounded form-style">
                  <h1>You are logged out.</h1>
                  <p>
                    <NavLink to="/login-page" className="button is-light ">
                      Login again
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    )
  }

}