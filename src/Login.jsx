import React, { Component } from "react";
import './NavBar.jsx';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            message: ""
        };
    }

    // executes when user clicks Log In button
    onLoginClick = () => {
        console.log(this.state.message);
        if (this.state.email === "admin@test.com" && this.state.password === "admin") {
            this.setState({
                message: <span className="text-success">You have been logged in</span>
            });
        } else {
            this.setState({
                message: <span className="text-danger">Your password and/or email are not correct</span>
            });
        }
    };

    render() {
        return (
            <div className="col-lg-9">
                <h4 m-1 p-2 border-bottom>
                    Login
                </h4>
                {/* Email starts here */}
                <div className="form-group form-row">
                    <label className="col-lg-4">Email: </label>
                    <input
                        type="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={(event) => { this.setState({ email: event.target.value }) }}>
                    </input>
                </div>
                {/* Email ends here */}
                {/* Password starts here */}
                <div className="form-group form-row">
                    <label className="col-lg-4">Password: </label>
                    <input
                        type="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={(event) => { this.setState({ password: event.target.value }) }}>
                    </input>
                </div>
                {/* Password ends here */}
                <div className="text-right">
                    <button className="btn btn-primary m-3" onClick={this.onLoginClick}>
                        Log In
                    </button>
                </div>
                {/* Message display */}
                <div>{this.state.message}</div>
            </div>
        );
    }
}


