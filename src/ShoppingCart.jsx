import React, { Component } from "react";
import Product from "./Product.jsx";


export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iPhone", price: 700, quantity: 0 },
      { id: 2, productName: "Samsung", price: 500, quantity: 0 },
      { id: 3, productName: "Winter Coat", price: 150, quantity: 0 },
      { id: 4, productName: "Hat", price: 20, quantity: 0 },
      { id: 5, productName: "Juice", price: 7, quantity: 0 },
      { id: 6, productName: "Toy", price: 70, quantity: 0 },
    ],
  };

  render() {
    return (
      
        <div className="container-fluid">
          <h1>Shopping Cart</h1>
        
        <div className="row">
        {this.state.products.map((prod)=>{
            return <Product key={prod.id} id={prod.id} productName={prod.productName} price={prod.price}/>
        })}
        </div>
      </div>
    );
  }
}


