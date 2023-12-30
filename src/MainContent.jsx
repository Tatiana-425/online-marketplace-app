import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      { id: 1, name: "Scott", phone: "123-456", address: {city: "London", street: "Abbey Road", building: 1} },
      { id: 2, name: "Tim", phone: "789-456", address: {city: "Manchester", street: "Abbey Road", building: 1} },
      { id: 3, name: "Ann", phone: null, address: {city: "Istanbul", street: "Abbey Road", building: 1}  },
      { id: 4, name: "Rick", phone: "773-356",  address: {city: "Edinburgh", street: "Abbey Road", building: 1}  },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="">{this.state.pageTitle}</h4>
        <span className="badge badge-primary m-2 badgestyle">
          {this.state.customersCount}
        </span>
        <span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </span>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone Number</th>
              <th>City</th>
              <th>Street</th>
              <th>Building</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((cust, index) => {
              return (
                <tr key={cust.id}>
                  <td>{index + 1}</td>
                  <td>{cust.name}</td>
                  <td>{(cust.phone == null)? "Phone number is not indicated" : cust.phone}</td>
                  <td>{cust.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };
}
