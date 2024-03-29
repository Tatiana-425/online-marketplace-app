import React, { Component } from "react";
import Product from "./Product";

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

  handleIncrement = (product) => {
    const maxValue = 10;

    if (product) {
      let allProducts = [...this.state.products];
      let index = allProducts.indexOf(product);

      if (index !== -1 && allProducts[index].quantity < maxValue) {
        allProducts[index].quantity++;
        // Update the state 
        this.setState({ products: allProducts });
      }
    }
  };

  handleDecrement = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    // Check the index before updating the quantity
    if (index !== -1 && allProducts[index].quantity > 0) {
      allProducts[index].quantity--;
      // Update the state 
      this.setState({ products: allProducts });
    }
  };

  handleDelete = (productId) => {
    let allProducts = [...this.state.products];
    let index = allProducts.findIndex((product) => product.id === productId);
    if (window.confirm("Are you sure you want to delete?")) {
      // delete a product based on index
      if (index !== -1) {
        allProducts.splice(index, 1);
        // Update the state
        this.setState({ products: allProducts });
      }
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <h1>Shopping Cart</h1>
        <div className="row">
          {this.state.products.map((prod) => (
            <Product
              key={prod.id}
              id={prod.id}
              productName={prod.productName}
              price={prod.price}
              quantity={prod.quantity}
              onIncrement={() => this.handleIncrement(prod)}
              onDecrement={() => this.handleDecrement(prod)}
              onDelete={() => this.handleDelete(prod.id)}
              maxValue={10}
            >
              <button className="btn btn-primary m-3 text-left">Buy Now</button>
              <button
                className="btn btn-secondary m-2 text-right delete-button"
                onClick={() => this.handleDelete(prod.id)}
              >
                <i className="fa fa-times"></i>
                <span>Delete</span>
              </button>
            </Product>
          ))}
        </div>
      </div>
    );
  }
}
