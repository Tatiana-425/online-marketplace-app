import React, { Component } from "react";
import Product from "./Product.jsx";
import "font-awesome/css/font-awesome.css";

export default class ForHome extends Component {
    state = {
      products: [
        { id: 1, productName: "item 1", price: 700, quantity: 0 },
        { id: 2, productName: "item 2", price: 500, quantity: 0 },
        { id: 3, productName: "item 3", price: 150, quantity: 0 },
        { id: 4, productName: "item 4", price: 20, quantity: 0 },
        { id: 5, productName: "item 5", price: 7, quantity: 0 },
        { id: 6, productName: "item 6", price: 70, quantity: 0 },
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
                onDelete={this.handleDelete}
                maxValue={10}
              >
                <button className="btn btn-primary m-3 text-left">Buy Now</button>
                <button className="btn btn-secondary m-2 text-right delete-button">
                  <i className="fa fa-times">
                    <span onClick={()=>{this.handleDelete(this.state.prod)}}>
                        Add to Shopping Cart
                     </span>
                     </i>
                     </button>
              </Product>
            ))}
          </div>
        </div>
      );
    }
    // executes when user clicks on delete button
  
    handleDelete = (productId) => {
      let allProducts = [...this.state.products];
      let index = allProducts.findIndex((product) => product.id === productId);
      if (window.confirm("Are you sure you want to delete?")){
  
      
    
      // delete a product based on index
      if (index !== -1) {
        allProducts.splice(index, 1);
        // Update the state
        this.setState({ products: allProducts });
      }
      }
    };
    
  }
  