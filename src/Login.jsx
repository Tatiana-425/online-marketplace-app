import React, { Component } from "react";
import './NavBar.jsx';

export default class Login extends Component 
{
    constructor(props)
    {
     super(props);
     this.state={
       email: "",
       password: ""
     };
    }
render (){
    return <div className="col-lg-9">
        <h4 m-1 p-2 border-bottom>
            Login
            </h4>
            {/*Email starts here*/}
            <div className="form-group form-row">
                <label className="col-lg-4">Email: </label>
                <input 
                type="email" 
                className="form-control" 
                value={this.state.email}>
                </input>
            </div>
            {/*Email ends here*/}
            {/*Password starts here*/}
            <div className="form-group form-row">
                <label className="col-lg-4">Password: </label>
                <input
                 type="password" 
                 className="form-control"
                 value={this.state.password}>
                 </input>
            </div>
            {/*Password ends here*/}
        </div>;
      
}
}