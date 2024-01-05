import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 4,
    customers: [
      { 
        id: 1, 
        name: "Scott", 
        phone: "123-456", 
        address: {city: "London", street: "Abbey Road", building: 1}, 
        profilePicture: "https://picsum.photos/id/237/200/300", 
        VIPstatus: true, 
    },
      { 
        id: 2, 
        name: "Tim", 
        phone: "789-456", 
        address: {city: "Manchester", street: "Abbey Road", building: 1}, 
        profilePicture: "https://picsum.photos/id/1/367/267", 
        VIPstatus: false, 
    },
      { 
        id: 3, 
        name: "Ann", 
        phone: null, 
        address: {city: "Istanbul", street: "Abbey Road", building: 1}, 
        profilePicture: "https://picsum.photos/id/64/367/267", 
        VIPstatus: true,  
    },
      { 
        id: 4, 
        name: "John", 
        phone: "773-356",  
        address: {city: "Edinburgh", street: "Abbey Road", building: 1}, 
        profilePicture: "https://picsum.photos/id/177/367/267", 
        VIPstatus: false, 
    },
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
          <button className="btn btn-info" onClick={()=>{this.onRefreshClick();}}>
            Refresh
          </button>
        </span>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Profile Photo</th>
              <th>Customer Name</th>
              <th>Status</th>
              <th>Phone Number</th>
              <th>City</th>
              <th>Street</th>
              <th>Building</th>
            </tr>
          </thead>
          <tbody>
            {this.getCustomerRow()}
          </tbody>
        </table>
      </div>
    );
  }

  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };
  getPhoneNumberToRender = (phone) =>
  {
    {
        return (phone == null)? "Phone number is not indicated" : phone
    }
  }
  getPhoneNumberToRender2 = (phone) => {
    if (phone) return (phone);
    else {
        return <div className="bg-warning p-2 text-center">Phone number is not indicated</div>
    }
  }
  getCustomerRow = () => {
            return (
          <>
        {this.state.customers.map((cust, index) => (
          <tr
            key={cust.id}
            style={{ backgroundColor: cust.VIPstatus ? "pink" : "white" }}
          >
            <td>{index + 1}</td>
            <td>
                <img src={cust.profilePicture} alt="A profile photo" />
            </td>
            <td>{cust.name}</td>
            <td>{cust.VIPstatus ? "VIP" : "Regular"}</td>
            <td>{this.getPhoneNumberToRender2(cust.phone)}</td>
            <td>{cust.address.city}</td>
          </tr>
))}
      </>
        );
      };  
}
