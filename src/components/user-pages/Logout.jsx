import React from "react";
import {Redirect} from "react-router-dom";
// import {Button} from "semantic-ui-react";

class Logout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            navigate: false,
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }








    logout = () => {
        localStorage.clear("token");
        this.setState({negative: true});
    };

    render() {
        const {navigate} = this.state
        if(navigate){
            return <Redirect to="/" push={true} />
        }

        return <button onClick={this.logout}> Log Out </button>;
        // return <Button onClick={this.logout}> Log Out </Button>;

    }
}

export default Logout;