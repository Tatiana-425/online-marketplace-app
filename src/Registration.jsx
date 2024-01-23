import React, { Component } from "react";
import "font-awesome/css/font-awesome.css";

export default class Registration extends Component {
    render () {
        return (
          <html lang="en">
            <head>
              <title>Green Monkey</title>
              <link rel="stylesheet" href="App.css" />
            </head>
            <body>
              <header>
                <img src="logo.png" alt="Logo" />
              </header>
              <main>
                <form method="POST">
                <div>
                    <label htmlFor="name" className="registration">Name:</label>
                    <input type="text" id="name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="registration">Email Address:</label>
                    <input type="email" id="email" name="email" />
                  </div>
                  <div>
                    <label htmlFor="date_of_booking" className="registration">Date of Birth:</label>
                    <input type="date" id="date_of_booking" name="date_of_booking" />
                  </div>
                  <div>
                    <label className="registration">Gender:</label>
                    <input
                      type="text"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="registration">Password:</label>
                    <input type="password" id="password" />
                  </div>
                  <div>
                    <label htmlFor="cancellation_policy" className="registration">
                      I agree to the cancellation policy
                    </label>
                    <input
                      type="checkbox"
                      id="cancellation_policy"
                      name="cancellation_policy"
                      required
                    />
                  </div>
                  <div>
                    <button type="submit" className="registration">Register Now</button>
                  </div>
                </form>
              </main>
            </body>
          </html>
        );
      }
      
}