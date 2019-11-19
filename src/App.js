import React from 'react';
import './App.css';
import axios from "axios";
import Nav from "./components/Nav"
// import 'react-bulma-components/dist/react-bulma-components.min.css'
// import img from './img/old.png'



export default class App extends React.Component {


  componentDidMount() {
    // this.axiosTest()  
    axios.get(`${process.env.REACT_APP_API_URL}/checkuser`, { withCredentials: true })
      .then(responseFromTheBackend => {
        const { userDoc } = responseFromTheBackend.data;
        this.syncCurrentUSer(userDoc);
      })
      .catch(err => console.log("Err while getting the user from the checkuser route: ", err))
  }

  syncCurrentUSer(user) {
    this.setState({ currentUser: user })
  }

  // axiosTest = () => {
  //   axios.get(`https://api.ocr.space/parse/imageurl?apikey=helloworld&url=${img}`)
  //   .then((res)=>{
  //     console.log(res)
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //   })

  // }


  render() {


    // console.log("the state in APPJS: ", this.state);
    return (

      <div >
        <Nav />
      </div>

    )
  }
}