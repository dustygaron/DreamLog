import React from 'react';
import './App.css';
import axios from "axios";
import Nav from "./components/Nav"


export default class App extends React.Component {


  componentDidMount() {
    // this.axiosTest()  
    axios.get(`${process.env.REACT_APP_API_URL}/checkuser`, { withCredentials: true })
      .then(responseFromTheBackend => {
        const { userDoc } = responseFromTheBackend.data;
        this.syncCurrentUSer(userDoc);
      })
      .catch(err => console.log("Error getting user App.js===>>>: ", err))
  }

  syncCurrentUSer(user) {
    this.setState({ currentUser: user })
  }

  render() {
    // console.log("the state in APPJS: ", this.state);
    return (
      <div >
        <Nav />
      </div>
    )
  }
}