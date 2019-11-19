import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
// import Dashboard from '../Dashboard';
//BrowserRouter as Router,

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            fullName: "",
            email: "",
            password: "",
            message: null
        }
    }

    genericSync(event) {
        // console.log("what is: ", event.target.value)
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        // console.log("submitting form");
        event.preventDefault();

        axios.post(
            // route we are hitting in the backend
            `${process.env.REACT_APP_API_URL}/api/login`,
            // the data from the form (AKA req.body 🚀) that we are sending to this route to do the job
            this.state,
            // secure sending
            { withCredentials: true }
        )
            .then(responseFromServer => {
                console.log("response is:", responseFromServer);
                const { userDoc } = responseFromServer.data;
                this.props.onUserChange(userDoc);
                alert("You are logged in.")
            })
            .catch((error) => {
                // Error
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the 
                    // browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })
    }


    render() {
        const { email, password } = this.state

        if (this.props.currentUser === null) {
            console.log('please input information')
        } else if (this.props.currentUser) {
            return (
                <Redirect to={`/dashboard`} />
            )
        }

        // if (this.props.currentUser) {

        //     return (
        //         <Redirect to={Dashboard} />
        //     )
        // }

        return (
            <div>

                <div className="columns is-centered">
                    <div className="column is-5-tablet is-4-desktop is-3-widescreen">

                        <div className="columns">
                            <div className="column">
                                <div className="card is-rounded form-style">
                                    <h1> Login </h1>
                                    <form onSubmit={event => this.handleSubmit(event)} >
                                        {/*----- EMAIL -----*/}
                                        <div className="field">
                                            <p className="control has-icons-left has-icons-right">
                                                <input
                                                    className="input"
                                                    value={email} // this.state.email
                                                    onChange={event => this.genericSync(event)}
                                                    type='email'
                                                    name='email'
                                                    placeholder='email@email.com'
                                                />
                                                <span className="icon is-small is-left">
                                                    <i className="fa fa-envelope"></i>
                                                </span>
                                                <span className="icon is-small is-right">
                                                    <i className="fa fa-check"></i>
                                                </span>
                                            </p>
                                        </div>

                                        {/*----- PASSWORD -----*/}
                                        <div className="field">
                                            <p className="control has-icons-left">
                                                <input
                                                    className="input"
                                                    value={password} // this.state.password
                                                    onChange={event => this.genericSync(event)}
                                                    type='password'
                                                    name='password'
                                                    placeholder='***********'
                                                />
                                                <span className="icon is-small is-left">
                                                    <i className="fa fa-lock"></i>
                                                </span>
                                            </p>
                                        </div>

                                        {/*----- SUBMIT -----*/}
                                        <div className="field">
                                            <p className="control">
                                                <button className="button is-primary">
                                                    Login
                                </button>
                                            </p>
                                        </div>

                                    </form>
                                    {this.state.message && <div> {this.state.message} </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}
