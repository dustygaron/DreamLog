import React from "react";
import axios from "axios";
// import { BrowserRouter as Router, Redirect } from 'react-router-dom'
// import Dashboard from "../Dashboard";



export default class Signup extends React.Component {
    constructor(props) {
        super(props);
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
        // console.log("=====>" + this.state.fullName, this.state.email, this.state.password, this.state.message);
        console.log("=====>" + this.state.fullName, this.state.email, this.state.password);
        console.log("submitting form");
        event.preventDefault();

        axios.post(
            // route we are hitting in the backend
            `${process.env.REACT_APP_API_URL}/api/signup`,
            // the data from the form (AKA req.body 🚀) that we are sending to this route to do the job
            this.state,
            // secure sending
            { withCredentials: true }
        )
            .then(responseFromServer => {
                console.log("response is:", responseFromServer);
                const { userDoc } = responseFromServer.data;
                this.props.onUserChange(userDoc);
            })
            .catch(err => console.log("Err in signup: ", err));
    }

    render() {
        console.log("Do I have user in Signup: ", this.props.currentUser)
        const { fullName, email, password } = this.state;
        console.log("STATE: ", this.state);
        if (this.props.currentUser) {
            return (
                <div>
                    <h2> Welcome to your app, {this.props.currentUser.fullName} ! You're signed in! </h2>
                </div>
                //         // <Redirect to="/login-page" />
                //         <Redirect to={Dashboard} />
                // } else {
                //     // alert('Sorry that E-mail has already been used!')
                //     <Redirect to={Signup} />
                // }
            )
        }

        return (
            <div className="columns is-centered">
                <div className="column is-5-tablet is-4-desktop is-3-widescreen">

                    <div className="columns">
                        <div className="column">
                            <div className="card is-rounded form-style">

                                <h1> Sign Up </h1>
                                <form onSubmit={event => this.handleSubmit(event)} >
                                    {/*----- FULL NAME -----*/}
                                    <div className="field">
                                        <p className="control has-icons-left has-icons-right">
                                            <input
                                                className="input"
                                                value={fullName} // this.state.email
                                                onChange={event => this.genericSync(event)}
                                                type='text'
                                                name='fullName'
                                                placeholder='Full Name'
                                            />
                                            <span className="icon is-small is-left">
                                                <i className="fa fa-envelope"></i>
                                            </span>
                                            <span className="icon is-small is-right">
                                                <i className="fa fa-check"></i>
                                            </span>
                                        </p>
                                    </div>


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
                                                Sign Up
                                            </button>
                                        </p>
                                    </div>
                                </form>
                                {/* if the message is not null (basically if there's a message) then show it in this <div> tag */}
                                {this.state.message && <div> {this.state.message} </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}